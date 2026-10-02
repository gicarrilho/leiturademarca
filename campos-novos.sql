-- ============================================================================
-- CAMPOS NOVOS DO PIPELINE  ·  Giovanna Carrilho
-- ============================================================================
--
-- ANTES DE RODAR: abra o painel e clique em "Baixar tudo".
-- O plano gratuito do Supabase nao faz backup nenhum.
--
-- ONDE COLAR:
--   1. Entre em https://supabase.com e abra o seu projeto
--   2. Menu da esquerda, "SQL Editor", botao "New query"
--   3. Copie TODO o conteudo deste arquivo e cole na caixa
--   4. Clique no botao verde "Run"
--   5. Tem que aparecer "Success. No rows returned"
--
-- Este arquivo NAO apaga nada. So acrescenta campo que falta.
-- Pode rodar mais de uma vez sem quebrar nada.
--
-- ============================================================================


-- ============================================================================
-- 1  ·  RESPONDEU   (e o que resolve o aviso amarelo do painel)
-- ============================================================================
-- Marcado, quer dizer: ela te respondeu e voce ainda nao respondeu de volta.
-- A conversa esta parada esperando VOCE. E isso que faz a lead subir para o
-- topo da tela Hoje, com a etiqueta laranja.
-- Todas as leads comecam desmarcadas. Nenhuma muda de lugar sozinha.

alter table public.leads
  add column if not exists respondeu boolean not null default false;


-- ============================================================================
-- 2  ·  OFERTA   (qual oferta esta em jogo nesta conversa)
-- ============================================================================
-- Vem da sua base do Notion. Programa de Ativacao e o upgrade de quem ja
-- fez a Leitura, entao a mesma pessoa pode ter duas conversas abertas.

alter table public.leads
  add column if not exists oferta text default '';
-- Leitura de Marca, Programa de Ativacao, Raio-X de Marca, Palestra


-- ============================================================================
-- 3  ·  ATUALIZADO EM   (a data que voce pediu)
-- ============================================================================
-- Isto NAO e a mesma coisa que "ultimo contato".
--   . ultimo contato  = o dia em que voce falou com ela. E um fato da conversa.
--   . atualizado em   = o dia em que a ficha foi mexida pela ultima vez.
--                       E um fato do dado, e o painel preenche sozinho.
--
-- Serve para voce bater o olho e saber o que esta velho na base.

alter table public.leads
  add column if not exists atualizado_em timestamptz not null default now();
alter table public.clientes
  add column if not exists atualizado_em timestamptz not null default now();


-- ============================================================================
-- 4  ·  O CARIMBO AUTOMATICO
-- ============================================================================
-- Toda vez que uma linha for alterada, o banco carimba a hora sozinho.
-- Assim a data nunca depende de voce lembrar de preencher.

create or replace function public.carimbar_atualizacao()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.atualizado_em := now();
  return new;
end;
$$;

drop trigger if exists carimbo_leads    on public.leads;
drop trigger if exists carimbo_clientes on public.clientes;

create trigger carimbo_leads
  before update on public.leads
  for each row execute function public.carimbar_atualizacao();

create trigger carimbo_clientes
  before update on public.clientes
  for each row execute function public.carimbar_atualizacao();


-- ============================================================================
-- FIM. Se apareceu "Success", o aviso amarelo do painel vai sumir
-- assim que voce recarregar a pagina.
--
-- Agora pode rodar o outro arquivo, pipeline-do-notion.sql,
-- que veio pelo chat.
-- ============================================================================
