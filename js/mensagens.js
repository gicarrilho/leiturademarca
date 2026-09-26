/* ============================================================================
   BIBLIOTECA DE ABORDAGEM  ·  Giovanna Carrilho
   ----------------------------------------------------------------------------
   Banco de mensagens prontas. Copiar, ajustar o nome, enviar.

   De onde veio cada coisa:
   . Onboarding, pos-entrega, proposta e ativacao: a sua pagina Mensagens
     Padrao no Notion, palavra por palavra.
   . Abordagem: o seu Fluxo Comercial. As frases ja eram suas, estavam
     soltas no meio do metodo. Aqui viraram mensagem com contexto.

   As marcas *negrito* e _italico_ sao formatacao do WhatsApp. Elas tem que
   ser copiadas como estao, nao sao erro.

   Para mudar qualquer mensagem, mexa neste arquivo. O painel le daqui.
   ============================================================================ */

window.Mensagens = {

  momentos: [
    { id:'abordagem',  nome:'Abordagem',      dica:'Da primeira conversa até a oferta. Segue os 4 portões.' },
    { id:'onboarding', nome:'Onboarding',     dica:'Depois do pagamento. Uma ação por mensagem, nunca duas.' },
    { id:'entrega',    nome:'Pós-entrega',    dica:'Material entregue, maturação e depoimento.' },
    { id:'proposta',   nome:'Proposta e B2B', dica:'Palestra e decisor apresentado por terceiro.' },
    { id:'ativacao',   nome:'Ativação',       dica:'A continuidade para quem já fez a Leitura.' }
  ],

  itens: [

  /* ======================= ABORDAGEM ======================= */
  {
    momento:'abordagem', titulo:'Microdiagnóstico',
    quando:'Portão 1. Depois que ela nomeou um problema ou desejo concreto.',
    principio:'Não é explicar a Leitura. É fazer a Leitura acontecer em três linhas: nega o problema óbvio, nomeia a distância real, devolve para ela.',
    texto:
'Pelo que você me contou e pelo que vi no seu perfil, não me parece que esteja faltando experiência. Você já tem repertório.\n\n' +
'O que não está chegando para quem olha de fora é [O QUE FALTA].\n\n' +
'Faz sentido para você?',
    nao:[
      'Nunca dizer COMO resolver. O microdiagnóstico nomeia O QUE está faltando. Se você entrega o caminho, a Leitura vira redundante.',
      'Uma frase que nomeia. Nenhuma que orienta.'
    ]
  },
  {
    momento:'abordagem', titulo:'Prova específica',
    quando:'Portão 2. Só quando existe dúvida real. Se ela já está convencida, prova atrasa.',
    principio:'Escolher o caso que responde à frase que ela acabou de dizer. Depoimento genérico não serve.',
    texto:
'[NOME], lembrei de você agora.\n\n' +
'Teve uma cliente que chegou falando quase a mesma coisa que você me disse: [FRASE DELA].\n\n' +
'Deixa eu te mostrar o que apareceu na Leitura dela.',
    dica:'Biblioteca de provas por dor: "mudei de fase e não sei mais como me comunicar" e "estou começando de novo depois de uma sociedade" vão para a Thábita. "Sei que sou boa e não consigo explicar meu diferencial" vai para a Daiani. Faltam definir os casos de "tenho experiência e meu perfil parece igual ao de todo mundo" e "já invisto em marketing e não converte".'
  },
  {
    momento:'abordagem', titulo:'Levantada de mão',
    quando:'Portão 3. Depois do microdiagnóstico, quando ela reagiu ao que você nomeou.',
    principio:'A lead precisa PEDIR ajuda com as próprias palavras. Você não oferece antes disso.',
    texto:'Você sente que precisa de ajuda para organizar isso?',
    nao:[
      'Sem levantada de mão, não existe oferta.',
      'Se ela disser não, encerrar com elegância e manter em nutrição. Não insistir.'
    ]
  },
  {
    momento:'abordagem', titulo:'Confirmação de entendimento',
    quando:'Portão 4. Antes de falar qualquer número. Sempre.',
    principio:'Concordar com a dor não é entender a solução. Este portão existe por causa da Renatta, que pediu parcelamento e desconto de um curso que ela achava que a Leitura era.',
    texto:'Antes de eu te falar de investimento, ficou claro para você o que é a Leitura?',
    nao:[
      'Não pular este portão porque ela pareceu animada. Ela pode estar animada com a dor, não com a solução.'
    ]
  },
  {
    momento:'abordagem', titulo:'A oferta',
    quando:'Depois dos quatro portões fechados.',
    principio:'Começar pela frase dela, nunca pelas características do produto. O produto entra como resposta à fala dela.',
    texto:
'Você me disse que [FRASE DELA].\n\n' +
'É exatamente essa distância que eu investigo na Leitura de Marca.',
    nao:[
      'Errado: "a Leitura tem duas sessões, formulário, Notion e plano de ativação". Isso é lista de peças, não resposta.'
    ],
    dica:'Checklist antes de mandar o preço: ela nomeou um problema concreto, você devolveu o microdiagnóstico, ela pediu ajuda com as próprias palavras, ela confirmou que entendeu, e a oferta começa pela frase dela. Se algum item está vazio, ainda não é hora do número.'
  },
  {
    momento:'abordagem', titulo:'Follow-up: descobrir a objeção',
    quando:'A lead sumiu depois da oferta.',
    principio:'O follow-up tem dois objetivos: a decisão e descobrir a objeção. O segundo importa mais no longo prazo, porque objeção oculta não se contorna e não vira conteúdo.',
    texto:'Me conta o que passou pela sua cabeça. Pode ser sincera comigo.',
    nao:[
      'Um toque por vez.',
      'Nunca cobrar o link.',
      'Nunca fingir urgência. A sua escassez real é agenda.'
    ]
  },
  {
    momento:'abordagem', titulo:'Desapego',
    quando:'Já houve toques demais. E só se for verdade.',
    principio:'Desapego só funciona quando é sincero. Se for tática, ela sente.',
    texto:
'Estou vendo que não é prioridade agora e não quero te incomodar.\n\n' +
'Quando quiser resolver isso, me chama.'
  },
  {
    momento:'abordagem', titulo:'Contato de WhatsApp',
    quando:'A conversa saiu do Instagram e você quer continuar no WhatsApp.',
    principio:'Curta. Só o necessário.',
    texto:
'Segue meu WhatsApp pra você salvar 🤍\n' +
'Qualquer coisa, me chama:\n' +
'gicarrilho.com/oie'
  },

  /* ======================= ONBOARDING ======================= */
  {
    momento:'onboarding', titulo:'1 · Boas-vindas',
    quando:'Pagamento confirmado. Manda junto a enquete de horário do Encontro 1.',
    principio:'A régua torna visível um processo que hoje só existe na sua cabeça. O trabalho invisível vira produto sem você precisar dizer que é produto.',
    texto:
'Obaaa! 🤍\n\n' +
'Que alegria começar a sua Leitura de Marca, [NOME]!\n\n' +
'_Passando aqui só para você visualizar onde estamos, o que já caminhamos juntas e o que vem agora:_\n\n' +
'✅ Leitura de Marca contratada\n' +
'🔵 Forms. Ponto de Partida ← VOCÊ ESTÁ AQUI\n' +
'⬜ Minha análise da sua comunicação\n' +
'⬜ Encontro #1 · Investigação\n' +
'⬜ Encontro #2 · Devolutiva da Leitura\n' +
'⬜ Entrega do Plano de Posicionamento Corretora de Marca\n' +
'⬜ Sua validação e maturação\n' +
'⬜ Plano de ação · primeiros 30 dias\n\n' +
'👉 *Sua ação agora:* preencher o Ponto de Partida com calma. É a partir dele que eu começo a te investigar antes mesmo da nossa primeira conversa.\n\n' +
'🔗 Formulário: [LINK DO FORMULÁRIO]\n\n' +
'Na sequência eu te mando as opções de horário para o nosso primeiro encontro. Assim que você escolher, eu te confirmo a data limite do formulário.\n\n' +
'Qualquer dúvida, é só me chamar por aqui.\n\n' +
'Gi',
    dica:'O prazo do formulário é 5 dias antes do Encontro 1, não uma data solta. Você precisa desse tempo para analisar o perfil e montar o diagnóstico.'
  },
  {
    momento:'onboarding', titulo:'2 · Formulário recebido',
    quando:'Assim que o Ponto de Partida chegar. Não deixar para depois: é o momento em que ela sente que o trabalho começou.',
    texto:
'Recebi o seu Ponto de Partida, [NOME]! 🤍\n\n' +
'Já comecei a ler.\n\n' +
'_Passando aqui só para você visualizar onde estamos, o que já caminhamos juntas e o que vem agora:_\n\n' +
'✅ Leitura de Marca contratada\n' +
'✅ Forms. Ponto de Partida\n' +
'🔵 Minha análise da sua comunicação ← ESTOU AQUI\n' +
'⬜ Encontro #1 · Investigação\n' +
'⬜ Encontro #2 · Devolutiva da Leitura\n' +
'⬜ Entrega do Plano de Posicionamento Corretora de Marca\n' +
'⬜ Sua validação e maturação\n' +
'⬜ Plano de ação · primeiros 30 dias\n\n' +
'Agora é comigo. Vou cruzar o que você me contou com o que a sua comunicação mostra hoje, e chego no nosso encontro com uma leitura pronta.\n\n' +
'Chamo de leitura, não de veredito. É conversando que a gente descobre o que se sustenta.\n\n' +
'Nos vemos [DIA] às [HORA]. 🤍\n\n' +
'Gi'
  },
  {
    momento:'onboarding', titulo:'3 · Véspera do Encontro #1',
    quando:'Um dia antes. Mensagem curta, logística.',
    texto:
'Bom dia [NOME]!\n\n' +
'Passando para confirmar o nosso encontro:\n\n' +
'📅 *Hoje, [DATA] às [HORA]*\n' +
'🔗 [LINK DA CHAMADA]\n\n' +
'Eu já li tudo que você me mandou e olhei a sua comunicação com calma. Chego com uma leitura pronta, e a nossa conversa serve para confirmar, corrigir e aprofundar.\n\n' +
'Você não precisa preparar nada. Só reservar [DURAÇÃO] sem interrupção e estar num lugar onde consiga falar à vontade.\n\n' +
'Até mais.',
    dica:'A régua não entra aqui de propósito. A mensagem é logística e a régua rouba a atenção do horário.'
  },
  {
    momento:'onboarding', titulo:'4 · Véspera do Encontro #2',
    quando:'Um dia antes da devolutiva. Aqui a régua volta.',
    texto:
'Bom dia [NOME]!\n\n' +
'Passando para confirmar o nosso encontro:\n\n' +
'📅 *Hoje, [DATA] às [HORA]*\n' +
'🔗 [LINK DA CHAMADA]\n\n' +
'_Passando aqui só para você visualizar onde estamos, o que já caminhamos juntas e o que vem agora:_\n\n' +
'✅ Leitura de Marca contratada\n' +
'✅ Forms. Ponto de Partida\n' +
'✅ Minha análise da sua comunicação\n' +
'✅ Encontro #1 · Investigação\n' +
'🔵 Encontro #2 · Devolutiva da Leitura ← HOJE\n' +
'⬜ Entrega do Plano de Posicionamento Corretora de Marca\n' +
'⬜ Sua validação e maturação\n' +
'⬜ Plano de ação · primeiros 30 dias\n\n' +
'Até mais.',
    dica:'A régua volta porque ela vê cinco linhas verdes de uma vez e sente o quanto já andou.'
  },
  {
    momento:'onboarding', titulo:'5 · Entrega do Plano de Posicionamento',
    quando:'Depois do Encontro #2, com o plano revisado pronto. É aqui que abre a maturação.',
    texto:
'Oie, bom dia!\n\n' +
'Seu Plano de Posicionamento está aqui:\n' +
'🔗 [LINK DO PLANO]\n\n' +
'_Passando aqui só para você visualizar onde estamos, o que já caminhamos juntas e o que vem agora:_\n\n' +
'✅ Leitura de Marca contratada\n' +
'✅ Forms. Ponto de Partida\n' +
'✅ Minha análise da sua comunicação\n' +
'✅ Encontro #1 · Investigação\n' +
'✅ Encontro #2 · Devolutiva da Leitura\n' +
'✅ Entrega do Plano de Posicionamento Corretora de Marca\n' +
'🔵 *Sua validação e maturação ← VOCÊ ESTÁ AQUI*\n' +
'⬜ Plano de ação · primeiros 30 dias\n\n' +
'👉 *Sua ação agora:* até [DATA], me conta o que ressoou, o que não ressoou e o que você ainda quer mexer.\n\n' +
'Esse tempo é de propósito. Posicionamento precisa assentar antes de virar ação, para você chegar no plano de ação já se reconhecendo nele.\n\n' +
'Gi',
    dica:'Padrão: 7 dias entre a entrega do plano e o follow-up. A maturação precisa de data, não de "quando você puder". Sem prazo, você fica cobrando e o produto não fecha.'
  },
  {
    momento:'onboarding', titulo:'6 · Plano de ação, fecha a Leitura',
    quando:'Depois da validação dela. Fecha a entrega.',
    texto:
'Pronto, [NOME]! 🤍\n\n' +
'🔗 [LINK DO PLANO FINAL]\n\n' +
'_Passando aqui só para você visualizar onde estamos, o que já caminhamos juntas e o que vem agora:_\n\n' +
'✅ Leitura de Marca contratada\n' +
'✅ Forms. Ponto de Partida\n' +
'✅ Minha análise da sua comunicação\n' +
'✅ Encontro #1 · Investigação\n' +
'✅ Encontro #2 · Devolutiva da Leitura\n' +
'✅ Entrega do Plano de Posicionamento Corretora de Marca\n' +
'✅ Sua validação e maturação\n' +
'✅ Plano de ação · primeiros 30 dias\n\n' +
'Aqui está tudo: o que a gente descobriu, o posicionamento que você validou e o que fazer nos primeiros 30 dias, na ordem.\n\n' +
'A Leitura mostra o que existe. O que vem agora é fazer isso aparecer, e essa parte acontece no seu dia a dia.\n\n' +
'Me conta como for indo. Quero ver. 🤍\n\n' +
'Gi',
    nao:[
      'Não oferecer a Ativação aqui. Vender no mesmo dia esvazia o valor do que acabou de ser entregue. A oferta vem depois, quando ela já tentou aplicar e sentiu onde trava.'
    ]
  },

  {
    momento:'onboarding', titulo:'7 · Entrega final da Leitura',
    quando:'Tudo entregue e o site da Leitura no ar. Fecha a Leitura e abre a ativação.',
    principio:'A mensagem nao pede aprovacao e nao vende nada. Ela devolve para a cliente a ideia central do seu trabalho: marca nao se cria, se reconhece. Por isso a aurora boreal entra no fim, depois da regua, quando ela ja viu tudo que caminhou.',
    texto:
'*Uhuuul, trago boas novas* 🤍\n\n' +
'[NOME], sua Leitura de Marca está oficialmente concluída.\n' +
'[LINK DA LEITURA]\n\n' +
'Passando aqui para você ver tudo o que a gente construiu juntas e, principalmente, para dizer que *a partir daqui começa a sua fase de ativação.*\n\n' +
'✅ Ponto de Partida\n' +
'✅ Análise da sua comunicação\n' +
'✅ Encontro #1 · Investigação\n' +
'✅ Encontro #2 · Leitura e direcionamento\n' +
'✅ Encontro #3 · Entrega e primeiros movimentos\n' +
'✅ Posicionamento\n' +
'✅ Manual da Marca\n' +
'✅ Guia da Expressão\n' +
'🟠 *Ativação da sua marca ← VOCÊ ESTÁ AQUI*\n\n' +
'Com essa entrega, encerramos a nossa troca dentro da Leitura de Marca.\n\n' +
'Agora você tem um lugar para voltar sempre que precisar lembrar do que a gente reconheceu, das decisões que tomamos e da direção que escolhemos.\n\n' +
'E tem uma coisa que eu quero que você guarde:\n' +
'*Você não recebeu uma marca pronta para vestir.*\n' +
'*Recebeu uma leitura para reconhecer, se apropriar e ativar aquilo que já era seu.*\n\n' +
'Nada do que está ali foi inventado.\n' +
'*Tudo veio de alguma coisa que você disse, fez ou já viveu.*\n\n' +
'Gosto de pensar na aurora boreal.\n' +
'Ela não é criada quando alguém finalmente a vê.\n' +
'*Ela já estava acontecendo.*\n\n' +
'Com a marca é a mesma coisa.\n' +
'*Marca não se cria. Se reconhece.*\n\n' +
'E agora começa a parte de tornar tudo isso cada vez mais perceptível.\n' +
'Eu amei todo o processo de ler e estruturar a sua marca.\n\n' +
'Obrigada pela confiança, [NOME] 🤍\n\n' +
'*Agora é seu.*\n\n' +
'Com carinho,\n' +
'Gi',
    nao:[
      'Não oferecer a Ativação aqui. A mensagem anuncia que a fase começou, não vende o programa. A oferta vem depois, quando ela tentou aplicar e sentiu onde trava.',
      'Não pedir feedback junto. Essa mensagem fecha um ciclo, e pergunta no meio rouba o fecho.'
    ],
    dica:'Na versão da Thaissa você escreveu "Thacialmente concluída", brincando com o nome dela. Vale repetir quando o nome permitir: é o tipo de detalhe que mostra que a mensagem foi escrita para aquela pessoa.'
  },

  /* ======================= POS-ENTREGA ======================= */
  {
    momento:'entrega', titulo:'Follow-up de entrega de material',
    quando:'Cliente recebeu o material e não deu retorno.',
    principio:'O follow-up não pergunta se agradou, ele continua a entrega. A Leitura não termina quando o material chega, termina quando a cliente começa a fase 1.',
    texto:
'Oi [NOME], tudo bem?\n\n' +
'Passando pra saber se você já conseguiu abrir a fase 1 do plano.\n' +
'Não precisa ter feito nada ainda, é só pra eu saber onde você está.\n\n' +
'Se quiser, a gente marca 15 minutos e eu te dou o pontapé da primeira ação.\n' +
'Às vezes isso ajuda nesse começo para destravar.',
    nao:[
      'Não usar: "e aí, o que você achou?". Isso pede aprovação, não movimento.'
    ]
  },
  {
    momento:'entrega', titulo:'Follow-up de maturação',
    quando:'7 dias depois da entrega do Plano de Posicionamento, antes de montar o plano de ação.',
    principio:'Não perguntar se agradou. Perguntar o que ficou e o que não bateu. Cliente amiga ou encantada sempre diz que ficou lindo, e a pergunta precisa abrir espaço para o incômodo.',
    texto:
'[NOME], passando aqui porque já faz quase uma semana que você recebeu sua Leitura 🤍\n\n' +
'Queria saber como foi digerindo esses dias rs...\n\n' +
'Se continuou fazendo sentido, se teve alguma coisa que te fez pensar diferente, ou algum ponto em que você não se reconheceu tanto.\n\n' +
'Quero te ouvir antes de montar seu plano de ação.',
    nao:[
      'Não usar "e aí, o que você achou?" nem "sinta se faz sentido". As duas pedem aprovação, não reação.',
      'Não citar Notion nem ferramenta pelo nome. Vira mais uma coisa para ela aprender.'
    ],
    dica:'A pergunta que mais rende é a do incômodo. Se alguma parte da Leitura não bateu, precisa sair antes de virar plano de ação.'
  },
  {
    momento:'entrega', titulo:'Depoimento · 1. a abertura',
    quando:'Antes de pedir o depoimento. Espera a resposta antes de mandar o pedido.',
    principio:'Se mandar os dois juntos, ela responde só um.',
    texto:
'Oi [NOME], tudo bem?\n' +
'Como tem sido colocar o seu plano em ação?'
  },
  {
    momento:'entrega', titulo:'Depoimento · 2. o pedido',
    quando:'Depois que ela respondeu a abertura.',
    texto:
'Estou passando para te pedir o seu feedback...\n\n' +
'Um áudio contando como foi pra você esse processo do Leitura de Marca.\n\n' +
'Não precisa falar de mim, é mais sobre a sua transformação mesmo, porque é isso que ajuda outra corretora a se reconhecer.\n\n' +
'Se ajudar, responde nessa ordem:\n' +
'- Como você estava antes e por que decidiu fazer a Leitura\n' +
'- Como foi o processo pra você\n' +
'- O que você não sabia antes e sabe agora\n\n' +
'Pode gravar direto, pode ser em partes, do jeito que sair.\n\n' +
'Consegue me enviar até [DATA]?'
  },
  {
    momento:'entrega', titulo:'Depoimento · 3. upgrade para vídeo',
    quando:'Opcional, depois do áudio, e só se o áudio vier bom.',
    principio:'O pedido fica pequeno porque ela já sabe o que falar.',
    texto:
'[NOME], o teu áudio ficou ótimo. Teve um trecho especialmente bom, quando você falou que [TRECHO].\n\n' +
'Consegue gravar só essa parte em vídeo pra mim? Uns 40 segundos, na horizontal, num lugar sem barulho. Não precisa editar nada.',
    dica:'Vídeo: horizontal, cuidado com ruído, boa luz, sem edição. Máximo 3 minutos.'
  },

  /* ======================= PROPOSTA E B2B ======================= */
  {
    momento:'proposta', titulo:'Follow-up de proposta',
    quando:'Proposta enviada ou encaminhada, sem resposta.',
    principio:'Cobrar em 24h passa ansiedade. Espera 3 dias úteis e volta com motivo operacional, nunca com "e aí, viu?".',
    texto:
'[NOME], uma coisa operacional: como o evento é dia [DATA], eu preciso travar agenda e começar a produção do material até [DIA].\n\n' +
'Você acha melhor eu esperar [PESSOA] me chamar ou você prefere fazer a ponte?'
  },
  {
    momento:'proposta', titulo:'Primeiro contato com decisor',
    quando:'Alguém encaminhou a sua proposta e o decisor abriu a porta.',
    texto:
'[NOME], tudo bem? Aqui é a Giovanna, a [PONTE] te encaminhou minha proposta pro [EVENTO].\n\n' +
'Estou com a agenda do dia [DATA] reservada e queria alinhar dois pontos com você antes de seguir: o formato do momento e o que vocês querem que fique com os participantes depois.\n\n' +
'Consegue 20 minutos essa semana?',
    nao:[
      'Nunca falar direto com o decisor antes de quem fez a ponte abrir a porta. Atropelar a ponte custa mais do que a espera.'
    ]
  },

  /* ======================= ATIVACAO ======================= */
  {
    momento:'ativacao', titulo:'Abrir a conversa da Ativação',
    quando:'Semanas depois da entrega do plano, com quem já fez a Leitura.',
    principio:'Não é pitch, é pergunta. A oferta só aparece depois que ela nomear sozinha o que travou. Quando você apresenta primeiro, a conversa fecha em elogio. Quando pergunta primeiro, a cliente pede o preço.',
    texto:
'Oiee, como você está? 🤍\n\n' +
'Agora que já passou um tempinho da nossa Leitura, fiquei querendo saber:\n' +
'o que você sente que conseguiu colocar em prática de verdade e o que ainda está mais no papel do que acontecendo?',
    nao:[
      'Não emendar a oferta na mesma mensagem. Espera a resposta.',
      'Se ela disser que está fluindo, a Ativação não é agora. Anota a janela e volta quando a rotina pesar.'
    ],
    dica:'A pergunta dá permissão para ela admitir que não fez. Foi assim que a Daiani respondeu "não consegui colocar nada em prática" e, três mensagens depois, perguntou o valor.'
  },
  {
    momento:'ativacao', titulo:'Escopo da Ativação, e o que não é',
    quando:'Ela perguntou como funciona, ou se você entrega o material.',
    principio:'A pergunta quase sempre é sobre esforço, não sobre entregável. Responder deixando claro o que sai das costas dela, e onde a linha do seu trabalho termina.',
    texto:
'Eu te entrego toda a direção estratégica e a gente vai construindo juntas como isso se traduz na sua comunicação: posicionamento, pautas, ideias, direcionamentos de conteúdo, ajustes no que você produzir e o que precisa ser ativado ao longo desses três meses.\n\n' +
'A execução fica com você, ou com quem te apoia no conteúdo.\n\n' +
'Então, por exemplo, eu não entro como social media produzindo as artes, editando os vídeos ou fazendo as postagens.\n\n' +
'Eu entro justamente para te dar direção, estruturar a estratégia e elaborar roteiros com mais impacto, acompanhar o que você está colocando em prática e ir ajustando junto com você.',
    nao:[
      'Não prometer produção de peça. A decisão foi por foco: entrega recorrente de material é o que quebra primeiro.'
    ]
  },
  {
    momento:'ativacao', titulo:'Investimento da Ativação',
    quando:'Depois que ela perguntou o preço. Nunca antes.',
    principio:'A condição só é mencionada porque existe de verdade. Quem já fez a Leitura entra com escopo maior, não com desconto solto.',
    texto:
'O investimento da Ativação é de R$ 3.000 pelos 3 meses de acompanhamento.\n\n' +
'Mas, para quem já passou pela Leitura de Marca, eu abri uma condição especial: R$ 2.000 por 4 meses de acompanhamento, estendendo até o final de janeiro. Assim, a gente já consegue entrar juntas também no planejamento de 2027.\n\n' +
'E consegui deixar o pagamento em até 5x sem juros no cartão.\n\n' +
'Quis fazer essa condição justamente para quem já passou pela Leitura e agora quer colocar tudo isso em movimento comigo⚡️',
    dica:'A condição dá mais mês, não menos produto. Quem fez a Leitura paga menos e fica mais tempo, e o ciclo alcança o planejamento de 2027.'
  }

  ]
};
