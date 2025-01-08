import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {Alert} from 'react-native';
import Toast from "react-native-toast-message";
import {Person} from "../../../core/person/interfaces/person.interface";
import {createPerson, deletePerson, getAllPersons, updatePerson} from "../../../core/person/actions/Person-actions";

export const usePeople = () => {
    const queryClient = useQueryClient();


    // Fetch all persons
    const personsQuery = useQuery<Person[]>({
        queryKey: ['persons'],
        queryFn: () => getAllPersons(),
        staleTime: 1000 * 60 * 60, // 1 hour
    });

    // Create person mutation
    const createPersonMutation = useMutation({
        mutationFn: (person: Person) => createPerson(person),
        onSuccess: (message: string) => {
            queryClient.invalidateQueries({queryKey: ['persons']}).then(r => {
                console.info('Invalidated:', r);
            });
            Alert.alert('¡Éxito!', message);
        },
        onError: (error: any) => {
            Alert.alert('Error', error.message || 'Error al crear la persona');
        },
    });

    // Update person mutation
    const updatePersonMutation = useMutation({
        mutationFn: (person: Person) => updatePerson(person.id, person),
        onSuccess: (message: string) => {
            queryClient.invalidateQueries({queryKey: ['persons']}).then(r => {
                console.info('Invalidated:', r);
            });
            Toast.show({
                type: 'success',
                text1: '¡Éxito!',
                text2: message,
                position: 'bottom',
            });
        },
        onError: (error: any) => {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: error.message || 'Error al editar la persona',
                position: 'bottom',
            });
        },
    });

    const deletePersonMutation = useMutation({
        mutationFn: (id: number) => deletePerson(id),
        onSuccess: (message: string) => {
            queryClient.invalidateQueries({queryKey: ['persons']}).then(r => {
                console.info('Invalidated:', r);
            });
            console.log('Person deleted:', message);
            Toast.show({
                type: 'success',
                text1: '¡Éxito!',
                text2: message,
                position: 'bottom',
            });
        },
        onError: (error: any) => {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: error.message || 'Error al eliminar la persona',
                position: 'bottom',
            });
        },
    })


    return {
        personsQuery,
        createPersonMutation,
        updatePersonMutation,
        deletePersonMutation
    };
};
