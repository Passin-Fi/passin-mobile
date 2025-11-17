import Button from "@/components/ui/button";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Header() {
    const { top } = useSafeAreaInsets();

    return (
        <View style={{ ...styles.container, paddingTop: top }}>
            <Image source={require("../assets/images/logo-icon-only.png")} style={{ width: 40, height: 40 }} contentFit="contain" />
            <Button title="Connect Wallet" size="medium" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 4,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
