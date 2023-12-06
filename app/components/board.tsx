import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { JsonItem } from "../utils/misc";
import { useAppSelector } from "../hooks/redux";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Board() {
    const tiles = useAppSelector((state) => state.tile);

    const tileSets: JsonItem[][] = [];

    for (let i = 0; i < 5; i++) {
        const subArray = tiles.slice(i * 5, i * 5 + 5);
        tileSets.push(subArray);
    }
    // console.log(JSON.stringify(tileSets, null, 2));

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
                                    href={`/${tile.slug}`}
                                    style={{
                                        fontSize: 15,
                                        position: "absolute",
                                        left: 20,
                                        width: "100%",
                                    }}
                                >
                                    {tile.content}
                                </Link>
                            </View>
                        ))}
                    </View>
                </View>
            ))}
        </View>
    );
}

function Row(props: { rowIndex: number; tileSet: JsonItem[] }) {
    const { tileSet } = props;
    return (
        <View
            style={{
                flexDirection: "row",
                flex: 1,
                backgroundColor: "red",
            }}
        >
            {tileSet.map((tile, index) => (
                <Tile key={`tile_${index}`} slug={tile.slug} />
            ))}
        </View>
    );
}

function Tile(props: { slug: string }) {
    const tile = useAppSelector((state) =>
        state.tile.find((t) => t.slug === props.slug)
    );

    return (
        <View
            style={[
                styles.tile,
                { backgroundColor: tile?.active ? "#fdd329" : "#bcbcbc" },
            ]}
        >
            <Link href={`/${tile?.slug}`} asChild>
                <Pressable>
                    <Text style={styles.tileText} numberOfLines={2}>
                        {tile?.content}
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
