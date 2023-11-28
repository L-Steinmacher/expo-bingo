import { Link } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Form(props: {
    tileTitle: string | string[] | undefined;
}) {
    const { tileTitle } = props;
    const [name, setName] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text>Form: {tileTitle}</Text>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    placeholder="Who you talking to?"
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />
                <Button title="Submit" disabled={name === ""} />
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
