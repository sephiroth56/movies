import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

/**  App Screens **/
import Home from '../screens/Home'
import Details from '../screens/Details'

const Stack = createStackNavigator()

const Router = () => {
    return <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Películas"
            headerMode="screen"
        >
            <Stack.Screen
                name="Películas"
                component={Home}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{
                    headerTitle: false,
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
}
export default Router