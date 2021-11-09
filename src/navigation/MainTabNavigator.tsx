import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeScreen, SettingsScreen } from '../screens';
import { strings } from '../localization';
import { useSelector } from 'react-redux';
import { selectIsDark } from '@store/slices/themSlice';
import theme from '@assets/theme/theme';
const Tab = createBottomTabNavigator();
const ICON_SIZE = 25;

const MainTabNavigator = () => {
  const isDark = useSelector(selectIsDark);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDark
            ? theme.colors.bottomBarBackgrounds.dark
            : theme.colors.bottomBarBackgrounds.light,
        },
        tabBarActiveTintColor: isDark
          ? theme.colors.white
          : theme.colors.lightBlue,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: strings('news'),
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={ICON_SIZE}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: strings('settings'),
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'cog' : 'cog-outline'}
              color={color}
              size={ICON_SIZE}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
