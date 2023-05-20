npm install nativewind
npm install tailwindcss -D
npx tailwindcss init

Setup tailwindcss configuration: https://www.nativewind.dev/quick-starts/create-react-native-app

For typescript configuration, add these lines on tsconfig.json:

"compilerOptions": {
  "types": [
    "nativewind/types"
  ]
},

npx expo install @expo-google-fonts/roboto @expo-google-fonts/bai-jamjuree expo-font
npx expo install react-native-svg
npm i -D react-native-svg-transformer

Fazer a criação de um projeto OAuth no Github para pegar as informações como ClientId e Authorization callback URL

npm i axios
npx expo install expo-secure-store   -- para salvar informações sensíveis no celular

--- expo router permite usar a mesma estrutura de roteamento do Next.js
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar