import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { JsonItem, slugify } from "../utils/misc";
import { useAppSelector } from "../hooks/redux";
import Ionicons from "@expo/vector-icons/Ionicons";

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
                    {tileSet.map((tile, index) => {
                        const slug = slugify(tile.content);
                        return (
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}
                                key={`tile_${index}_v`}
                            >
                                <Link key={`tile_${index}`} href={`/${slug}`}>
                                    {tile.content}
                                </Link>
                                {tile.active && (
                                    <Ionicons
                                        name="md-checkmark-circle"
                                        color="green"
                                    />
                                )}
                            </View>
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