# Mermita's — Contexto do Projeto

## O que é
Site completo de pedidos para a **Mermita's — Marmita Fitness Caseira**, negócio de marmitas congeladas em Florianópolis, SC (Ribeirão da Ilha). Contato: (48) 9 9610-7844.

## Identidade visual
- Verde escuro: `#1D5C3A`
- Verde médio: `#4CAF72`
- Fundo creme: `#F5F0E8`
- Fontes: Nunito (corpo) + Lora (títulos)

## Estado atual (index.html — arquivo único)
O site é um SPA (Single Page App) em HTML/CSS/JS puro, sem framework, sem backend.

### Telas implementadas
1. **Home** — landing page pública com hero, sobre, cardápio navegável, zonas de entrega, footer
2. **Auth** — login (nome + WhatsApp) e cadastro (com seleção de zona → taxa calculada)
3. **Pedido** — builder de marmita por marmita com sidebar de resumo
4. **Resumo** — orçamento detalhado com botão WhatsApp
5. **Perfil** — dados do cliente

### Lógica de preços
- Cada ingrediente tem preço base (porção padrão) e preço por grama (pg)
- Ao ajustar gramas, o preço é calculado: `Math.round(pg * gramas * 2) / 2` (arredonda para R$ 0,50)
- Carboidratos base: R$ 4,00 (penne R$ 5,00)
- Proteínas frango: R$ 8,00 · carnes bovinas: R$ 10,00
- Legumes: R$ 3,00 (couve R$ 4,50)

### Regras de negócio do builder
- Carbo → seleção múltipla (arrays)
- Proteína → seleção múltipla (arrays)
- Legume → múltipla seleção (aceita com qualquer combinação)
- Marmitas especiais → quantidade ajustável por grama, aceita legume, bloqueia carbo+prot
- Sopas/Assados → preço e quantidade fixos, aceita legume, bloqueia carbo+prot
- Ao selecionar carbo com fixo selecionado → remove o fixo (e vice-versa), com toast explicativo

### Cupons de desconto
Definidos em `const CUPONS` no JS: `MERMITA10` (R$ 10), `MERMITA15` (R$ 15), `BEMVINDA` (R$ 5), `FIDELIDADE` (10%)

### Zonas de entrega e taxas
| Zona | Taxa |
|------|------|
| Ribeirão da Ilha | R$ 0 (retirada) |
| Campeche / Sul da Ilha | R$ 15 |
| Trindade / Pantanal | R$ 15 |
| Centro / Continente | R$ 20 |
| Norte da Ilha | R$ 25 |
| Grande Florianópolis | R$ 30 |

## Próximas evoluções planejadas
1. **Backend com Supabase** — salvar pedidos, clientes, histórico
2. **Painel admin** — você adicionar itens extras no pedido do cliente, ver pedidos em tempo real, gerenciar cupons, editar cardápio
3. **Autenticação real** — login via WhatsApp (OTP) ou e-mail
4. **Itens extras pelo admin** — canjica, quiche, empadão especial — você adiciona como admin com nome, gramas e valor
5. **Notificações** — aviso no WhatsApp quando pedido chega

## Cardápio completo
Ver objeto `CDP` no index.html — 15 carbos, 11 proteínas, 7 legumes, 8 marmitas especiais, 5 sopas, 4 assados.

## WhatsApp
Pedidos vão para: `https://wa.me/5548996107844?text=...` com orçamento formatado em texto simples.
