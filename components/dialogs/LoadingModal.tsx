import React from "react";
import { ActivityIndicator, Modal, StyleSheet, Text, View } from "react-native";
import {COLORS} from "../../constants/colors";

interface LoadingModalProps {
    isVisible: boolean;
}

export const LoadingModal: React.FC<LoadingModalProps> = ({ isVisible }) => {
    return (
        <Modal transparent={true} visible={isVisible} animationType="fade">
            <View style={styles.modalContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text style={styles.modalText}>Cargando...</Text>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalText: {
        fontFamily: 'galano-medium',
        fontSize: 18,
        fontWeight: "bold",
        color: COLORS.darkGray,
    },
});