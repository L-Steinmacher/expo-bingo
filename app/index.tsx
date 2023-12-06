import { Link, Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Board } from "./components/board";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import { generateBoard } from "./utils/misc";
import { useAppSelector } from "./hooks/redux";
import { useEffect } from "react";

export default function App() {
    generateBoard();
    const userData = useAppSelector((state) => state.user);
    const bingo = useAppSelector((state) => state.rules.bingo);
    useEffect(() => {
        if (bingo) {
            Alert.alert("Bingo!", "You're entered into the Raffle!");
        }
    }, [bingo]);

    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Stack.Screen
                    options={{
                        title: "Bingo",
                        headerRight: () => (
                            <Image
                                source={require("../assets/logo.png")}
                                style={styles.logo}
                            />
                        ),
                        headerLeft: () => {
                            {
                                return userData.username ? (
                                    <Link
                                        href={"/login"}
                                        style={{
                                            color: "white",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {userData.username}
                                    </Link>
                                ) : (
                                    <Ionicons
                                        name="log-in-outline"
                                        size={24}
                                        color="white"
                                        onPress={() => {
                                            router.push("/login");
                                        }}
                                    />
                                );
                            }
                        },
                    }}
                />
                <Board />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
});
