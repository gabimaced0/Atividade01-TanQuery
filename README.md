# Atividade01 - TanStack Query (React Native + Expo)

**Integrantes:**  
- Nome 1 (RM/RA)  
- Nome 2 (RM/RA)  
- Nome 3 (RM/RA)

## Objetivo
Consumir `https://jsonplaceholder.typicode.com/users` usando **@tanstack/react-query** exibindo **nome, e-mail e cidade**, com estados de **carregando** e **erro**.

## Como rodar
1. **Pré‑requisitos:** Node 18+, npm ou yarn e Expo CLI (`npm i -g expo-cli`, opcional).  
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o app:
   ```bash
   npm start
   ```
   - escaneie o QR no Expo Go (Android/iOS) **ou** use `a` para Android Studio, `i` para iOS (Mac).
   
## Estrutura
```
src/
  api/users.js           # fetch na API pública
  QueryClientProvider.js # QueryClient + Provider
  HomeScreen.js          # UI com FlatList e useQuery
App.js                   # monta provider + tela
```
## Tecnologias
- Expo / React Native
- @tanstack/react-query

## Rubrica atendida
- [x] QueryClient + Provider configurados
- [x] `useQuery` buscando API
- [x] Exibe nome, email e cidade
- [x] Loading + erro tratados
- [x] Código organizado e legível

> Entrega: 2025-08-11