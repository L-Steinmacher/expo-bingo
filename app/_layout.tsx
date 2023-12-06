import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "./utils/store";

export default function Layout() {
    return (
        <Provider store={store}>
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
                    name="[slug]"
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
        </Provider>
    );
}
