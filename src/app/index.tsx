import { Stack, useRouter } from "expo-router";
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

function Tile(props: { tile: string }) {
    const { tile } = props;
    const [selected, setSelected] = useState(false);
    const router = useRouter();

    return (
        <View style={styles.tile}>
            <Pressable
                onPress={() => router.push(`/${tile}`)}
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
                {({ pressed }) => <Text>{pressed ? "Pressed!" : tile}</Text>}
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
                    <Row key={`row_${index}`} rowIndex={index} />
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
                        <Tile tile={"Loves JS"} key={`tile_${index}`} />
                    ) : (
                        <Tile tile="tile" key={`tile_${index}`} />
                    )
                )}
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
    tile: {
        backgroundColor: "#d7d7d7",
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
