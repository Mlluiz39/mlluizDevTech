# mlluizDevTech - Site de Portfólio e Serviços

> Um moderno e responsivo portfólio e vitrine de serviços construído com React, TypeScript e Tailwind CSS.

## 📋 Índice

- [mlluizDevTech - Site de Portfólio e Serviços](#mlluizdevtech---site-de-portfólio-e-serviços)
  - [📋 Índice](#-índice)
  - [✨ Recursos](#-recursos)
  - [🛠 Pilha Tecnológica](#-pilha-tecnológica)
  - [📦 Instalação](#-instalação)
    - [Pré-requisitos](#pré-requisitos)
    - [Passos de Configuração](#passos-de-configuração)
  - [📝 Scripts Disponíveis](#-scripts-disponíveis)
  - [📁 Estrutura do Projeto](#-estrutura-do-projeto)
  - [✏️ Como Editar](#️-como-editar)
    - [Use Seu IDE](#use-seu-ide)
    - [Editar no GitHub](#editar-no-github)
    - [Use GitHub Codespaces](#use-github-codespaces)
  - [🎨 Personalização](#-personalização)
    - [Cores e Estilo](#cores-e-estilo)
    - [Componentes](#componentes)
    - [Páginas](#páginas)
    - [Animações](#animações)
  - [📄 Arquivos de Configuração](#-arquivos-de-configuração)
  - [🚀 Deploy](#-deploy)

## ✨ Recursos

- **Design Responsivo**: Abordagem mobile-first usando Tailwind CSS
- **Componentes UI Modernos**: Construídos com primitivos Radix UI e customizados com Shadcn/ui
- **Animações Suaves**: Framer Motion para revelações de scroll e transições envolventes
- **Vitrine de Serviços**: Exiba serviços, planos de preço e depoimentos
- **Formulário de Contato**: Validação de formulário integrada com React Hook Form e Zod
- **Otimizado para SEO**: Helmet para meta tags e suporte Open Graph
- **Suporte a Modo Escuro**: Integração Next Themes para alteração de tema
- **Rápido e Otimizado**: Vite para desenvolvimento e builds ultrarrápidos
- **Pronto para PWA**: Suporte Progressive Web App com vite-plugin-pwa
- **Validação de Formulários**: Validação no cliente com React Hook Form e Zod

## 🛠 Pilha Tecnológica

**Framework Frontend**

- React 18.3
- TypeScript 5.5
- Vite 5.4

**UI e Estilo**

- Tailwind CSS 3.4
- Componentes Shadcn/ui
- Primitivos Radix UI
- Framer Motion para animações

**Gerenciamento de Estado e Busca de Dados**

- TanStack React Query para busca de dados
- React Router DOM para roteamento

**Formulários e Validação**

- React Hook Form
- Zod para validação de schema

**Ferramentas Adicionais**

- Next Themes para modo escuro
- React Helmet Async para SEO
- Lucide React para ícones
- Sonner para notificações
- Recharts para gráficos/analíticos

**Ferramentas de Desenvolvimento**

- ESLint para linting de código
- PostCSS para processamento CSS
- TypeScript ESLint

## 📦 Instalação

### Pré-requisitos

- Node.js 16+ ([instalar com nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm ou yarn

### Passos de Configuração

```sh
# 1. Clone o repositório
git clone https://github.com/mlluiz39/mlluizDevTech.git

# 2. Navegue até o diretório do projeto
cd mlluizDevTech

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

## 📝 Scripts Disponíveis

```bash
# Inicie o servidor de desenvolvimento com hot reload
npm run dev

# Construir para produção
npm run build

# Construir para desenvolvimento (sem minificação)
npm run build:dev

# Visualize o build de produção localmente
npm run preview

# Execute ESLint para verificar a qualidade do código
npm run lint
```

## 📁 Estrutura do Projeto

```
src/
├── components/              # Componentes React reutilizáveis
│   ├── ui/                 # Componentes Shadcn/ui
│   ├── ContactForm.tsx     # Componente de formulário de contato
│   ├── Header.tsx          # Cabeçalho de navegação
│   ├── Hero.tsx            # Seção hero
│   ├── ServicesSection.tsx # Vitrine de serviços
│   ├── WebsitePlans.tsx    # Planos de preço
│   ├── TestimonialsSection.tsx
│   ├── Footer.tsx
│   └── ...outros componentes
├── pages/                   # Componentes de página
│   ├── Index.tsx           # Página inicial
│   ├── thanks.tsx          # Página de agradecimento
│   └── NotFound.tsx        # Página 404
├── hooks/                   # Hooks React customizados
│   ├── use-toast.ts
│   └── use-mobile.tsx
├── lib/                     # Funções utilitárias
│   └── utils.ts
├── utils/                   # Utilitários auxiliares
│   └── scrollReveal.ts     # Configuração de animação de scroll
├── App.tsx                  # Componente principal
├── main.tsx                 # Ponto de entrada React
└── index.css                # Estilos globais
```

## ✏️ Como Editar

### Use Seu IDE

Clone o repositório e edite localmente:

```sh
git clone https://github.com/seuusuario/mlluizDevTech.git
cd mlluizDevTech
npm install
npm run dev
```

### Editar no GitHub

1. Navegue até o arquivo que deseja editar
2. Clique no ícone de lápis (Editar) no canto superior direito
3. Faça suas alterações e faça o commit

### Use GitHub Codespaces

1. Clique no botão "Code" do seu repositório
2. Selecione a aba "Codespaces"
3. Clique em "New codespace"
4. Edite os arquivos e envie as alterações quando terminar

## 🎨 Personalização

### Cores e Estilo

Edite `tailwind.config.ts` para personalizar o esquema de cores e o tema.

### Componentes

Todos os componentes da UI estão em `src/components/ui/` e podem ser modificados conforme necessário.

### Páginas

Adicione novas páginas em `src/pages/` e adicione rotas em `src/App.tsx`.

### Animações

As animações de revelação de scroll são configuradas em `src/utils/scrollReveal.ts`.

## 📄 Arquivos de Configuração

- `vite.config.ts` - Configuração do Vite
- `tailwind.config.ts` - Configuração do Tailwind CSS
- `tsconfig.json` - Configuração do TypeScript
- `eslint.config.js` - Regras do ESLint
- `postcss.config.js` - Configuração do PostCSS

## 🚀 Deploy

Construa para produção e faça o deploy:

```sh
npm run build
```

A pasta `dist/` contém os arquivos prontos para produção.

---

Feito com ❤️ por mlluiz


## Identidade visual do portfólio

A página de serviços reutiliza a identidade do projeto `portfolio`: DM Sans local,
fundo `#f7f7f2`, texto `#252b27`, verde `#285343` e divisórias `#dcded5`.
Os tokens e estilos compartilhados estão em `src/portfolio-system.css`; os estilos
específicos da página estão em `src/services.css`. A ordem de importação em
`src/main.tsx` mantém esses estilos depois do reset do Tailwind.

O componente `src/components/ui/perspective-tunnel-hero.tsx` adapta o túnel 3D
com cartões ilustrativos em HTML/CSS, rolagem nativa e parallax local ao ponteiro.
Respeita `prefers-reduced-motion` e não depende de imagens externas. Os cartões
são ilustrações de serviços, não capturas de projetos de clientes.

Planos, preços, depoimentos e destino FormSubmit foram preservados. O formulário
redireciona para `/thanks` no domínio atual. A entrega de e-mail depende do
FormSubmit; a validação local não envia mensagens reais.
