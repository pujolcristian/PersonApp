import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {COLORS} from "../constants/colors";

interface TextInputWithLabelProps {
    label: string;
    style?: any;
    placeholder: string;
    onChangeText: (text: string) => void;
    value: string;
    keyboardType?: "default" | "number-pad" | "decimal-pad" | "numeric" | "email-address" | "phone-pad";
    error?: string;
    maxLength?: number;
}

const TextInputWithLabel: React.FC<TextInputWithLabelProps>
    = ({
           label,
           style,
           placeholder,
           onChangeText,
           value,
           keyboardType,
           error,
           maxLength = 50,
       }) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                value={value}
                style={[styles.textInput, error && styles.errorBorder, isActive && !error && styles.focusedBorder]}
                placeholder={placeholder}
                placeholderTextColor={COLORS.placeholder}
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                maxLength={maxLength}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    label: {
        fontSize: 14,
        marginBottom: 1,
        color: COLORS.darkGray,
        fontFamily: 'galano-medium',
    },
    textInput: {
        fontFamily: 'galano-medium',
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 15,
        fontSize: 16,
        backgroundColor: COLORS.accent,
    },
    errorBorder: {
        borderColor: COLORS.error,
    },
    focusedBorder: {
        borderColor: COLORS.success
    },
    errorText: {
        fontFamily: 'galano-regular',
        marginTop: 5,
        fontSize: 12,
        color: COLORS.error,
    },
});

export default TextInputWithLabel;
