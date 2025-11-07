import React from "react";
import { View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SafeView({
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
        <View
            style={{
                flex: 1,
                paddingTop: saveTop ? top : undefined,
                paddingBottom: saveBottom ? bottom : undefined,
                paddingLeft: saveLeft ? left : undefined,
                paddingRight: saveRight ? right : undefined,
                ...style,
            }}
        >
            {children}
        </View>
    );
}
