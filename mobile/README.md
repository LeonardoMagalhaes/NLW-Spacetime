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