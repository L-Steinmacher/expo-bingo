import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { Board } from "./components/board";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import { generateBoard } from "./utils/misc";
import { useAppDispatch } from "./hooks/redux";
import { setTiles } from "./feature/tile/tile-slice";

export default function App() {
    generateBoard();

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <ScrollView>
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
                        }}
                    />
                    <Board />
                </ScrollView>
            </View>
        </Provider>
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
