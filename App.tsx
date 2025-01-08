import {NavigationContainer} from "@react-navigation/native";
import React, {useEffect} from "react";
import AppNavigator from "./navigation/AppNavigator";
import Toast from "react-native-toast-message";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();


export default function App() {


    const [fontsLoaded] = useFonts({
        'galano-regular': require('./assets/fonts/GalanoGrotesqueRegular.otf'),
        'galano-medium': require('./assets/fonts/GalanoGrotesqueMedium.otf'),
        'galano-heavy': require('./assets/fonts/GalanoGrotesqueHeavy.otf'),
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retry: 1,
            },
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <AppNavigator/>
                <Toast/>
            </NavigationContainer>
        </QueryClientProvider>
    );
}