import { useState } from "react";
import { RefreshControl, ScrollView as ScrollReactNative, ViewProps } from "react-native";

import { useTheme } from "@/contexts/theme-context";

export type ThemedViewProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
    onRefresh?: () => void | Promise<void>;
};

export function ScrollView({ style, lightColor, darkColor, onRefresh, ...otherProps }: ThemedViewProps) {
    const { theme } = useTheme();
    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = async () => {
        if (!onRefresh) return;

        setRefreshing(true);
        try {
            await onRefresh();
        } finally {
            setRefreshing(false);
        }
    };

    return (
        <ScrollReactNative
            style={[{ backgroundColor: theme.bgPrimaryColor }, style]}
            refreshControl={onRefresh ? <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor={theme.primaryColor} colors={[theme.primaryColor]} /> : undefined}
            {...otherProps}
        />
    );
}
