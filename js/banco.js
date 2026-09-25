/* ============================================================================
   CONEXAO COM O BANCO  ·  Giovanna Carrilho
   ----------------------------------------------------------------------------
   Este arquivo guarda o endereco do seu projeto no Supabase e a CHAVE PUBLICA.
   E usado pela tela de login e pelo painel. Um lugar so.

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
   AJUDANTE PARA O DIA EM QUE VOCE COLOCAR UM FORMULARIO NO SITE
   ============================================================================ */

window.Banco = {

  /* --------------------------------------------------------------------------
     CADASTRAR UMA LEAD VINDA DO FORMULARIO DO SITE
     Entra sempre no comeco do funil, com status 'Contato realizado', que e a
     unica coisa que a tranca do banco deixa um visitante gravar.
     Devolve { ok: true } ou { ok: false, mensagem: 'texto em portugues' }.

     Hoje o seu site nao tem formulario. Esta funcao fica pronta aqui para
     quando voce quiser um, sem precisar mexer na tranca do banco.
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
      /* junta o @, o telefone e o e-mail num campo so, que e como o painel
         mostra o contato da lead */
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
