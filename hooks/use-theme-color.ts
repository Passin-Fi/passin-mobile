/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from "@/constants/theme";
import { darkTheme } from "@/constants/theme.dark";
import { lightTheme } from "@/constants/theme.light";
import { useColorScheme } from "@/hooks/use-color-scheme";

export function useThemeColor() {
    const theme = useColorScheme();

    return {
        colors: Colors[theme],
        colorsVariables: theme === "light" ? lightTheme : darkTheme,
    };
}
