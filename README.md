<h1>Portfolio</h1>

## Sobre o projeto

Site pessoal em formato *single page*, com navegação por âncoras entre as seções. Construído com React e TypeScript, com o conteúdo separado em componentes e em um arquivo de traduções, o que facilita adicionar novos projetos, experiências e idiomas.

### Seções

- **Hero** — apresentação, foto e chamadas para ação
- **Sobre** — bio e informações rápidas (localização, formação, foco atual, idiomas)
- **Experiência** — linha do tempo com as atuações no IFPB
- **Projetos** — cards com descrição, tecnologias e link do repositório
- **Skills** — stack organizada por categoria (Mobile, Web & Backend, Banco de dados, Arquitetura, Ferramentas)
- **Contato** — Email, LinkedIn e GitHub

### Funcionalidades

- **Bilíngue (PT/EN)** — botão de toggle no estilo terminal (`$ lang=pt`) que troca o idioma da página sem recarregar. O idioma escolhido fica salvo no `localStorage`.
- **Responsivo** — layout adaptado para desktop, tablet e mobile, com menu hambúrguer nas telas menores.
- **Animações de entrada** — elementos aparecem conforme o scroll usando `IntersectionObserver`.
- **Acessibilidade** — foco visível no teclado e respeito à preferência `prefers-reduced-motion`.
- **Design system próprio** — paleta, tipografia (Fraunces + Inter + IBM Plex Mono) e componentes consistentes em todo o site.

## Tecnologias

- React
- TypeScript
- Vite
- CSS3 (custom properties, grid, flexbox)
- Google Fonts

## Estrutura do repositório

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Deploy automático no GitHub Pages
├── public/
│   └── assets/
│       ├── davi.png          # Foto de perfil
│       └── favicon.svg       # Favicon
├── src/
│   ├── components/
│   │   ├── Header/           # Navegação, toggle de idioma e menu mobile
│   │   │   ├── index.tsx
│   │   │   └── style.css
│   │   ├── Hero/
│   │   │   ├── index.tsx
│   │   │   └── style.css
│   │   ├── About/
│   │   │   ├── index.tsx
│   │   │   └── style.css
│   │   ├── Experience/
│   │   │   ├── index.tsx
│   │   │   └── style.css
│   │   ├── Projects/
│   │   │   ├── index.tsx
│   │   │   └── style.css
│   │   ├── Skills/
│   │   │   ├── index.tsx
│   │   │   └── style.css
│   │   ├── Contact/
│   │   │   ├── index.tsx
│   │   │   └── style.css
│   │   └── Footer/
│   │       ├── index.tsx
│   │       └── style.css
│   ├── data/
│   │   └── translations.ts   # Textos em PT/EN
│   ├── styles/
│   │   ├── tokens.css        # Variáveis, reset, animações
│   │   └── layout.css        # Seções, botões e tags compartilhados
│   ├── App.tsx               # Estado de idioma e animações de scroll
│   ├── main.tsx
│   └── vite-env.d.ts         # Tipos do Vite
├── index.html
├── vite.config.ts
├── package.json
└── README.md
```

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
# instalar dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev
```

Depois acesse `http://localhost:5173`.

Para gerar a versão de produção e visualizá-la localmente:

```bash
npm run build
npm run preview
```

## Deploy

O site é publicado via **GitHub Pages**. O build de produção (`npm run build`) gera a pasta `dist/`, que é o conteúdo publicado.

## Contato

<p>
  <a href="mailto:davimelonsmt@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
  <a href="https://www.linkedin.com/in/davimelodev/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
  <a href="https://daviimelo.github.io/portfolio/" target="_blank"><img src="https://img.shields.io/badge/Portfólio-%23252525.svg?style=for-the-badge&logo=github&logoColor=white" alt="Portfólio"></a>
</p>
