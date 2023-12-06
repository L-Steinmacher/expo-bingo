import { Link, Stack, router, useLocalSearchParams } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";

import Form from "./components/form";
import { useAppSelector } from "./hooks/redux";
import { useEffect } from "react";

export default function Modal() {
    let { slug } = useLocalSearchParams();
    const userData = useAppSelector((state) => state.user);

    // This is Hack I know... but it works.
    // if tile is of type string[] then take the first element which should be the slug
    if (typeof slug === "object") {
        slug = slug[0];
    }

    const tileData = useAppSelector((state) =>
        state.tile.Tiles.find((t) => t.slug === slug)
    );
    // console.log(slug, tileData?.content);
    const userLoggedIn = userData.username !== "";

    if (slug === undefined) {
        router.push("../");
    }
    if (!userLoggedIn) {
        router.push(`/login?redirect=${slug}`);
    }

    const isPresented = router.canGoBack();
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    title: tileData?.content,
                }}
            />

            {!isPresented && <Link href="../">Dismiss</Link>}
            {/* <Text>{tileData?.content}</Text> */}

            <Form slug={slug || ""} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        padding: 20,
        flex: 1,
    },
});
