import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const LibraryScreen = () => {
  const options = [
    { id: '1', icon: 'musical-notes', title: 'Playlists' },
    { id: '2', icon: 'person', title: 'Artistes' },
    { id: '3', icon: 'albums', title: 'Albums' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarPlaceholder}>
             <Text style={styles.avatarText}>H</Text>
        </View>
        <Text style={styles.headerTitle}>Bibliothèque</Text>
        <TouchableOpacity>
             <Ionicons name="add" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <FlatList
            data={options}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.optionRow}>
                    <View style={styles.iconContainer}>
                        <Ionicons name={item.icon} size={24} color="#555" />
                    </View>
                    <Text style={styles.optionText}>{item.title}</Text>
                    <Ionicons name="chevron-forward" size={20} color="#ccc" />
                </TouchableOpacity>
            )}
            ListFooterComponent={() => (
                <View style={styles.recents}>
                    <Text style={styles.sectionTitle}>Ajoutés récemment</Text>
                    {[1, 2, 3, 4].map(i => (
                        <View key={i} style={styles.recentItem}>
                             <View style={styles.recentImage} />
                             <View>
                                 <Text style={styles.recentTitle}>Playlist Cool {i}</Text>
                                 <Text style={styles.recentSubtitle}>Par HorneVibes</Text>
                             </View>
                        </View>
                    ))}
                </View>
            )}
            contentContainerStyle={{ paddingBottom: 100 }}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatarPlaceholder: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#FF5722', // Orange branding maybe
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  recents: {
      marginTop: 20,
  },
  sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 15,
  },
  recentItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
  },
  recentImage: {
      width: 50,
      height: 50,
      backgroundColor: '#eee',
      borderRadius: 4,
      marginRight: 15,
  },
  recentTitle: {
      fontSize: 16,
      fontWeight: '500',
  },
  recentSubtitle: {
      fontSize: 14,
      color: 'gray',
  },
});

export default LibraryScreen;
