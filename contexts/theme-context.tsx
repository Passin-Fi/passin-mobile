import { darkTheme } from "@/constants/theme.dark";
import { lightTheme } from "@/constants/theme.light";
import { ThemeValue } from "@/constants/type";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useColorScheme as useSystemColorScheme } from "react-native";

export type ThemeMode = "light" | "dark" | "system";
export type ColorTheme = "light" | "dark";

interface ThemeContextType {
    themeMode: ThemeMode;
    colorTheme: ColorTheme;
    theme: ThemeValue;
    setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "@app_theme_mode";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const systemColorScheme = useSystemColorScheme();
    const [themeMode, setThemeModeState] = useState<ThemeMode>("dark");
    const [isLoaded, setIsLoaded] = useState(false);

    // Load theme preference from AsyncStorage
    useEffect(() => {
        const loadTheme = async () => {
            try {
                const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
                if (savedTheme === "light" || savedTheme === "dark" || savedTheme === "system") {
                    setThemeModeState(savedTheme);
                }
            } catch (error) {
                console.error("Failed to load theme:", error);
            } finally {
                setIsLoaded(true);
            }
        };
        loadTheme();
    }, []);

    // Save theme preference to AsyncStorage
    const setThemeMode = async (mode: ThemeMode) => {
        try {
            await AsyncStorage.setItem(THEME_STORAGE_KEY, mode);
            setThemeModeState(mode);
        } catch (error) {
            console.error("Failed to save theme:", error);
        }
    };

    // Determine actual color theme based on mode
    const colorTheme: ColorTheme = themeMode === "system" ? systemColorScheme ?? "dark" : themeMode;

    // Get theme object based on color theme
    const theme = useMemo(() => (colorTheme === "dark" ? darkTheme : lightTheme), [colorTheme]);

    // Don't render until theme is loaded
    if (!isLoaded) {
        return null;
    }

    return <ThemeContext.Provider value={{ themeMode, colorTheme, theme, setThemeMode }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
