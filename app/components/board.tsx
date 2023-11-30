import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { JsonItem, generateBoard, slugify } from "../utils/misc";
import { useAppDispatch } from "../hooks/redux";
import { setTiles } from "../feature/tile/tile-slice";

export function Board(props: { tileSets: JsonItem[][] }) {
    const { tileSets } = props;

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
                    style={{ paddingBottom: 20 }}
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
                    {tileSet.map((tile, index) => {
                        const slug = slugify(tile.content);
                        return (
                            <Link key={`tile_${index}`} href={`/${slug}`}>
                                {tile.content}
                            </Link>
                        );
                    })}
                </View>
            ))}
        </View>
    );
}

function Row(props: { rowIndex: number; tileSet: JsonItem[] }) {
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

function Tile(props: { tile: JsonItem }) {
    const { tile } = props;

    return (
        <View style={styles.tile}>
            <Link href={`/${tile.slug}`} asChild>
                <Pressable>
                    <Text style={styles.tileText} numberOfLines={2}>
                        {tile.content}
                    </Text>
                </Pressable>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
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
    tileText: {
        fontSize: 12,
        textAlign: "center",
        padding: 2,
    },
});
