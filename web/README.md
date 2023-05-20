npx create-next-app@latest web --use-npm   -- to create a next project called web
npm i lucide-react

Necessário colocar NEXT_PUBLIC_ antes de qualquer variável de ambiente quando utilizar o Next.js

Fazer a criação de um projeto OAuth no Github para pegar as informações como ClientId e Authorization callback URL

npm i axios
npx expo install expo-auth-session expo-crypto

npm install -D @tailwindcss/forms   -- para substituir a estilização padrão do css para formulário (checkboxes nesse caso)
  plugins: [require('@tailwindcss/forms')],   -- adicionar essa linha no arquivo tailwind.config.js

npm i js-cookie   -- quando utilizar o use-client (sentença colocada no começo do arquivo que diz para o navegador executar o javascript no client e não no pré servidor node criado pelo Next. Exemplo components/NewMemoryForm.tsx), é necessário fazer a instalação desse pacote para pegar o token de autenticação do usuário que estará salvo nos cookies
npm i --save-dev @types/js-cookie   -- para integrar com o typescript