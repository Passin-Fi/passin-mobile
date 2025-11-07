import Button from "@/components/ui/button";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

export default function Header({}: BottomTabHeaderProps) {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/images/logo-icon-only.png")} style={{ width: 40, height: 40 }} contentFit="contain" />
            <Button title="Connect Wallet" size="medium" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 4,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
