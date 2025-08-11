import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import QueryProvider from './src/QueryClientProvider';
import HomeScreen from './src/HomeScreen';

export default function App() {
  return (
    <QueryProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#0B0F17' }}>
        <StatusBar barStyle="light-content" />
        <HomeScreen />
      </SafeAreaView>
    </QueryProvider>
  );
}