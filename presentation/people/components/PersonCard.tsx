import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Person} from "../../../core/person/interfaces/person.interface";
import {COLORS} from "../../../constants/colors";

interface PersonCardProps {
    person: Person;
    onEdit: (person: Person) => void;
    onDelete: (id: number) => void;
}

export const PersonCard = ({person, onEdit, onDelete}: PersonCardProps) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <View style={styles.codeWithName}>
                    <View style={styles.codeContainer}>
                        <Text style={styles.codeText}>Cod.</Text>
                        <Text style={styles.codeText}>{person.id.toString()}</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameText}>{person.name}</Text>
                        <Text style={styles.detail}>Telefono: {person.phone.toString()}</Text>
                    </View>
                </View>
                <View style={styles.actions}>
                    <TouchableOpacity onPress={() => onEdit(person)} style={styles.actionButton}>
                        <Text style={styles.icon}>✏️</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onDelete(person.id)} style={styles.actionButton}>
                        <Text style={styles.icon}>🗑️</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.details}>
                <Text style={styles.detail}>Dirección: {person.address}</Text>
                {person.email && <Text style={styles.detail}>Email: {person.email}</Text>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        padding: 15,
        marginVertical: 8,
        shadowColor: COLORS.black,
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    codeContainer: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 10,
    },
    codeWithName: {
        flexDirection: "row",
    },
    codeText: {
        fontFamily: "galano-heavy",
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
        color: "white",
    },
    nameContainer: {
        marginStart: 10,
        marginTop: 5,
    },
    nameText: {
        fontFamily: "galano-medium",
        fontSize: 18,
        fontWeight: "bold",
    },
    actions: {
        flexDirection: "row",
    },
    actionButton: {
        marginLeft: 10,
        padding: 5,
        maxHeight: 35,
        backgroundColor: COLORS.accent,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.gray,
    },
    icon: {
        fontSize: 16,
    },
    details: {
        marginTop: 10,
    },
    detail: {
        fontFamily: "galano-medium",
        fontSize: 14,
        marginTop: 5,
        fontWeight: "bold",
        color: COLORS.lightGray,
    },
});
