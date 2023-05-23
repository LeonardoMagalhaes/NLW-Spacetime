<!-- <a name="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/LeonardoMagalhaes/NLW-Spacetime">
    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green-768x231.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">Spacetime Web</h3>

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



<!-- ABOUT THE PROJECT -->
<!-- ## About The Project

![Product Name Screen Shot][product-screenshot]

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



### Built With

* [![Next][Next.js]][Next-url]
* [![Axios][AxiosJS]][Axios-url]
* [![React][React.js]][React-url]
* [![Tailwind][TailwindCSS]][Tailwind-url]
* [![Typescript][TypescriptJS]][Typescript-url]
<!-- * [![Node][NodeJS]][Node-url] -->
<!-- * [![Prisma][PrismaJS]][Prisma-url] -->
<!-- * [![Fastify][FastifyJS]][Fastify-url] -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

First, go to your Github account and create a project (under Settings/ Developer Settings/ OAuth Apps).

For Web application, the Authorization callback URL should be a route you are creating at the server: http://localhost:3000/api/auth/callback

Get ClientId and place it in the .env file.

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
  npx create-next-app@latest web --use-npm   // Cria um projeto em Next chamado web
  npm i lucide-react

  // Necessário colocar NEXT_PUBLIC_ antes de qualquer variável de ambiente quando utilizar o Next.js

  npm i axios
  npx expo install expo-auth-session expo-crypto

  npm install -D @tailwindcss/forms             // Para substituir a estilização padrão do css para formulário (checkboxes nesse caso)
    plugins: [require('@tailwindcss/forms')],   // Adicionar essa linha no arquivo tailwind.config.js

  npm i js-cookie   // Quando utilizar o 'use-client' (sentença colocada no começo do arquivo que diz para o navegador executar o javascript no client e não no pré servidor node criado pelo Next. Exemplo components/NewMemoryForm.tsx), é necessário fazer a instalação desse pacote para pegar o token de autenticação do usuário que estará salvo nos cookies
  npm i --save-dev @types/js-cookie   // Para integrar com o typescript
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
<!-- [PrismaJS]: https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white
[Prisma-url]: https://www.prisma.io
[FastifyJS]: https://img.shields.io/badge/fastify-000000?style=for-the-badge&logo=fastify&logoColor=white
[Fastify-url]: https://www.fastify.io
[NodeJS]: https://img.shields.io/badge/node-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/en -->
[AxiosJS]: https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white
[Axios-url]: https://axios-http.com/ptbr/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tailwind-url]: https://tailwindcss.com