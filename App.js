import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Stopwatch from './Components/Stopwatch';
import Picker from './Components/Picker';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Stopwatch') {
              iconName = 'clock'; 
            } else if (route.name === 'Picker') {
              iconName = 'calendar'; 
            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: { backgroundColor: 'gray'},
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'tomato',
        })}
      >
        <Tab.Screen name="Stopwatch"
            component={Stopwatch}
            options={{ 
                title: 'Stopwatch', 
                headerStyle: { backgroundColor: 'gray' }, 
                headerTintColor: 'black', 
            }} 
        />

        <Tab.Screen name="Picker" 
            component={Picker} 
            options={{ 
                title: 'Picker', 
                headerStyle: { backgroundColor: 'gray' }, 
                headerTintColor: 'black', 
            }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
