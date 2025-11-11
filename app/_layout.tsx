import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import "react-native-reanimated";

import DeviceStatusBar from "@/components/device-status-bar";
import { ThemeProvider } from "@/contexts/theme-context";
import { useTheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
    anchor: "(tabs)",
};

function RootNavigator() {
    const { colorTheme } = useTheme();

    return (
        <NavigationThemeProvider value={colorTheme === "dark" ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="modal" options={{ presentation: "modal", title: "Modal" }} />
            </Stack>
            <DeviceStatusBar />
        </NavigationThemeProvider>
    );
}

export default function RootLayout() {
    return (
        <ThemeProvider>
            <RootNavigator />
        </ThemeProvider>
    );
}
