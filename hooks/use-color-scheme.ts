//import { useColorScheme as useColorSchemeLib } from "react-native";
export type ColorTheme = "light" | "dark";
export function useColorScheme(): ColorTheme {
    // const theme = useColorSchemeLib() ?? "dark";
    const theme = "dark";
    return theme;
}
