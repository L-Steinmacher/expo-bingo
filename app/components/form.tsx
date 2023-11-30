import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useAppDispatch } from "../hooks/redux";
import { setActive } from "../feature/tile/tile-slice";

export default function Form(props: { tileId: string | string[] | undefined }) {
    const { tileId } = props;
    const [name, setName] = useState("");
    const router = useRouter();
    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        dispatch(setActive({ id: tileId }));
        router.push(`../`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    placeholder="Who you talking to?"
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
