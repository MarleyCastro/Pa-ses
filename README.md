<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1a1a2e,50:16213e,100:0f3460&height=200&section=header&text=🌍%20Site%20Países&fontSize=60&fontColor=ffffff&fontAlignY=38&desc=Explore%20o%20mundo%20com%20um%20clique&descAlignY=58&descSize=18&descColor=a8c8f8" width="100%"/>

<!-- BADGES -->
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)
![Replit](https://img.shields.io/badge/Replit-667881?style=for-the-badge&logo=replit&logoColor=white)

![Status](https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-yellow?style=for-the-badge)
![Licença](https://img.shields.io/badge/LICENÇA-MIT-green?style=for-the-badge)
![Versão](https://img.shields.io/badge/VERSÃO-1.0.0-blue?style=for-the-badge)
![Responsivo](https://img.shields.io/badge/RESPONSIVO-SIM-brightgreen?style=for-the-badge)

</div>

---

## 📋 Índice

- [📖 Descrição do Projeto](#-descrição-do-projeto)
- [🚦 Status do Projeto](#-status-do-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🖥️ Demonstração](#️-demonstração)
- [🚀 Acesso ao Projeto](#-acesso-ao-projeto)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [📁 Estrutura de Arquivos](#-estrutura-de-arquivos)
- [🤝 Pessoas Contribuidoras](#-pessoas-contribuidoras)
- [👨‍💻 Pessoa Desenvolvedora](#-pessoa-desenvolvedora)
- [📄 Licença](#-licença)

---

## 📖 Descrição do Projeto

O **Site Países** é uma aplicação web interativa focada em turismo cultural, desenvolvida com o objetivo de reunir informações sobre as principais nações do mundo e seus pontos turísticos. A proposta surgiu da observação de que muitos portais de turismo apresentam falhas críticas de responsividade, sendo construídos apenas para desktop.

O projeto foi desenvolvido na disciplina de **Desenvolvimento Web**, aplicando na prática os conceitos de **UI/UX**, responsividade com **Media Queries** e manipulação dinâmica do DOM com **JavaScript puro**. Toda a interface foi pensada para ser limpa, intuitiva e acessível em qualquer dispositivo — celular, tablet, desktop ou TV.

> *"Vamos viajar um pouco por aqui e conhecer lugares turísticos ✈️🧑‍✈️"*

---

## 🚦 Status do Projeto

<div align="center">

```
🟡  EM DESENVOLVIMENTO  —  Versão 1.0.0
```

| Etapa                        | Status       |
|------------------------------|:------------:|
| Layout e Design Base         | ✅ Concluído  |
| Grid Responsivo (4 breakpoints) | ✅ Concluído |
| Modal com dados dinâmicos    | ✅ Concluído  |
| Carrossel de lugares turísticos | ✅ Concluído |
| Barra de Pesquisa            | 🔄 Em andamento |
| Novos países                 | 🔄 Planejado  |
| Versão PWA / APK             | 🔄 Planejado  |
| Back-end e favoritos         | 🔜 Futuro     |

</div>

---

## ✨ Funcionalidades

- 🗺️ **6 países disponíveis** — França, EUA, Espanha, China, Itália e Turquia
- 🖱️ **Cards interativos** com imagens de bandeiras como plano de fundo e efeitos de hover animados
- 🪟 **Modal dinâmico** que carrega informações diferentes para cada país ao ser clicado
- 🎠 **Carrossel automático** de lugares turísticos com autoplay a cada 5 segundos, setas de navegação e dots indicadores
- 📱 **Layout totalmente responsivo** com 4 breakpoints:
  - 📵 Mobile `< 480px` → 1 coluna
  - 📱 Mobile médio `≥ 481px` → 2 colunas
  - 🖥️ Tablet `≥ 768px` → 3 colunas + modal em 2 painéis
  - 🖥️ Desktop `≥ 1280px` → 6 colunas
- 🌐 **Botão "Saiba Mais"** que redireciona para a Wikipedia do país em nova aba
- 🔲 **Fechamento do modal** pelo botão ✕ ou clicando fora do container
- 🌑 **Tema escuro** com blur no overlay e animações suaves de escala

---

## 🖥️ Demonstração

### Desktop (1440px)
> Grid com 6 países em linha única — aproveitamento máximo da tela

<div style="display:grid; grid-template-columns: repeat(2, 1fr);  gap: 10px width:100%;">
  <img src="img/md/dasktop.png" width="400px" style="border-radius:10% padding:10px"/><br><sub><b></b></sub>
  <img src="img/md/modal-aberto-desktop.png" width="400px" style="border-radius:10%"/><br><sub><b></b></sub>
</div>

### Tablet (768px)
> 3 colunas, modal completo em dois painéis

<div style="display:grid; grid-template-columns: repeat(2, 1fr); gap: 10px width:100%;">
  <img src="img/md/tablet.png" width="400px" style="border-radius:10% padding:10px"/><br><sub><b></b></sub>
  <img src="img/md/modal-aberto-tablet.png" width="400px" style="border-radius:10%"/><br><sub><b></b></sub>
</div>

### Mobile (390px)
> Coluna única, modal simplificado sem painel de imagem lateral

<div style="display:grid; grid-template-columns: repeat(2, 1fr); gap: 10px width:100%;">
  <img src="img/md/mobile.png" width="400px" style="border-radius:10% padding:10px"/><br><sub><b></b></sub>
  <img src="img/md/modal-aberto-mobile.png" width="400px" style="border-radius:10%"/><br><sub><b></b></sub>
</div>


---

## 🚀 Acesso ao Projeto

### ▶️ Rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/site-paises.git

# 2. Entre na pasta do projeto
cd site-paises

# 3. Abra o arquivo principal no navegador
# Opção A: clique duplo no index.html
# Opção B: use o Live Server no VS Code (recomendado)
```

> ⚠️ **Atenção:** O `script.js` usa a **Fetch API** para carregar o `data.json`.  
> Por isso, o site **não funciona** se aberto diretamente via `file://` no navegador — é necessário um servidor local.  
> Recomenda-se a extensão **Live Server** do VS Code ou usar o **Replit**.

### 🌐 Acessar online

O projeto está hospedado no **Replit**:

```
🔗 https://replit.com/@seu-usuario/site-paises
```

### ➕ Adicionar um novo país

1. Abra `data.json`
2. Adicione um novo objeto seguindo o modelo:

```json
{
  "id": "brasil",
  "nome": "Brasil",
  "link": "https://pt.wikipedia.org/wiki/Brasil",
  "descricao": "Descrição do país...",
  "lugares": [
    {
      "nome": "Cristo Redentor",
      "descricao": "Descrição do lugar.",
      "imagem": "https://url-da-imagem.jpg"
    }
  ]
}
```

3. Adicione um novo card no `index.html`:

```html
<button class="card" id="brasil"><span>Brasil</span></button>
```

4. Adicione o background no `style.css`:

```css
#brasil {
  background: url(img/bandeira-brasil.jpg) no-repeat center;
  background-size: cover;
}
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Uso no Projeto |
|------------|:------:|----------------|
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=flat) **HTML5** | 5 | Estrutura semântica da página, modal e cards |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat) **CSS3** | 3 | Estilização, Media Queries, animações e tema escuro |
| ![JS](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat) **JavaScript ES6+** | ES2015+ | DOM, Fetch API, lógica do modal e carrossel |
| ![JSON](https://img.shields.io/badge/-JSON-000?logo=json&logoColor=white&style=flat) **JSON** | — | Banco de dados local dos países e lugares turísticos |
| ![Google Fonts](https://img.shields.io/badge/-Google%20Fonts-4285F4?logo=google&logoColor=white&style=flat) **Poppins** | — | Tipografia moderna e legível |
| ![Replit](https://img.shields.io/badge/-Replit-667881?logo=replit&logoColor=white&style=flat) **Replit** | — | Desenvolvimento e hospedagem em nuvem |

---

## 📁 Estrutura de Arquivos

```
site-paises/
│
├── 📄 index.html          # Estrutura principal da aplicação
├── 🎨 style.css           # Estilos globais, responsividade e animações
├── ⚙️  script.js           # Lógica interativa: modal, carrossel, eventos
├── 🗃️  data.json           # Dados dos países e lugares turísticos
│
└── 📁 img/
    ├── logo_ibge.png       # Logotipo do cabeçalho
    ├── airplane.png        # Favicon da aba do navegador
    ├── bandeira-franca.jpg
    ├── bandeira-usa.jpg
    ├── bandeira-espanha.jpg
    ├── bandeira-china.jpg
    ├── bandeira-italia.jpg
    └── bandeira-turquia.jpg
```

---

## 🤝 Pessoas Contribuidoras

<div align="center">

Contribuições são muito bem-vindas! Siga os passos abaixo para colaborar:

1. Faça um **fork** do repositório
2. Crie uma branch: `git checkout -b feature/minha-feature`
3. Faça suas alterações e commit: `git commit -m 'feat: adiciona novo país'`
4. Envie para o repositório remoto: `git push origin feature/minha-feature`
5. Abra um **Pull Request** detalhando as mudanças

### Ideias para contribuição
- 🌎 Adicionar novos países ao `data.json`
- 🔍 Implementar a barra de busca (código base já existe em `script.js`)
- 🌙 Modo claro / escuro
- 🌐 Internacionalização (EN / ES)
- ♿ Melhorias de acessibilidade (ARIA labels)

</div>

---

## 👨‍💻 Pessoa Desenvolvedora

<div align="center">

<br>

| [<img src="https://avatars.githubusercontent.com/u/162909728?v=4&size=64" width="100px" style="border-radius:50%"/><br><sub><b>Marley Castro</b></sub>](https://github.com/seu-usuario) |
|:---:|
| Desenvolvedor Front-end |
| [![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/seu-usuario) [![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?logo=linkedin&logoColor=white&style=flat-square)](https://linkedin.com/in/seu-usuario) |

<br>

> Desenvolvido com 💙 por **Marley Castro** · 2025

</div>

---

## 📄 Licença

```
MIT License

Copyright (c) 2025 Marley Castro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

> 📝 Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f3460,50:16213e,100:1a1a2e&height=100&section=footer" width="100%"/>

*"Porque explorar o mundo começa com um clique." 🌍*

</div>
