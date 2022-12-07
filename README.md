# Desafio Front-end React Comeia

## Como usar

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
