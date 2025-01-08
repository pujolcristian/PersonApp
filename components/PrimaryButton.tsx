import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {COLORS} from "../constants/colors";

interface PrimaryButtonProps {
    onPress: () => void;
    children: any;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({children, onPress}) => {


    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({pressed}) => [
                    pressed && styles.pressed,
                    styles.buttonInnerContainer,
                ]}
                onPress={onPress}
                android_ripple={{color: "gray"}}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        backgroundColor: "green",
        borderRadius: 12,
        width: "100%",
        margin: 6,
        marginTop: 20,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        paddingVertical: 2,
        paddingHorizontal: 16,
        elevation: 4,
        shadowOffset: {width: 0, height: 2},
    },
    buttonText: {
        fontFamily: 'galano-medium',
        color: COLORS.white,
        paddingVertical: 8,
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    },
});
