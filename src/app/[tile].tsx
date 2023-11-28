import { Link, Stack, router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Form from "./components/form";

export default function Modal() {
    const { tile } = useLocalSearchParams();

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
