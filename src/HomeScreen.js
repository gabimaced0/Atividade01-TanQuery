import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from './api/users';

export default function HomeScreen() {
  const { data, isLoading, isError, error, refetch, isRefetching } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text style={styles.loading}>Carregando usuários...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorTitle}>Erro ao carregar usuários</Text>
        <Text style={styles.errorDesc}>{String(error?.message || 'Tente novamente mais tarde.')}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuários</Text>

      <Pressable
        onPress={refetch}
        accessibilityRole="button"
        style={styles.refreshBtn}
      >
        <Text style={styles.refreshText}>
          {isRefetching ? 'Atualizando…' : 'Atualizar'}
        </Text>
      </Pressable>

      <FlatList
        data={data ?? []}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.label}>
              Email: <Text style={styles.value}>{item.email}</Text>
            </Text>
            <Text style={styles.label}>
              Cidade: <Text style={styles.value}>{item.address?.city}</Text>
            </Text>
          </View>
        )}
        onRefresh={refetch}
        refreshing={isRefetching}
        ListEmptyComponent={<Text style={styles.small}>Nenhum usuário encontrado.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#0B0F17' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0B0F17' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12, color: '#E6EDF3' },
  small: { color: '#8B949E', marginBottom: 8, textAlign: 'center' },
  loading: { marginTop: 8, color: '#E6EDF3' },
  errorTitle: { color: '#ff6b6b', fontSize: 18, fontWeight: '700' },
  errorDesc: { marginTop: 6, color: '#E6EDF3', textAlign: 'center', paddingHorizontal: 16 },

  refreshBtn: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#30363D',
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: '#0B1220',
  },
  refreshText: { color: '#E6EDF3', textAlign: 'center', fontWeight: '600' },

  card: {
    backgroundColor: '#161B22',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#30363D',
  },
  name: { color: '#E6EDF3', fontWeight: '700', fontSize: 16 },
  label: { color: '#8B949E', marginTop: 6 },
  value: { color: '#E6EDF3', fontWeight: '500' },
});
