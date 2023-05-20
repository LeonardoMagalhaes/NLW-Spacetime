## server

npm init -y   -- constrói o package.json para iniciar uma aplicação node.
npm i typescript -D   -- instala o typescript
npm i @types/node -D   -- para que o typescript entenda que está sendo executado no node
npm i tsx -D   -- converte automaticamente o código typescript para javascript (então podemos testar o código) senão não dá certo. 
npx tsc --init   -- cria o arquivo de configuração do typescript (tsconfig.json)
  tsconfig.json   -- trocar o "target": "es2016" para "target": "es2020" (ou seja, converter o código para versão 2020 do ecmascript)

package.json   -- adicionar o script "dev": "tsx watch src/server.ts"

npm i fastify
npm i prisma -D
  npx prisma init --datasource-provider SQLite   -- diz pro prisma que o banco a ser utilizado é o sqlite.
  npx prisma migrate dev   -- cria a migration depois de ter inserido as models (tabelas) no arquivo schema.prisma
  npx prisma studio   -- usar o visualizador padrão do prisma para ver as tabelas

  npm i @prisma/client   -- para acessar o banco de dentro da aplicação
  npm i zod   -- validação de dados
  npm i @fastify/cors   -- técnica de segurança de quais urls podem acessar o backend

  Fazer a criação de um projeto OAuth no Github para pegar as informações como ClientId e Authorization callback URL

  npm i dotenv -D   -- para que as variáveis de ambientes possam ser lidas.
  npm i axios   -- para fazer requisições http
  npm i @fastify/jwt   -- para manter o usuário autenticado
  npm i @fastify/multipart   -- para comunicação com o front end de qualquer tipo de dado
  npm i @fastify/static   -- faz com que uma pasta do backend fique pública.