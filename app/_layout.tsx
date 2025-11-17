import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import "react-native-reanimated";

import DeviceStatusBar from "@/components/device-status-bar";
import Header from "@/components/header";
import { ThemeProvider } from "@/contexts/theme-context";
import { useTheme } from "@/hooks/use-color-scheme";
import Toast from "react-native-toast-message";

export const unstable_settings = {
    anchor: "(tabs)",
};

function RootNavigator() {
    const { colorTheme, theme } = useTheme();

    return (
        <NavigationThemeProvider value={colorTheme === "dark" ? DarkTheme : DefaultTheme}>
            <Stack screenOptions={{ contentStyle: { backgroundColor: theme.bgPrimaryColor } }}>
                <Stack.Screen name="(tabs)" options={{ headerShown: true, header: Header }} />
                <Stack.Screen name="modal" options={{ presentation: "modal", title: "Modal" }} />
            </Stack>
            <DeviceStatusBar />
            <Toast />
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
