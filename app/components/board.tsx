import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../hooks/redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import Row from "./row";
import { useEffect } from "react";

export function Board() {
    const tiles = useAppSelector((state) => state.tile);
    const userData = useAppSelector((state) => state.user);

    const tileSets = [];

    for (let i = 0; i < 5; i++) {
        const subArray = tiles.slice(i * 5, i * 5 + 5);
        tileSets.push(subArray);
    }

    return (
        <View>
            <View style={styles.board}>
                {tileSets.map((tileSet, index) => (
                    <Row
                        key={`row_${index}`}
                        rowIndex={index}
                        tileSet={tileSet}
                    />
                ))}
            </View>
            {tileSets.map((tileSet, index) => (
                <View
                    key={`${Date.now()}_${index}`}
                    style={{ paddingBottom: 20, marginHorizontal: 10 }}
                >
                    <Text
                        key={`row_${index}`}
                        style={{
                            textDecorationLine: "underline",
                            fontSize: 20,
                            fontWeight: "bold",
                        }}
                    >
                        Row {index + 1}
                    </Text>
                    <View style={{ flex: 1 }}>
                        {tileSet.map((tile, index) => (
                            <View
                                style={{
                                    flexDirection: "row",
                                    height: 30,
                                    position: "relative",
                                    alignItems: "center",
                                }}
                                key={`tile_${index}_v`}
                            >
                                {tile.active && (
                                    <Ionicons
                                        name="md-checkmark-circle"
                                        color="green"
                                    />
                                )}
                                <Link
                                    key={`tile_${index}`}
                                    href={
                                        userData.username
                                            ? `/${tile.slug}`
                                            : `/login?redirect=${tile.slug}`
                                    }
                                    style={styles.link}
                                >
                                    {tile.content}
                                    {tile?.coordinates.row} {", "}
                                    {tile?.coordinates.column}{" "}
                                </Link>
                            </View>
                        ))}
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    link: {
        fontSize: 15,
        position: "absolute",
        left: 20,
        width: "100%",
    },

    board: {
        aspectRatio: 1,
        width: "100%",
        padding: 10,
    },
});
