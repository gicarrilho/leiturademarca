/* ============================================================================
   CONEXAO COM O BANCO  ·  Giovanna Carrilho
   ----------------------------------------------------------------------------
   Este arquivo guarda o endereco do seu projeto no Supabase e a CHAVE PUBLICA.
   Ele e usado pelo site, pela tela de login e pelo admin. Um lugar so.

   A chave que esta aqui e a chave PUBLICA (publishable). Ela pode ficar
   a vista de todo mundo, porque quem protege os seus dados nao e ela: e o RLS
   que voce ligou no arquivo banco.sql.

   NUNCA coloque aqui a chave secreta (service_role). Nem aqui, nem em
   nenhum outro arquivo deste projeto.

   Se um dia voce trocar de projeto no Supabase, so precisa mudar as duas
   linhas abaixo. O resto do painel continua funcionando.
   ============================================================================ */

window.BANCO = {
  url:   'https://ujzadkmdyewueuxplcfq.supabase.co',
  chave: 'sb_publishable_sVvnkrBqPYfL8gjb1Zyafg_lYUwJM8B'
};


/* ----------------------------------------------------------------------------
   Liga o cliente do Supabase.
   Precisa que a tag <script> do Supabase por CDN venha ANTES deste arquivo.
   Se por algum motivo ela nao carregar, a gente nao deixa a pagina morrer:
   window.sb fica nulo e cada pagina mostra um aviso em portugues.
   ---------------------------------------------------------------------------- */

window.sb = null;
window.BANCO_ERRO = null;

try {
  if (window.supabase && typeof window.supabase.createClient === 'function') {
    window.sb = window.supabase.createClient(window.BANCO.url, window.BANCO.chave, {
      auth: {
        persistSession: true,      // mantem voce logada ao fechar e abrir a aba
        autoRefreshToken: true,
        detectSessionInUrl: true   // necessario para o link de trocar a senha
      }
    });
  } else {
    window.BANCO_ERRO = 'A biblioteca do Supabase nao carregou. Confira a sua internet e recarregue a pagina.';
  }
} catch (e) {
  window.BANCO_ERRO = 'Nao foi possivel ligar no banco de dados. Recarregue a pagina.';
}


/* ============================================================================
   AJUDANTES QUE O SITE E O ADMIN USAM
   ============================================================================ */

window.Banco = {

  /* --------------------------------------------------------------------------
     REGISTRO DE VISITA
     Usado no site. Grava uma linha na tabela visitas: a data, qual pagina
     e de onde a pessoa veio. Nao usa nenhum servico de fora, nao pede nada
     para o visitante e nao guarda nada que identifique ninguem.

     Grava no maximo uma visita por pessoa a cada 30 minutos, para a mesma
     pessoa recarregando a pagina nao inflar os seus numeros.

     Se der qualquer erro, ele fica quieto. Um problema no contador nunca
     pode atrapalhar quem esta lendo o seu site.
     -------------------------------------------------------------------------- */
  async registrarVisita() {
    try {
      if (!window.sb) return;

      var agora = Date.now();
      var trinta = 30 * 60 * 1000;

      // sessionStorage pode estar bloqueado em aba privada, por isso o try
      try {
        var ultima = window.sessionStorage.getItem('visita_em');
        if (ultima && (agora - Number(ultima)) < trinta) return;
        window.sessionStorage.setItem('visita_em', String(agora));
      } catch (e) { /* segue mesmo sem memoria */ }

      await window.sb.from('visitas').insert({
        data:   new Date().toISOString().slice(0, 10),
        pagina: (location.pathname || '/'),
        origem: window.Banco.deOndeVeio()
      });
    } catch (e) { /* silencio de proposito */ }
  },

  /* --------------------------------------------------------------------------
     DE ONDE A PESSOA VEIO
     Le o endereco de onde ela clicou e devolve um nome curto e legivel.
     Se ela digitou o endereco na mao ou veio de um app, devolve "direto".
     -------------------------------------------------------------------------- */
  deOndeVeio() {
    try {
      // se o link tiver ?utm_source=algumacoisa, esse nome ganha
      var utm = new URLSearchParams(location.search).get('utm_source');
      if (utm) return String(utm).toLowerCase().slice(0, 40);

      var r = document.referrer || '';
      if (!r) return 'direto';

      var dominio = new URL(r).hostname.replace(/^www\./, '').toLowerCase();

      // o proprio site nao conta como origem
      if (dominio === location.hostname.replace(/^www\./, '').toLowerCase()) return 'direto';

      var conhecidos = {
        'instagram.com': 'instagram',
        'l.instagram.com': 'instagram',
        'facebook.com': 'facebook',
        'l.facebook.com': 'facebook',
        'lm.facebook.com': 'facebook',
        'google.com': 'google',
        'google.com.br': 'google',
        'youtube.com': 'youtube',
        'm.youtube.com': 'youtube',
        'tiktok.com': 'tiktok',
        'linkedin.com': 'linkedin',
        'wa.me': 'whatsapp',
        'api.whatsapp.com': 'whatsapp',
        'web.whatsapp.com': 'whatsapp',
        't.co': 'twitter',
        'x.com': 'twitter'
      };
      return conhecidos[dominio] || dominio.slice(0, 40);
    } catch (e) {
      return 'direto';
    }
  },

  /* --------------------------------------------------------------------------
     VIDEOS QUE APARECEM NO SITE
     Le a tabela videos, so os visiveis, na ordem que voce arrumou no admin.
     Devolve uma lista vazia se der erro, nunca quebra a pagina.
     -------------------------------------------------------------------------- */
  async videosDoSite() {
    try {
      if (!window.sb) return [];
      var r = await window.sb
        .from('videos')
        .select('*')
        .eq('visivel', true)
        .order('ordem', { ascending: true })
        .order('id', { ascending: true });
      if (r.error) return [];
      return r.data || [];
    } catch (e) {
      return [];
    }
  },

  /* --------------------------------------------------------------------------
     CADASTRAR UMA LEAD VINDA DO FORMULARIO DO SITE
     Entra sempre no comeco do funil, com status 'Contato realizado', que e a
     unica coisa que a tranca do banco deixa um visitante gravar.
     Devolve { ok: true } ou { ok: false, mensagem: 'texto em portugues' }.
     -------------------------------------------------------------------------- */
  async cadastrarLead(dados) {
    try {
      if (!window.sb) {
        return { ok: false, mensagem: 'Sem conexao agora. Tente de novo em um instante.' };
      }
      var nome = (dados && dados.nome ? String(dados.nome) : '').trim();
      if (!nome) {
        return { ok: false, mensagem: 'Escreva o seu nome, por favor.' };
      }
      /* junta o @ e o telefone num campo so, que e como o painel mostra o contato */
      var contato = [(dados.instagram || '').trim(),
                     (dados.telefone  || '').trim(),
                     (dados.email     || '').trim()].filter(Boolean).join(' · ');
      var r = await window.sb.from('leads').insert({
        lead:           nome.slice(0, 120),
        contato:        contato.slice(0, 160),
        notas:          (dados.obs || '').trim().slice(0, 2000),
        origem:         'Instagram',
        icp:            'A confirmar',
        status:         'Contato realizado',
        ultimo_contato: new Date().toISOString().slice(0, 10)
      });
      if (r.error) {
        return { ok: false, mensagem: 'Nao conseguimos enviar agora. Tente de novo em um instante.' };
      }
      return { ok: true };
    } catch (e) {
      return { ok: false, mensagem: 'Nao conseguimos enviar agora. Tente de novo em um instante.' };
    }
  }

};
