import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setActive } from "../feature/tile/tile-slice";
import { checkForWin, setCoordinates } from "../feature/rules/rule-slice";

export default function Form(props: { slug: string }) {
    const { slug } = props;
    const [name, setName] = useState("");
    const router = useRouter();
    const dispatch = useAppDispatch();
    const tile = useAppSelector((state) =>
        state.tile.find((tile) => tile.slug === slug)
    );

    console.log(
        `${tile?.content} : ${tile?.coordinates.column} : row ${tile?.coordinates.row}`
    );
    const handleSubmit = () => {
        let coordinates = {
            column: tile?.coordinates.column,
            row: tile?.coordinates.row,
        };
        dispatch(setActive({ slug }));
        dispatch(setCoordinates(coordinates));
        dispatch(checkForWin());
        router.push("../");
    };

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    placeholder="Who you talking to?"
                    maxLength={30}
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />
                <Button
                    title="Submit"
                    disabled={name === ""}
                    onPress={handleSubmit}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
    },
    input: {
        height: 40,
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
    },
    form: {
        marginBottom: 20,
        borderBottomColor: "black",
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingBottom: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
});
