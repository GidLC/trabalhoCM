import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from './pages/Home/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './pages/Cadastro/Cadastro';
import Chat from './pages/Chat/Chat';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
                <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRoutes