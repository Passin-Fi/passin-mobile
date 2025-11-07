import { ScrollView as ScrollReactNative, ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";

export type ThemedViewProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
};

export function ScrollView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
    const { colors } = useThemeColor();

    return <ScrollReactNative style={[{ backgroundColor: colors.background }, style]} {...otherProps} />;
}
