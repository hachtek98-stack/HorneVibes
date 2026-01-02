import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DiscoverScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerTitle}>Découvrir</Text>

        <Text style={styles.sectionTitle}>À la une</Text>
        <View style={styles.featuredCard}>
            <View style={styles.featuredPlaceholder} />
            <Text style={styles.featuredText}>Nouveautés de la semaine</Text>
        </View>

        <Text style={styles.sectionTitle}>Recommandé pour vous</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {[1, 2, 3, 4, 5].map((item) => (
                <View key={item} style={styles.albumCard}>
                    <View style={styles.albumPlaceholder} />
                    <Text style={styles.albumTitle}>Album {item}</Text>
                    <Text style={styles.artistName}>Artiste {item}</Text>
                </View>
            ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Tendances</Text>
        {[1, 2, 3].map((item) => (
            <TouchableOpacity key={item} style={styles.songRow}>
                <View style={styles.songIconPlaceholder} />
                <View style={styles.songInfo}>
                    <Text style={styles.songTitle}>Chanson Populaire {item}</Text>
                    <Text style={styles.songSubtitle}>Artiste Célèbre</Text>
                </View>
                <Text style={styles.duration}>3:45</Text>
            </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100, // Space for player
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  featuredCard: {
    width: '100%',
    height: 150,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'flex-end',
    padding: 15,
    overflow: 'hidden',
  },
  featuredPlaceholder: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#ddd',
  },
  featuredText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    zIndex: 1,
  },
  horizontalScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  albumCard: {
    marginRight: 15,
    width: 120,
  },
  albumPlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginBottom: 5,
  },
  albumTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  artistName: {
    fontSize: 12,
    color: 'gray',
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  songIconPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 4,
    marginRight: 15,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  songSubtitle: {
    fontSize: 12,
    color: 'gray',
  },
  duration: {
    color: 'gray',
    fontSize: 12,
  },
});

export default DiscoverScreen;
