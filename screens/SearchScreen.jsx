import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const SearchScreen = () => {
  const categories = [
    { id: '1', title: 'Rock', color: '#E91E63' },
    { id: '2', title: 'Pop', color: '#9C27B0' },
    { id: '3', title: 'Jazz', color: '#673AB7' },
    { id: '4', title: 'Hip Hop', color: '#3F51B5' },
    { id: '5', title: 'Classique', color: '#2196F3' },
    { id: '6', title: 'Electro', color: '#009688' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recherche</Text>
        <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
            <TextInput
                placeholder="Artistes, titres ou podcasts"
                style={styles.input}
                placeholderTextColor="#666"
            />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Parcourir tout</Text>
        <FlatList
            data={categories}
            numColumns={2}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.grid}
            renderItem={({ item }) => (
                <View style={[styles.categoryCard, { backgroundColor: item.color }]}>
                    <Text style={styles.categoryTitle}>{item.title}</Text>
                </View>
            )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
  },
  grid: {
    paddingBottom: 100, // Space for player
  },
  categoryCard: {
    flex: 1,
    height: 90,
    margin: 5,
    borderRadius: 5,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  categoryTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchScreen;
