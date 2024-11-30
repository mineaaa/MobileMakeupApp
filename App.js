import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from './Home';
import Search from './Search';
import Favourites from './Favourites'
import ProductInformation from './components/ProductInformation';
import Filter from './Filter';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Search') {
                iconName = 'search';
              }
              else if (route.name == 'Favourites') {
                iconName = 'heart'
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'pink',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search">
            {() => (
              <Stack.Navigator>
                <Stack.Screen
                  name="Back"
                  component={Search}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ProductInformation"
                  component={ProductInformation}
                  options={{ title: '💄Product Details💄' }}
                />
                <Stack.Screen
                  name="Filter"
                  component={Filter}
                  options={{ title: 'Filter' }}
                />
              </Stack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen name="Favourites">
            {() => (
              <Stack.Navigator>
                <Stack.Screen
                  name="Favourites"
                  component={Favourites}
                  options={{ title: '💗Your Favourites💗' }}
                />
                <Stack.Screen
                  name="ProductInformation"
                  component={ProductInformation}
                  options={{ title: '💄Product Details💄' }}
                />
              </Stack.Navigator>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
