<a name="readme-top"></a>

[![GitHub repo size][reposize-shield]][reposize-url]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- header -->
<br />
<div align="center">
  <a href="https://www.comeialabs.com.br/">
    <img src="https://www.comeialabs.com.br/wp-content/uploads/2022/02/comeia-Vector-300x92.png" alt="Logo COMEIA">
  </a>

  <h3 align="center">Desafio Front-end React COMEIA</h3>

  <p align="center">
    <a href="https://comeia-react-challenge.vercel.app/">Resultado Online</a>
    ·
    <a href="https://github.com/sammarxz/comeia-react-challenge/blob/main/CHALLENGE.md">Sobre o desafio</a>
    ·
    <a href="https://github.com/sammarxz/comeia-react-challenge/issues">Reportar um bug</a>
  </p>
</div>

<!-- sumário -->
<details>
  <summary>Sumário</summary>
  <ol>
    <li><a href="#sobre-o-projeto">Sobre o projeto</a></li>
    <li><a href="#como-utilizar">Como utilizar</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contribuindo">Contribuindo</a></li>
    <li><a href="#licença">Licença</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Sobre o projeto

[![Weather App][product-preview]](https://comeia-react-challenge.vercel.app/)

Bom, o projeto é simples, mostrar a previsão do tempo e alguns dados metereológicos baseado na cidade escolhida pelo usuário.

Atualmente estou estudando sobre arquitetura de código e aproveitei esse projeto para colocar em prática a `Clean Architecture` adaptada ao front-end. Ficou assim:

![](https://github.com/sammarxz/comeia-react-challenge/blob/main/public/react-clean-code.png?raw=true)

Eu particularmente gostei dessa arquitetura, acho que deu para abstrair bastante, separar as regras de negócio da interface e esse foi o meu objetivo. Sei que parece que eu quis "matar uma formiga com uma bazuca" utilizando Clean Architecture e [Redux](https://redux.js.org/), mas quis aproveitar um projeto simples para testar se funcionaria.

A ordem de desenvolvimento foi partindo do `model`, observando a interface final e tentando estrair quais dados e tipos eu precisaria. Após isso fui dar uma olhada na [WeatherAPI](https://www.weatherapi.com/) e ver o retorno dela. Depois criei um `adapter`que pegaria o retorno e adaptaria para meu `model`. Feito isso, criei um `service` para consumir a API. Depois coloquei esse `service` dentro de um `custom hook`, testei, criei uma interface sem estilização apenas para exibir e ver se tudo estava funcionando, só aí parti para a estilização da aplicação utilizando [Styled Components](https://styled-components.com/)

<p align="right">(<a href="#readme-top">Voltar para o topo</a>)</p>

## Como utilizar

Clone o repositório e entre na pasta:

```bash
$ git clone https://github.com/sammarxz/comeia-react-challenge.git
$ cd comeia-react-challenge
```

### Subindo ambiente de desenvolvimento com Docker

Primeiro, verifique se você tem o `docker-compose` instalado em sua máquina:

```bash
$ docker-compose version
```

Para subir o ambiente de desenvolvimento, basta executar:

```bash
$ docker-compose up
```

após o processo de download da imagem e instalação das dependências, o servidor vai estar disponível
na porta `5173`: [http://localhost:5173/](http://localhost:5173/)

### Subindo o ambiente de desenvolvimento localmente

Caso não queira utilizar ou não tenha o Docker disponível, você pode subir o ambiente localmente. Para isso é preciso
ter o [Node](https://nodejs.org/en/) e [Npm](https://www.npmjs.com/) instalados.

Eu recomendo utilizar o [Nvm (Node Version Manager)](https://github.com/nvm-sh/nvm):

```bash
$ nvm use
```

Após isso, é só instalar as dependências, preparar o Husky e executar o servidor:

```bash
$ npm install
$ npm run prepare
$ npm run dev
```

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

<!-- ROADMAP -->
## Roadmap

#### Dia 01
- [x] Criar repositório Git
- [x] Documentar instruções do desafio
- [x] Inicializar com Vite
- [x] adicionar Docker
- [x] Adicionar o Eslint + Prettier
- [x] Adicionar o Git Commit Message Linter
- [x] Adicionar o Lint-staged + Husky
- [x] Organizar pastas para utilizar o Clean Code

#### Dia 02
- [x] Implementar absolute imports
- [x] Setup de Testes com Jest e RTL
- [x] setup do axios, interceptors, adapters e models
- [x] setup do service weatherAPI

#### Dia 03
- [x] consumir o service Weather e retornar os dados
- [x] Testar custom hook (useWeather)
- [x] criar páginas funcionais (styleless - sem estilo)
	- [x] Adicionar e configurar o React-router-dom
	- [x] Criar home (página de seleção da cidade)
	- [x] Criar página de Weather (Forecast da cidade escolhida)
- [x] Estilizar a aplicação (styled-components)
- [x] Deploy na Vercel

#### Dia 04
- [x] Atualizar o Docker para passar a .env 
- [x] CI/CD 
- [x] Escrever documentação
- [x] Enviar Desafio

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

<!-- CONTRIBUTING -->
## Contribuindo

As contribuições são o que torna a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Quaisquer contribuições são **muito apreciadas**.

Se você tiver uma sugestão para melhorar a arquitetura, código etc, `fork` o repositório e crie um `pull request`. Você também pode simplesmente abrir uma `issue` com a tag "melhoria".
Não se esqueça de dar uma estrela ao projeto! Obrigado novamente!

1. Fork o projeto
2. Crie sua `Feature Branch` (`git checkout -b feature/AmazingFeature`)
3. Commit suas alterações seguindo o [Conventinal Commits](https://www.conventionalcommits.org/en/v1.0.0/) (`git commit -m 'feat: Add some AmazingFeature'`)
4. Dê um Push (`git push origin feature/AmazingFeature`)
5. Abra um `Pull Request`

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>



<!-- LICENSE -->
## Licença

Distribuído sob Licença MIT. Veja o arquivo `LICENSE.txt` para mais informações.

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>



<!-- CONTACT -->
## Contato

Sam Marxz - [@sammarxz](https://twitter.com/sammarxz) - sammarxz@protonmail.com

Project Link: [https://github.com/sammarxz/comeia-react-challenge](https://github.com/sammarxz/comeia-react-challenge)

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/sammarxz/comeia-react-challenge.svg?style=for-the-badge
[contributors-url]: https://github.com/sammarxz/comeia-react-challenge/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/sammarxz/comeia-react-challenge.svg?style=for-the-badge
[reposize-shield]: https://img.shields.io/github/repo-size/sammarxz/comeia-react-challenge?style=for-the-badge
[reposize-url]: https://img.shields.io/github/repo-size/sammarxz/comeia-react-challenge?style=for-the-badge
[forks-url]: https://github.com/sammarxz/comeia-react-challenge/network/members
[stars-shield]: https://img.shields.io/github/stars/sammarxz/comeia-react-challenge.svg?style=for-the-badge
[stars-url]: https://github.com/sammarxz/comeia-react-challenge/stargazers
[issues-shield]: https://img.shields.io/github/issues/sammarxz/comeia-react-challenge.svg?style=for-the-badge
[issues-url]: https://github.com/sammarxz/comeia-react-challenge/issues
[license-shield]: https://img.shields.io/github/license/sammarxz/comeia-react-challenge.svg?style=for-the-badge
[license-url]: https://github.com/sammarxz/comeia-react-challenge/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/sammarxz
[product-preview]: preview.png
