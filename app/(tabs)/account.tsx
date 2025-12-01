import { ScrollView } from "@/components/scroll-view";
import ThemeToggle from "@/components/theme-toggle";
import { ThemedText } from "@/components/themed-text";
import Button from "@/components/ui/button";
import { Fonts } from "@/constants/theme";
import { useLazorWallet } from "@lazorkit/wallet-mobile-adapter";
import { Text, View } from "react-native";

export default function Account() {
    return (
        <ScrollView style={{ paddingHorizontal: 16 }}>
            <ThemedText
                type="title"
                style={{
                    fontFamily: Fonts.rounded,
                }}
            >
                Account
            </ThemedText>
            <View style={{ marginTop: 24 }}>
                <ThemeToggle />
            </View>
        </ScrollView>
    );
}

function Test() {
    return (
        // <LazorkitProvider>
        <ButtonConnectWallet />
        // </LazorkitProvider>
    );
}

function ButtonConnectWallet() {
    const { connect, isConnecting, error } = useLazorWallet();
    const handleConnect = async () => {
        try {
            await connect({
                redirectUrl: "passin-mobile://",
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
