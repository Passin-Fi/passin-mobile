import { useTheme as useThemeContext } from "@/contexts/theme-context";

export type ColorTheme = "light" | "dark";

/**
 * @deprecated Use useTheme instead to get both colorTheme and theme object
 */
export function useColorScheme(): ColorTheme {
    const { colorTheme } = useThemeContext();
    return colorTheme;
}

/**
 * Hook to access theme context including mode, colorTheme, theme object and setThemeMode
 */
export { useThemeContext as useTheme };
