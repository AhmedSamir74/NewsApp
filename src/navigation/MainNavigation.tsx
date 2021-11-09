import React from 'react';
import { LoadingScreen, NewDetailsScreen, OnBoarding } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabNavigator from './MainTabNavigator';
import { strings } from '../localization';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '@assets/theme/theme';
import { StyleSheet } from 'react-native';
import { shareApp } from '@utils/links';
const StackNavigator = createStackNavigator();

const MainNavigation = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="Loading"
        component={LoadingScreen}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen
        name="MainNavigator"
        component={MainTabNavigator}
        options={{
          title: strings('news'),
          headerRight: () => (
            <MaterialCommunityIcons
              name="share-variant"
              color={theme.colors.lightBlue}
              size={25}
              style={styles.shareIcon}
              onPress={shareApp}
            />
          ),
        }}
      />
      <StackNavigator.Screen
        name="NewDetails"
        component={NewDetailsScreen}
        options={{
          headerBackTitle: '',
          title: strings('newDetails'),
        }}
      />
    </StackNavigator.Navigator>
  );
};
const styles = StyleSheet.create({
  shareIcon: { marginEnd: 15 },
});
export default MainNavigation;
