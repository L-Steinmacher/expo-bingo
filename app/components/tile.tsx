import { Link } from "expo-router";
import { View, Pressable, StyleSheet, Text } from "react-native";
import { useAppSelector } from "../hooks/redux";

export default function Tile(props: { slug: string }) {
    const userData = useAppSelector((state) => state.user);
    // console.log(slug, tileData?.content);
    const userLoggedIn = userData.username !== "";

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
            <Link
                href={
                    userLoggedIn
                        ? `/${tile?.slug}`
                        : `/login?redirect=${tile?.slug}`
                }
                asChild
            >
                <Pressable>
                    <Text style={styles.tileText} numberOfLines={2}>
                        {tile?.content} {tile?.coordinates.column}{" "}
                        {tile?.coordinates.row}
                    </Text>
                </Pressable>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    tile: {
        aspectRatio: 1,
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.25,
        borderColor: "black",
    },
    tileText: {
        fontSize: 12,
        textAlign: "center",
        padding: 2,
    },
});
