import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { ScrollView } from "@/components/scroll-view";
import Button from "@/components/ui/button";
import { useTheme } from "@/hooks/use-color-scheme";
import Toast from "react-native-toast-message";

export default function PoolDetailPage() {
    const { idPool } = useLocalSearchParams<{ idPool: string }>();
    const router = useRouter();
    const { theme } = useTheme();
    const showToast = () => {
        Toast.show({
            type: "error",
            text1: "Hello",
            text2: "This is some something 👋",
        });
    };
    return (
        <ScrollView style={{ position: "relative", paddingHorizontal: 16, backgroundColor: theme.bgPrimaryColor }}>
            <View style={styles.imageContainer}>
                <Image source={"https://crypto-images-4545f.web.app/images/token/USDC.png"} style={{ width: 80, height: 80 }} />
            </View>
            <View style={[styles.infoCard, { backgroundColor: theme.bgSecondaryColor }]}>
                <Text style={[styles.infoLabel, { color: theme.textSecondaryColor }]}>Total Value Locked</Text>
                <Text style={[styles.infoValue, { color: theme.textPrimaryColor }]}>$1,234,567</Text>
            </View>
            <View style={[styles.infoCard, { backgroundColor: theme.bgSecondaryColor }]}>
                <Text style={[styles.infoLabel, { color: theme.textSecondaryColor }]}>APY</Text>
                <Text style={[styles.infoValue, { color: theme.primaryColor }]}>12.5%</Text>
            </View>
            <View style={{ marginTop: 24 }}>
                <Button title="Stake" variant="primary" size="large" style={{ width: "100%" }} onPress={showToast} />
                <View style={{ height: 12 }} />
                <Button title="Unstake" variant="secondary" size="large" style={{ width: "100%" }} />
            </View>
            <View style={{ marginTop: 24 }}>
                <Text style={[styles.infoLabel, { color: theme.textSecondaryColor, marginBottom: 8 }]}>Pool Description</Text>
                <Text style={[{ color: theme.textPrimaryColor, fontSize: 16, lineHeight: 24 }]}>
                    This is a sample description for the pool. Here you can provide details about the assets in the pool, the benefits of staking, and any other relevant information that users might
                    find useful.
                </Text>
            </View>
            <View style={{ marginTop: 24 }}>
                <Text style={[styles.infoLabel, { color: theme.textSecondaryColor, marginBottom: 8 }]}>Pool Description</Text>
                <Text style={[{ color: theme.textPrimaryColor, fontSize: 16, lineHeight: 24 }]}>
                    This is a sample description for the pool. Here you can provide details about the assets in the pool, the benefits of staking, and any other relevant information that users might
                    find useful.
                </Text>
            </View>
            <View style={{ marginTop: 24 }}>
                <Text style={[styles.infoLabel, { color: theme.textSecondaryColor, marginBottom: 8 }]}>Pool Description</Text>
                <Text style={[{ color: theme.textPrimaryColor, fontSize: 16, lineHeight: 24 }]}>
                    This is a sample description for the pool. Here you can provide details about the assets in the pool, the benefits of staking, and any other relevant information that users might
                    find useful.
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    poolId: {
        fontSize: 14,
        marginBottom: 16,
    },
    imageContainer: {
        alignItems: "center",
        marginVertical: 24,
    },
    infoCard: {
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
    },
    infoLabel: {
        fontSize: 14,
        marginBottom: 8,
    },
    infoValue: {
        fontSize: 24,
        fontWeight: "700",
    },
});
