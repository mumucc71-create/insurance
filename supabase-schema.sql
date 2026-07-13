create table if not exists public.insurance_app_data (
  user_id uuid primary key references auth.users(id) on delete cascade,
  customers jsonb not null default '[]'::jsonb,
  draft jsonb,
  updated_at timestamptz not null default now()
);

alter table public.insurance_app_data enable row level security;

create policy "Users can read their own insurance data"
on public.insurance_app_data
for select
using (auth.uid() = user_id);

create policy "Users can insert their own insurance data"
on public.insurance_app_data
for insert
with check (auth.uid() = user_id);

create policy "Users can update their own insurance data"
on public.insurance_app_data
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can delete their own insurance data"
on public.insurance_app_data
for delete
using (auth.uid() = user_id);
