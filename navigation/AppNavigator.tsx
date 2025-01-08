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
                    backgroundColor: 'gray', // Cambia el fondo del header
                },
                headerTitleStyle: {
                    fontFamily: 'galano-heavy',
                    color: COLORS.white, // Color del texto
                    fontSize: 18, // Tamaño del texto
                },
                headerTitleAlign: 'center', // Alinea el texto en el centro
            }}
        >
            <Stack.Screen
                name="PeopleScreen"
                component={PeopleScreen}
                options={{
                    title: 'Lista de Personas', // Título personalizado
                }}
            />
        </Stack.Navigator>
    );
}
