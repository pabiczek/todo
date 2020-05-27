import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import Home from '../screens/Home';
import TodoScreen from '../screens/TodoList';
import About from '../screens/About';

const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#34ebab'
                
            }}
            
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color,size})=>(
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="List"
                component={TodoScreen}
                options={{
                    tabBarLabel: 'List',
                    tabBarIcon: ({color,size})=>(
                        <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="About"
                component={About}
                options={{
                    tabBarLabel: 'About',
                    tabBarIcon: ({color,size})=>(
                        <MaterialCommunityIcons name="information-outline" color={color} size={size} />
                    )
                }}
            />
            </Tab.Navigator>
    );
};

export default BottomTabs;