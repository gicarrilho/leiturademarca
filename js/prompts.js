/* ============================================================================
   PROMPTS PADRAO  ·  Giovanna Carrilho
   ----------------------------------------------------------------------------
   Os prompts que voce usa de verdade, prontos para preencher e copiar.

   Funciona igual a aba Mensagens: o que esta entre colchetes vira campo.
   Campo curto vira caixinha, campo de colar vira area grande. O botao
   copia tudo ja preenchido.

   Para mudar um prompt, mexa neste arquivo. O painel le daqui.
   ============================================================================ */

window.Prompts = {

  familias: [
    { id:'cliente',  nome:'Entrega de cliente',
      dica:'O que você roda durante ou depois da Leitura, para uma cliente específica.' },
    { id:'meu',      nome:'Meu conteúdo',
      dica:'O que você roda para a sua própria marca.' },
    { id:'comercial',nome:'Comercial',
      dica:'O que ajuda na conversa de venda e no follow-up.' }
  ],

  itens: [

  {
    familia:'cliente',
    titulo:'Auditoria de Instagram e os seis primeiros posts',
    quando:'Depois da Leitura entregue, quando a cliente entra na ativação e precisa saber o que postar.',
    principio:'Não inventa território, gaveta, tese nem persona. Tudo isso já foi definido na Leitura e entra colado. O prompt audita o que existe, encontra os buracos e escolhe seis posts que corrigem comportamento, não que exibem o que ela já faz bem.',
    precisa:[
      'O perfil da cliente aberto, para conseguir os números',
      'O posicionamento fechado na Leitura',
      'As gavetas de conteúdo, com a pergunta que cada uma responde',
      'A persona',
      'O banco de casos e histórias das sessões'
    ],
    texto:
'Você vai auditar o Instagram de uma cliente e transformar\n' +
'essa auditoria nos seis primeiros posts dela.\n\n' +
'Não invente território, gaveta, tese ou persona. Tudo isso\n' +
'já foi definido na Leitura de Marca e vem colado abaixo.\n\n' +
'═══════════════════════════════════\n' +
'ENTRADA\n' +
'═══════════════════════════════════\n\n' +
'CLIENTE: [nome e profissão]\n' +
'PERFIL: [@ do perfil]\n\n' +
'POSICIONAMENTO DA LEITURA:\n' +
'[colar tese, essência, público, promessa]\n\n' +
'AS GAVETAS DE CONTEÚDO:\n' +
'[colar as gavetas, com a pergunta que cada uma responde]\n\n' +
'A PERSONA:\n' +
'[colar quem é, o que teme, como decide]\n\n' +
'BANCO DE CASOS E HISTÓRIAS:\n' +
'[colar tudo que ela já contou nas sessões]\n\n' +
'═══════════════════════════════════\n' +
'ETAPA 1 · AUDITORIA\n' +
'═══════════════════════════════════\n\n' +
'Com o perfil aberto, levante:\n\n' +
'· posts, seguidores, seguindo\n' +
'· bio atual e se existe link\n' +
'· destaques: quais existem\n' +
'· grid: role três telas e liste o que aparece\n' +
'· capas: quantas têm texto que anuncia o assunto\n' +
'· reels: views dos últimos dez, separando os de vida\n' +
'  dos profissionais\n' +
'· data do último conteúdo de cada gaveta\n\n' +
'Compare os números com os da última sessão, se houver.\n\n' +
'═══════════════════════════════════\n' +
'ETAPA 2 · O MAPA DOS BURACOS\n' +
'═══════════════════════════════════\n\n' +
'Monte uma tabela com uma linha por gaveta:\n\n' +
'GAVETA | O QUE EXISTE HOJE | ESTÁ EM ZERO?\n\n' +
'Depois responda três perguntas, nesta ordem:\n\n' +
'1. Quais gavetas estão em zero?\n\n' +
'2. Existe conteúdo certo com gesto errado?\n' +
'   Ou seja: alguma peça em que a tese está correta,\n' +
'   mas a capa, a legenda ou o fechamento desmentem?\n' +
'   Procure por pedido de desculpa, recuo, capa que\n' +
'   não combina com o assunto, tese escondida atrás\n' +
'   de estética.\n' +
'   Essa é prioridade máxima, porque corrige\n' +
'   comportamento e não só um post.\n\n' +
'3. O que dá para publicar com material que já existe\n' +
'   no grid ou no banco de casos, sem produção nova?\n\n' +
'═══════════════════════════════════\n' +
'ETAPA 3 · OS SEIS PRIMEIROS\n' +
'═══════════════════════════════════\n\n' +
'Regras de seleção:\n\n' +
'· Os seis corrigem buracos, não demonstram o que\n' +
'  ela já faz bem.\n' +
'· A gaveta que ela já domina entra no máximo uma vez,\n' +
'  e nunca para provar que ela sabe.\n' +
'· No máximo um post por gaveta vazia. Se o buraco for\n' +
'  grande demais e exigir dois, separe-os: nunca colados.\n' +
'· Caso comum vence caso raro na estreia. O reconhecível\n' +
'  prende mais que o impressionante.\n\n' +
'Regras de ordem:\n\n' +
'· O post 01 nunca corrige buraco. Ele estabelece o\n' +
'  território. Se alguém cair no perfil naquele dia,\n' +
'  precisa entender em quarenta segundos no que ela\n' +
'  acredita. Use a frase da bio.\n' +
'· O conteúdo certo com gesto errado vem cedo, entre\n' +
'  o segundo e o terceiro.\n' +
'· O post sobre a própria história vem por último.\n' +
'  Antes dele, ela precisa ter provado competência,\n' +
'  ou soa desabafo em vez de explicação.\n\n' +
'Para cada um dos seis, entregue:\n\n' +
'NÚMERO · GAVETA · OBJETIVO (atrair, provar, aproximar)\n' +
'GANCHO: a primeira frase, sem saudação\n' +
'POR QUE ESTE: qual buraco ele corrige, em duas linhas\n' +
'O QUE PRECISA ESTAR NA CAPA\n\n' +
'═══════════════════════════════════\n' +
'ETAPA 4 · O QUE FICOU DE FORA\n' +
'═══════════════════════════════════\n\n' +
'Liste de dois a quatro conteúdos fortes que você\n' +
'descartou e o motivo de cada um.\n\n' +
'Isso serve para a consultora saber o que já está\n' +
'pronto para a semana seguinte.\n\n' +
'═══════════════════════════════════\n' +
'REGRAS DE ESCRITA\n' +
'═══════════════════════════════════\n\n' +
'· Sem travessão.\n' +
'· Sem jargão de marketing.\n' +
'· Frases que a cliente conseguiria ler em voz alta.\n' +
'· Nada de caso, número ou depoimento inventado.\n' +
'  Se faltar informação, pergunte.\n' +
'· Se o perfil contrariar a Leitura, diga isso antes\n' +
'  de propor qualquer post.',
    regras:[
      'O post 01 nunca corrige buraco. Ele estabelece o território.',
      'Conteúdo certo com gesto errado é prioridade máxima, porque corrige comportamento e não só um post.',
      'O post sobre a própria história vem por último, senão soa desabafo em vez de explicação.'
    ],
    dica:'Rode com o perfil da cliente aberto ao lado. Se faltar informação, o prompt manda perguntar em vez de inventar, e é isso que impede caso e número falso de entrar na entrega.'
  }

  ]
};
