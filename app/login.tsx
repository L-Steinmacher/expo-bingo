import { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { setUser } from "./feature/user/user-slice";
import { router, useLocalSearchParams } from "expo-router";

export default function Login() {
    const { redirect } = useLocalSearchParams();
    const userData = useAppSelector((state) => state.user);
    const [name, setName] = useState(userData.name || "");
    const [username, setUsername] = useState(userData.username || "");
    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        dispatch(setUser({ name, username }));
        console.log(`!!!!!!!!!!!!!!!!!!!!1  LoginRedirect: ${redirect}`);
        router.push(redirect ? `${redirect}` : "../");
    };

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.header}>Input your name and Username</Text>
                <Text style={styles.label}>Username</Text>
                <TextInput
                    placeholder="Pick a username"
                    value={username}
                    onChangeText={setUsername}
                    maxLength={30}
                    style={styles.input}
                />
                <Text style={styles.label}>Name</Text>
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
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
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
