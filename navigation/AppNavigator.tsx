import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PeopleScreen} from "../presentation/people/PeopleScreen";
import React from "react";
import {COLORS} from "../constants/colors";

const Stack = createNativeStackNavigator();


export default function AppNavigator() {
    return (

        <Stack.Navigator
            initialRouteName={'PeopleScreen'}
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'gray',
                },
                headerTitleStyle: {
                    fontFamily: 'galano-heavy',
                    color: COLORS.white,
                    fontSize: 18,
                },
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen
                name="PeopleScreen"
                component={PeopleScreen}
                options={{
                    title: 'Lista de Personas',
                }}
            />
        </Stack.Navigator>
    );
}
