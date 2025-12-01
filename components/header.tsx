import Button from "@/components/ui/button";
import { useLazorWallet } from "@lazorkit/wallet-mobile-adapter";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Header() {
    const { top } = useSafeAreaInsets();

    return (
        <View style={{ ...styles.container, paddingTop: top }}>
            <Image source={require("../assets/images/logo-icon-only.png")} style={{ width: 40, height: 40 }} contentFit="contain" />
            <ButtonConnectWallet />
        </View>
    );
}

function ButtonConnectWallet() {
    const { connect, isConnecting, error } = useLazorWallet();
    const handleConnect = async () => {
        try {
            await connect({
                redirectUrl: "passinmobile://sign-callback",
                onSuccess: (wallet) => {
                    console.log("Connected:", wallet);
                },
                onFail: (error) => {
                    console.error("Connection failed:", error);
                },
            });
        } catch (error) {
            console.error("Connect error:", error);
        }
    };
    return (
        <>
            <Button title={isConnecting ? "Connecting..." : "Connect Wallet"} size="medium" onPress={handleConnect} />
            {error && <Text>Error: {error.message}</Text>}
        </>
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
