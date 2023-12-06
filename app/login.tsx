import { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { useAppDispatch } from "./hooks/redux";
import { setUser } from "./feature/user/user-slice";
import { router } from "expo-router";

export default function Login(props: { slug: string }) {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        dispatch(setUser({ name, username }));
        router.push("../");
    };

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.label}>Input your name and Username</Text>
                <TextInput
                    placeholder="Pick a username"
                    value={username}
                    onChangeText={setUsername}
                    maxLength={30}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Wha'cher name?"
                    value={name}
                    onChangeText={setName}
                    maxLength={30}
                    style={styles.input}
                />
                <Button
                    title="Submit"
                    onPress={handleSubmit}
                    disabled={name === "" || username === ""}
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
        padding: 10,
        height: 40,
        marginBottom: 20,
        borderWidth: 1,
    },
    form: {
        marginHorizontal: 20,
    },
    label: {
        fontWeight: "bold",
        marginBottom: 10,
    },
});
