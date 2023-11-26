import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <Text>Open up index.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
            <Stack.Screen
                options={{
                    title: "Home",
                    headerRight: () => (
                        <Button
                            onPress={() => setCount((c) => c + 1)}
                            title="Update count"
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
});