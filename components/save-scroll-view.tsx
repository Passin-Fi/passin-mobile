import React from "react";
import { ScrollView, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SafeScrollView({
    children,
    saveBottom = false,
    saveLeft = false,
    saveRight = false,
    saveTop = true,
    style,
}: {
    children: React.ReactNode;
    saveTop?: boolean;
    saveBottom?: boolean;
    saveLeft?: boolean;
    saveRight?: boolean;
    style?: ViewStyle;
}) {
    const { top, bottom, left, right } = useSafeAreaInsets();

    return (
        <ScrollView
            style={{
                paddingTop: saveTop ? top : undefined,
                paddingLeft: saveLeft ? left : undefined,
                paddingRight: saveRight ? right : undefined,
                ...style,
            }}
        >
            {children}
        </ScrollView>
    );
}
