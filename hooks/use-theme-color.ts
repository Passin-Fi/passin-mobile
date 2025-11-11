/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from "@/constants/theme";
import { useTheme } from "@/hooks/use-color-scheme";

export function useThemeColor() {
    const { colorTheme, theme } = useTheme();

    return {
        colors: Colors[colorTheme],
        colorsVariables: theme,
    };
}
