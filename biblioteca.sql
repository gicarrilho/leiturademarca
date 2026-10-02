-- ============================================================================
-- BIBLIOTECA DE ESTUDOS  ·  Giovanna Carrilho
-- ============================================================================
--
-- ANTES DE RODAR: abra o painel e clique em "Baixar tudo".
-- O plano gratuito do Supabase nao faz backup nenhum.
-- Este arquivo nao apaga nada, mas o habito vale para sempre.
--
-- ONDE COLAR:
--   1. Entre em https://supabase.com e abra o seu projeto
--   2. Menu da esquerda, "SQL Editor", botao "New query"
--   3. Copie TODO o conteudo deste arquivo e cole na caixa
--   4. Clique no botao verde "Run"
--   5. Tem que aparecer "Success. No rows returned"
--
-- Pode rodar mais de uma vez sem quebrar nada.
-- Nao tem drop, nao apaga coluna, nao renomeia nada.
--
-- ATENCAO: este arquivo cria so a ESTRUTURA, sem nenhuma estante.
-- As suas estantes, com os links das pastas do Drive, estao num arquivo
-- separado que voce recebeu no chat e que NAO esta no GitHub, porque
-- link de pasta do Drive e um endereco particular seu.
--
-- ============================================================================


-- ============================================================================
-- BLOCO 1  ·  AS DUAS TABELAS
-- ============================================================================

-- Uma estante e um curso, um livro, um workshop ou um material avulso.
create table if not exists public.estantes (
  id           uuid primary key default gen_random_uuid(),
  titulo       text not null,
  instrutor    text,
  tema         text not null
               check (tema in ('conteudo','comercial','negocio','ia','livros')),
  tipo         text not null default 'curso'
               check (tipo in ('curso','livro','workshop','material')),
  status       text not null default 'estudando'
               check (status in ('na fila','estudando','concluido')),
  pasta_drive  text,
  resumo       text,
  created_at   timestamptz not null default now()
);

-- Uma nota e o resumo de uma aula, de um capitulo ou de um trecho.
create table if not exists public.notas (
  id          uuid primary key default gen_random_uuid(),
  estante_id  uuid not null references public.estantes(id) on delete cascade,
  ordem       int,
  modulo      text,
  titulo      text not null,
  resumo      text,
  insights    text,     -- um insight por linha
  aplicacao   text,     -- como isso entra no meu metodo ou na minha marca
  cadeira     text check (cadeira in ('nanda','clara','vini','bel','neil')),
  -- qual agente usa este aprendizado. Vini para conteudo, Neil para comercial.
  link_drive  text,
  created_at  timestamptz not null default now()
);


-- ============================================================================
-- BLOCO 2  ·  CONSERTOS PARA QUEM JA RODOU UMA VERSAO ANTIGA
-- ============================================================================
-- Se a tabela ja existia sem algum campo, estas linhas acrescentam o que falta.
-- Se estiver tudo certo, elas nao fazem nada. Pode deixar.

alter table public.estantes add column if not exists resumo      text;
alter table public.estantes add column if not exists pasta_drive text;
alter table public.notas    add column if not exists aplicacao   text;
alter table public.notas    add column if not exists cadeira     text;
alter table public.notas    add column if not exists link_drive  text;
alter table public.notas    add column if not exists modulo      text;
alter table public.notas    add column if not exists ordem       int;


-- ============================================================================
-- BLOCO 3  ·  INDICES, PARA A BIBLIOTECA ABRIR RAPIDO
-- ============================================================================

create index if not exists estantes_tema_idx   on public.estantes (tema);
create index if not exists estantes_status_idx on public.estantes (status);
create index if not exists notas_estante_idx   on public.notas (estante_id);
create index if not exists notas_ordem_idx     on public.notas (estante_id, ordem);


-- ============================================================================
-- BLOCO 4  ·  A TRANCA  (RLS, Row Level Security)
-- ============================================================================
-- Mesma regra do resto do painel: por padrao ninguem faz nada, e so passa
-- quem entrou com e-mail e senha. Como a chave publica do site fica visivel
-- para qualquer pessoa, e o RLS que impede um estranho de ler os seus
-- resumos de aula e os links das suas pastas do Drive.

alter table public.estantes enable row level security;
alter table public.notas    enable row level security;

-- Garantia extra: nem o dono da tabela escapa da tranca.
alter table public.estantes force row level security;
alter table public.notas    force row level security;


-- ============================================================================
-- BLOCO 5  ·  AS PERMISSOES
-- ============================================================================
-- Apaga primeiro qualquer permissao antiga com o mesmo nome, para este
-- arquivo poder ser rodado mais de uma vez sem dar erro.

drop policy if exists "estantes_dona" on public.estantes;
drop policy if exists "notas_dona"    on public.notas;

create policy "estantes_dona" on public.estantes
  for all to authenticated using (true) with check (true);

create policy "notas_dona" on public.notas
  for all to authenticated using (true) with check (true);

-- Aqui nao existe nenhuma excecao para visitante. Quem nao esta logada
-- nao le nem escreve uma linha da sua biblioteca.


-- ============================================================================
-- FIM. Se apareceu "Success", a estrutura esta pronta.
-- Agora rode o outro arquivo, o das suas estantes, que veio pelo chat.
-- ============================================================================
