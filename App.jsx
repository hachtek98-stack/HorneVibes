import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import DiscoverScreen from './screens/DiscoverScreen';
import SearchScreen from './screens/SearchScreen';
import LibraryScreen from './screens/LibraryScreen';
import Player from './components/Player';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Découvrir') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Recherche') {
                  iconName = focused ? 'search' : 'search-outline';
                } else if (route.name === 'Bibliothèque') {
                  iconName = focused ? 'library' : 'library-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#1DB954',
              tabBarInactiveTintColor: 'gray',
              headerShown: false,
            })}
          >
            <Tab.Screen name="Découvrir" component={DiscoverScreen} />
            <Tab.Screen name="Recherche" component={SearchScreen} />
            <Tab.Screen name="Bibliothèque" component={LibraryScreen} />
          </Tab.Navigator>
        </NavigationContainer>
        <Player />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
