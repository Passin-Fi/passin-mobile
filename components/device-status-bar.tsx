import { useColorScheme } from "@/hooks/use-color-scheme";
import { StatusBarStyle } from "expo-status-bar";
import React from "react";
import { Appearance, ColorSchemeName, StatusBar } from "react-native";

export type DeviceStatusBarProps = {
    style?: StatusBarStyle;
    hideTransitionAnimation?: "fade" | "slide" | "none";
    translucent?: boolean;
    backgroundColor?: string;
} & React.ComponentProps<typeof StatusBar>;

export default function DeviceStatusBar({ style, hideTransitionAnimation, translucent = true, backgroundColor: backgroundColorProp, ...props }: DeviceStatusBarProps) {
    const colorScheme = useColorScheme();
    const barStyle = React.useMemo(() => styleToBarStyle(style, colorScheme), [style, colorScheme]);

    // If translucent and no backgroundColor is provided, then use transparent
    // background
    let backgroundColor = backgroundColorProp;
    if (translucent && !backgroundColor) {
        backgroundColor = "transparent";
    }

    return (
        <StatusBar
            {...props}
            translucent={translucent}
            barStyle={barStyle}
            backgroundColor={backgroundColor}
            showHideTransition={hideTransitionAnimation === "none" ? undefined : hideTransitionAnimation}
        />
    );
}
function styleToBarStyle(style: StatusBarStyle = "auto", colorScheme: ColorSchemeName = Appearance?.getColorScheme() ?? "light"): "light-content" | "dark-content" {
    if (!colorScheme) {
        colorScheme = "light";
    }

    let resolvedStyle = style;
    if (style === "auto") {
        resolvedStyle = colorScheme === "light" ? "dark" : "light";
    } else if (style === "inverted") {
        resolvedStyle = colorScheme === "light" ? "light" : "dark";
    }

    return resolvedStyle === "light" ? "light-content" : "dark-content";
}
