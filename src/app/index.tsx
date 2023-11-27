import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
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
        </View>
    );
}

function Tile(props: { title: string }) {
    const { title } = props;
    const [selected, setSelected] = useState(false);
    const [timesPressed, setTimesPressed] = useState(0);

    return (
        <View style={styles.tile}>
            <Pressable
            // onPress={() => {
            //     setTimesPressed((current) => current + 1);
            // }}
            // style={({ pressed }) => [
            //     {
            //         backgroundColor: pressed
            //             ? "rgb(210, 230, 255)"
            //             : "white",
            //     },
            //     styles.wrapperCustom,
            // ]}
            >
                {({ pressed }) => <Text>{pressed ? "Pressed!" : title}</Text>}
            </Pressable>
        </View>
    );
}

function Board() {
    return (
        <View style={styles.board}>
            <Text>Board</Text>
            {Array(5)
                .fill(null)
                .map((_, index) => (
                    <Row rowIndex={index} />
                ))}
        </View>
    );
}

function Row(props: { rowIndex: number }) {
    const { rowIndex } = props;
    return (
        <View
            style={{
                flexDirection: "row",
                flex: 1,
                backgroundColor: "red",
            }}
        >
            {Array(5)
                .fill(null)
                .map((_, index) =>
                    rowIndex === 2 && index === 2 ? (
                        <Tile title={"Loves JS"} />
                    ) : (
                        <Tile title="tile" />
                    )
                )}
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
    tile: {
        backgroundColor: "grey",
        aspectRatio: 1,
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.25,
        borderColor: "black",
    },
    board: {
        aspectRatio: 1,
        width: "100%",
        padding: 10,
    },
});
