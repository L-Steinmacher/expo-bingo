import { Link, Stack, router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Form from "./components/form";

export default function Modal(props: { content: string }) {
    let { tile } = useLocalSearchParams();

    // This is Hack I know... but it works.
    // if tile is of type string[] then take the first element
    if (Array.isArray(tile)) {
        tile = tile[0];
    }

    const isPresented = router.canGoBack();
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    title: tile,
                }}
            />
            <StatusBar style="light" />
            {!isPresented && <Link href="../">Dismiss</Link>}
            <Text>{tile}</Text>
            <Form tileTitle={tile} />
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
