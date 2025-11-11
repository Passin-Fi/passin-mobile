import { ThemedText } from "@/components/themed-text";
import ButtonIcon from "@/components/ui/button-icon";
import { Tabs, useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { View } from "react-native";

export default function Layout() {
    const router = useRouter();
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: { display: "none" },
                animation: "shift",
            }}
        >
            <Tabs.Screen name="index" options={{}} />
            <Tabs.Screen
                name="[idPool]"
                options={{
                    headerShown: true,
                    header(props) {
                        const params = props.route.params as { idPool?: string };
                        return (
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 8 }}>
                                <ButtonIcon icon={ArrowLeft} size="medium" variant="text" style={{ borderRadius: "50%" }} onPress={() => router.back()} />
                                <ThemedText style={{ fontWeight: "bold" }}>{params.idPool}</ThemedText>
                                <View style={{ width: 40 }} />
                            </View>
                        );
                    },
                }}
            />
        </Tabs>
    );
}
