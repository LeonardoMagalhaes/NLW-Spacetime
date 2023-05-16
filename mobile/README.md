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