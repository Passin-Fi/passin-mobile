import { useTheme } from "@/hooks/use-color-scheme";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { IconSymbol } from "./ui/icon-symbol";

export default function ThemeToggle() {
    const { themeMode, theme, setThemeMode } = useTheme();

    const modes = [
        { value: "light" as const, label: "Light", icon: "sun.max" as const },
        { value: "dark" as const, label: "Dark", icon: "moon" as const },
        { value: "system" as const, label: "System", icon: "gear" as const },
    ];

    return (
        <View style={[styles.container, { backgroundColor: theme.bgSecondaryColor, borderRadius: theme.radius }]}>
            {modes.map((mode) => (
                <Pressable
                    key={mode.value}
                    style={[
                        styles.button,
                        {
                            backgroundColor: themeMode === mode.value ? theme.primaryColor : "transparent",
                            borderRadius: theme.radius - 2,
                        },
                    ]}
                    onPress={() => setThemeMode(mode.value)}
                >
                    <IconSymbol name={mode.icon} size={20} color={themeMode === mode.value ? theme.bgPrimaryColor : theme.textSecondaryColor} />
                    <Text
                        style={[
                            styles.text,
                            {
                                color: themeMode === mode.value ? theme.bgPrimaryColor : theme.textSecondaryColor,
                            },
                        ]}
                    >
                        {mode.label}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 4,
        gap: 4,
    },
    button: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 8,
        paddingHorizontal: 12,
        gap: 6,
    },
    text: {
        fontSize: 14,
        fontWeight: "600",
    },
});
