import { Link, Stack, router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Form from "./components/form";
import { JsonItem, getTileDataBySlug } from "./utils/misc";

export default function Modal() {
    let { tile } = useLocalSearchParams();

    // This is Hack I know... but it works.
    // if tile is of type string[] then take the first element
    if (Array.isArray(tile)) {
        tile = tile[0];
    }
    const tileData = getTileDataBySlug(tile);

    const isPresented = router.canGoBack();
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    title: tileData?.content,
                }}
            />
            <StatusBar style="light" />
            {!isPresented && <Link href="../">Dismiss</Link>}
            <Text>{tileData?.content}</Text>
            <Form tileTitle={tileData?.content} />
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
