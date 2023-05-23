<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Spacetime Server</h3>

  <p align="center">
    This is a module of the NLW Spacetime provided by Rocketseat.
    <br />
    <a href="https://github.com/LeonardoMagalhaes/NLW-Spacetime"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/LeonardoMagalhaes/NLW-Spacetime/issues">Report Bug</a>
    ·
    <a href="https://github.com/LeonardoMagalhaes/NLW-Spacetime/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Pre-requisites</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



### Built With

* [![Node][NodeJS]][Node-url]
* [![Axios][AxiosJS]][Axios-url]
* [![Prisma][PrismaJS]][Prisma-url]
* [![Fastify][FastifyJS]][Fastify-url]
* [![Typescript][TypescriptJS]][Typescript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

First, go to your Github account and create a project (under Settings/ Developer Settings/ OAuth Apps).

For Web application, the Authorization callback URL should be a route you are creating at the server: http://localhost:3000/api/auth/callback
For Mobile application, the Authorization callback URL should be exp://localhost:19000/--/*

Get ClientId and Client Secret and place them in the .env file.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```



### Prerequisites

Run the npm install:
* npm
  ```sh
  npm install npm@latest -g
  ```



<!-- USAGE EXAMPLES -->
## Usage

This is a POC to put in practice new functionalities and studies.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/LeonardoMagalhaes/NLW-Spacetime](https://github.com/LeonardoMagalhaes/NLW-Spacetime)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

```js
  npm init -y           // Constrói o package.json para iniciar uma aplicação node
  npm i typescript -D   // Instala o typescript
  npm i @types/node -D  // Para que o typescript entenda que está sendo executado no node:
  npm i tsx -D          // Converte automaticamente o código typescript para javascript, no ambiente de desenvolvimento (então podemos testar o código)
  npx tsc --init        // Cria o arquivo de configuração do typescript (tsconfig.json)
  tsconfig.json         // Trocar o "target": "es2016" para "target": "es2020" (ou seja, converter o código para versão 2020 do ecmascript)
  package.json          // Adicionar o script "dev": "tsx watch src/server.ts"
  npm i fastify         // Instala o fastify

  npm i prisma -D
    npx prisma init --datasource-provider SQLite  // Diz pro prisma que o banco a ser utilizado é o sqlite.
    npx prisma migrate dev                        // Cria a migration depois de ter inserido as models (tabelas) no arquivo schema.prisma
    npx prisma studio                             // Abre o visualizador padrão do prisma para ver as tabelas

  npm i @prisma/client  // Para acessar o banco de dentro da aplicação
  npm i zod             // Validação de dados
  npm i @fastify/cors   // Técnica de segurança de quais urls podem acessar o backend

  npm i dotenv -D           // Para que as variáveis de ambientes possam ser lidas.
  npm i axios               // Para fazer requisições http
  npm i @fastify/jwt        // Para manter o usuário autenticado
  npm i @fastify/multipart  // Para comunicação com o front end de qualquer tipo de dado
  npm i @fastify/static     // Faz com que uma pasta do backend fique pública.
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/LeonardoMagalhaes/NLW-Spacetime.svg?style=for-the-badge
[contributors-url]: https://github.com/LeonardoMagalhaes/NLW-Spacetime/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/LeonardoMagalhaes/NLW-Spacetime.svg?style=for-the-badge
[forks-url]: https://github.com/LeonardoMagalhaes/NLW-Spacetime/network/members
[stars-shield]: https://img.shields.io/github/stars/LeonardoMagalhaes/NLW-Spacetime.svg?style=for-the-badge
[stars-url]: https://github.com/LeonardoMagalhaes/NLW-Spacetime/stargazers
[issues-shield]: https://img.shields.io/github/issues/LeonardoMagalhaes/NLW-Spacetime.svg?style=for-the-badge
[issues-url]: https://github.com/LeonardoMagalhaes/NLW-Spacetime/issues
[license-shield]: https://img.shields.io/github/license/LeonardoMagalhaes/NLW-Spacetime.svg?style=for-the-badge
[license-url]: https://github.com/LeonardoMagalhaes/NLW-Spacetime/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/leonardo-magalhães-alves-b6511153
[product-screenshot]: public/Screenshot.png
[TypescriptJS]: https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org
[PrismaJS]: https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white
[Prisma-url]: https://www.prisma.io
[FastifyJS]: https://img.shields.io/badge/fastify-000000?style=for-the-badge&logo=fastify&logoColor=white
[Fastify-url]: https://www.fastify.io
[NodeJS]: https://img.shields.io/badge/node-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/en
[AxiosJS]: https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white
[Axios-url]: https://axios-http.com/ptbr/