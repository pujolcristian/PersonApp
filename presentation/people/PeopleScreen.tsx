import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {PersonModal} from './components/PersonModal';
import {PersonList} from './components/PersonList';
import {LoadingModal} from '../../components/dialogs/LoadingModal';
import {usePeople} from './hooks/usePeople';
import {Person} from "../../core/person/interfaces/person.interface";
import {COLORS} from "../../constants/colors";

export const PeopleScreen = () => {
    const {personsQuery, createPersonMutation, updatePersonMutation, deletePersonMutation} = usePeople();
    const [modalAddPerson, setModalAddPerson] = useState(false);
    const [modalEditPerson, setModalEditPerson] = useState<Person | null>(null);


    const handleAddPerson = () => {
        setModalAddPerson(true);
        console.log('add', modalEditPerson);
    };

    const handleEditPerson = (person: Person) => {
        setModalEditPerson(person);
        console.log('edit', person);
    };

    const handleClosePersonModal = () => {
        setModalAddPerson(false);
        setModalEditPerson(null);
        console.log('close');
    };

    return (
        <View style={styles.container}>

            <LoadingModal
                isVisible={personsQuery.isLoading}/>

            {/* Person List */}
            <PersonList
                persons={personsQuery.data ?? []}
                onEdit={handleEditPerson}
                onDelete={(id: number) => deletePersonMutation.mutate(id)}
            />
            {/* Person Modal */}
            <PersonModal
                person={modalEditPerson}
                isVisible={modalAddPerson || modalEditPerson !== null}
                onClose={handleClosePersonModal}
                onSave={(person) => createPersonMutation.mutate(person)}
                onEdit={(person) => updatePersonMutation.mutate(person)}
            />

            {/* Floating Add Button */}
            <TouchableOpacity style={styles.floatingButton} onPress={handleAddPerson}>
                <Ionicons name="add" size={24} color={COLORS.white}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: COLORS.primary,
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: COLORS.darkGray,
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: COLORS.black,
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    }
});
