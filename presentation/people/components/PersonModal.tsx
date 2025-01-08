import React, {useEffect, useState} from "react";
import {Modal, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import {Ionicons} from "@expo/vector-icons";
import PrimaryButton from "../../../components/PrimaryButton";
import {Person} from "../../../core/person/interfaces/person.interface";
import {COLORS} from "../../../constants/colors";

interface PersonModalProps {
    person: Person | null;
    isVisible: boolean;
    onClose: () => void;
    onSave: (person: Person) => void;
    onEdit: (person: Person) => void;
}

export const PersonModal = ({person, isVisible, onClose, onSave, onEdit}: PersonModalProps) => {
    const isIos = Platform.OS === "ios";
    const [buttonTitle, setButtonTitle] = useState("Guardar");

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        email: "",
        id: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        if (person) {
            setFormData({
                name: person.name,
                phone: person.phone.toString(),
                address: person.address,
                email: person.email,
                id: person.id.toString(),
            });
            setButtonTitle("Editar");
        } else {
            setButtonTitle("Guardar");
            resetForm();
        }
    }, [isVisible]);

    const handleInputChange = (field: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const validateFields = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name) newErrors.name = "El nombre es obligatorio.";
        if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "El teléfono debe tener 10 dígitos.";
        if (!formData.address) newErrors.address = "La dirección es obligatoria.";
        if (formData.email && !formData.email.match(/\S+@\S+\.\S+/)) newErrors.email = "El email no es válido.";
        if (!formData.id.match(/^\d+$/)) newErrors.id = "El ID debe ser numérico.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = () => {
        if (!validateFields()) return;

        const newPerson: Person = {
            id: Number(formData.id),
            name: formData.name,
            address: formData.address,
            phone: Number(formData.phone),
            email: formData.email,
        };


        if (person) {
            onEdit(newPerson);
        } else {
            onSave(newPerson);
        }

        resetForm();
        onClose();
    };

    const resetForm = () => {
        setFormData({name: "", phone: "", address: "", email: "", id: ""});
        setErrors({});
    };

    return (
        <Modal visible={isVisible} animationType="slide">
            <View style={[styles.container, isIos && {paddingTop: 60}]}>
                <View style={styles.headerContainer}>
                    <Text
                        style={styles.textHeader}>{buttonTitle === "Guardar" ? "Crear persona" : "Editar persona"}</Text>
                    <TouchableOpacity onPress={onClose}>
                        <Ionicons name="close" size={24} color="black"/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.textDescription}>
                    Modifica o crea un persona según necesites
                </Text>
                <TextInputWithLabel
                    label="Nombre"
                    style={{width: "100%"}}
                    placeholder="Ingresa nombre"
                    value={formData.name}
                    onChangeText={(value) => handleInputChange("name", value)}
                    error={errors.name}
                />
                <View style={styles.textInputContainerName}>
                    <TextInputWithLabel
                        style={{flex: 1}}
                        label="Telefono"
                        keyboardType="numeric"
                        placeholder="Ingresa telefono"
                        maxLength={10}
                        value={formData.phone}
                        onChangeText={(value) => handleInputChange("phone", value)}
                        error={errors.phone}
                    />
                    <TextInputWithLabel
                        style={{flex: 1}}
                        label="Dirección"
                        placeholder="Ingresa dirección"
                        value={formData.address}
                        onChangeText={(value) => handleInputChange("address", value)}
                        error={errors.address}
                    />
                </View>
                <TextInputWithLabel
                    label="Email"
                    style={{width: "100%"}}
                    placeholder="Ingresa email"
                    value={formData.email}
                    keyboardType="email-address"
                    onChangeText={(value) => handleInputChange("email", value)}
                    error={errors.email}
                />
                <TextInputWithLabel
                    label="ID"
                    style={{width: "100%"}}
                    placeholder="Ingresa ID"
                    value={formData.id}
                    keyboardType="numeric"
                    onChangeText={(value) => handleInputChange("id", value)}
                    error={errors.id}
                />
                <PrimaryButton onPress={handleSave}>{buttonTitle}</PrimaryButton>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 16,
        backgroundColor: "#f5f5f5",
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    textHeader: {
        fontFamily: "galano-heavy",
        fontSize: 24,
        fontWeight: "bold",
        flex: 1,
        textAlign: "center",
        color: COLORS.darkGray,
    },
    textDescription: {
        fontFamily: "galano-medium",
        fontSize: 16,
        color: COLORS.darkGray,
        marginTop: 20,
        textAlign: "center",
    },
    textInputContainerName: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-between",
    },
});
