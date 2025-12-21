import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import DiscoverScreen from './screens/DiscoverScreen';
import SearchScreen from './screens/SearchScreen';
import LibraryScreen from './screens/LibraryScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
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
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Découvrir" component={DiscoverScreen} />
        <Tab.Screen name="Recherche" component={SearchScreen} />
        <Tab.Screen name="Bibliothèque" component={LibraryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;