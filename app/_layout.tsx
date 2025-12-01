import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import "react-native-get-random-values";
import "react-native-reanimated";

import DeviceStatusBar from "@/components/device-status-bar";
import Header from "@/components/header";
import LazorkitProvider from "@/components/providers/LazorkitProvider";
import { ThemeProvider } from "@/contexts/theme-context";
import { useTheme } from "@/hooks/use-color-scheme";
import { polyfillWebCrypto } from "expo-standard-web-crypto";
import Toast from "react-native-toast-message";

polyfillWebCrypto();

export const unstable_settings = {
    anchor: "(tabs)",
};

function RootNavigator() {
    const { colorTheme, theme } = useTheme();

    return (
        <NavigationThemeProvider value={colorTheme === "dark" ? DarkTheme : DefaultTheme}>
            <Stack screenOptions={{ contentStyle: { backgroundColor: theme.bgPrimaryColor }, headerShown: true, header: Header }}>
                <Stack.Screen name="(tabs)" options={{}} />
                <Stack.Screen name="modal" options={{ presentation: "modal", title: "Modal" }} />
            </Stack>
            <DeviceStatusBar />
            <Toast />
        </NavigationThemeProvider>
    );
}

export default function RootLayout() {
    return (
        <LazorkitProvider>
            <ThemeProvider>
                <RootNavigator />
            </ThemeProvider>
        </LazorkitProvider>
    );
}
