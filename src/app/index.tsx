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
    const tileSets = generateBoard();

    return (
        <View style={styles.board}>
            {tileSets.map((tileSet, index) => (
                <Row key={`row_${index}`} rowIndex={index} tileSet={tileSet} />
            ))}
        </View>
    );
}

function Row(props: { rowIndex: number; tileSet: string[] }) {
    const { rowIndex, tileSet } = props;
    return (
        <View
            style={{
                flexDirection: "row",
                flex: 1,
                backgroundColor: "red",
            }}
        >
            {tileSet.map((tile, index) => (
                <Tile key={`tile_${index}`} tile={tile} />
            ))}
        </View>
    );
}

function generateBoard() {
    const data = require("./data/tiles.json");
    const indexArr: number[] = [];
    while (indexArr.length < 24) {
        const random = Math.floor(Math.random() * data.length);
        if (!indexArr.includes(random)) {
            indexArr.push(random);
        }
    }
    const arrLength = [5, 5, 4, 5, 5];
    const tileSets: string[][] = [];
    arrLength.forEach((length, index) => {
        const subArray = indexArr.slice(0, length).map((index) => data[index]);
        if (index === 2) {
            subArray.splice(2, 0, "Loves JS");
        }
        tileSets.push(subArray);
        indexArr.splice(0, length);
    });
    return tileSets;
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
