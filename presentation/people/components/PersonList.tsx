import React, {useState} from "react";
import {FlatList, RefreshControl, StyleSheet} from "react-native";
import {PersonCard} from "./PersonCard";
import {Person} from "../../../core/person/interfaces/person.interface";
import {useQueryClient} from "@tanstack/react-query";

interface PersonListProps {
    persons: Person[];
    onEdit: (person: Person) => void;
    onDelete: (id: number) => void;
}

export const PersonList = ({persons, onEdit, onDelete}: PersonListProps) => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const queryClient = useQueryClient();


    const pullToRefresh = async () => {
        setIsRefreshing(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        queryClient.invalidateQueries({queryKey: ['persons']}).then(r => {
            console.info('Invalidated:', r);
        });

        setIsRefreshing(false);
    }

    return (
        <FlatList
            data={persons}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            refreshing={isRefreshing}
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={pullToRefresh}
                />
            }
            renderItem={({item}) =>
                <PersonCard
                    person={item}
                    onEdit={onEdit}
                    onDelete={onDelete}/>
            }
            contentContainerStyle={styles.list}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        paddingBottom: 60,
    },
});
