import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#8CAA1D",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Stack.Screen
                name="[tile]"
                options={{
                    presentation: "modal",
                }}
            />
            <Stack.Screen
                name="index"
                options={{
                    title: "Bingo",
                }}
            />
        </Stack>
    );
}
