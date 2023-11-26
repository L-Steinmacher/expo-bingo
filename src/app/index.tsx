import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <Text>Open up index.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
            <Stack.Screen
                options={{
                    title: "Bingo",
                    headerRight: () => (
                        <Image
                            source={require("../../assets/logo.png")}
                            style={styles.logo}
                        />
                    ),
                }}
            />
            <Text>Count: {count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
});
