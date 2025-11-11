import { ScrollView as ScrollReactNative, ViewProps } from "react-native";

import { useTheme } from "@/contexts/theme-context";

export type ThemedViewProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
};

export function ScrollView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
    const { theme } = useTheme();

    return <ScrollReactNative style={[{ backgroundColor: theme.bgPrimaryColor }, style]} {...otherProps} />;
}
