import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text } from 'react-native';
import SearchResultScreen from '../screens/SearchResultScreen';
import IndexScreen from '../screens/IndexScreen';
import TvShowScreen from '../screens/TvShowScreen';
import { useSelectedValue } from "../../hooks/SelectedValue";
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const NavContainer = () => {
  const { setSelectedValue } = useSelectedValue();
  const navigation = useNavigation();

  useEffect(() => {
    const changeTab = navigation.addListener('state', () => {
      setSelectedValue('popular');
    });

    return changeTab;
  }, [navigation]);

  return (
    <Tab.Navigator
      initialRouteName="Movies"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, textTransform: 'none' },
        tabBarStyle: { backgroundColor: '#fff' },
        tabBarActiveTintColor: '#2c3e50',
        tabBarInactiveTintColor: '#d1d1d1',
        indicatorStyle: { backgroundColor: '#2c3e50' },
      }}
    >
      <Tab.Screen 
        name="Movies" 
        component={IndexScreen} 
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, textTransform: 'none' }}>Movies</Text>
          ),
        }}
      />
      <Tab.Screen 
        name="Search Results" 
        component={SearchResultScreen} 
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, textTransform: 'none'}}>Search Results</Text>
          ),
        }}
      />
      <Tab.Screen 
        name="Tv Show" 
        component={TvShowScreen} 
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, textTransform: 'none' }}>TV Shows</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavContainer;