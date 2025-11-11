import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import Header from "@/components/header";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors, navBarHeight } from "@/constants/theme";
import { useTheme } from "@/hooks/use-color-scheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
    const { colorTheme, theme } = useTheme();
    const { top, bottom } = useSafeAreaInsets();

    return (
        <Tabs
            initialRouteName="index"
            screenOptions={{
                headerShown: true,
                header: Header,
                tabBarActiveTintColor: Colors[colorTheme].tabIconSelected,
                tabBarButton: HapticTab,
                tabBarStyle: {
                    backgroundColor: theme.bgSecondaryColor,
                    borderTopRightRadius: 12,
                    borderTopLeftRadius: 12,
                    position: "absolute",
                },
                sceneStyle: {
                    backgroundColor: theme.bgPrimaryColor,
                    paddingBottom: bottom + navBarHeight,
                    paddingTop: top,
                },
            }}
        >
            <Tabs.Screen
                name="account"
                options={{
                    title: "Account",
                    tabBarIcon: ({ focused, color }) => <IconSymbol name="account" color={color} weight={focused ? "medium" : "thin"} />,
                }}
            />
            <Tabs.Screen
                name="orders"
                options={{
                    title: "Orders",
                    tabBarIcon: ({ focused, color }) => <IconSymbol name="file.clock" color={color} weight={focused ? "medium" : "thin"} />,
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: "Pools",
                    tabBarIcon: ({ focused, color }) => <IconSymbol name="pickaxe" color={color} weight={focused ? "medium" : "thin"} />,
                }}
            />
            <Tabs.Screen
                name="assets"
                options={{
                    title: "Assets",
                    tabBarIcon: ({ focused, color }) => <IconSymbol name="wallet" color={color} weight={focused ? "medium" : "thin"} />,
                }}
            />
        </Tabs>
    );
}
