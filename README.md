# Atividade01 - TanStack Query (CP4 - React Native + Expo)

Aplicativo React Native (Expo) que consome a API pública `https://jsonplaceholder.typicode.com/users`
utilizando **@tanstack/react-query**. Exibe nome, e-mail e cidade, com estados de carregamento e erro.

## Como rodar

Requisitos:
- Node.js LTS instalado
- Expo CLI (usa `npx` automaticamente)

Passos:
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o app:
   ```bash
   npx expo start
   ```
3. Use a câmera do celular (Expo Go) ou um emulador para abrir o projeto.

## O que foi implementado

- TanStack Query configurado com `QueryClient` e `QueryClientProvider`
- `useQuery` para buscar `https://jsonplaceholder.typicode.com/users`
- Lista com **nome**, **email** e **cidade**
- Estados de **carregando** e **erro**

## Integrantes
- Beatriz Ferreira Cruz — RM555698
- Gabrielly Campos Macedo — RM558962
- Rafael Macoto Magalhães — RM554992
