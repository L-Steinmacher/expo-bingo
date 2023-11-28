import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { Board } from "./components/board";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <ScrollView>
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
                <Board />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
});
