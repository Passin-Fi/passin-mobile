import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { ScrollView } from "@/components/scroll-view";
import { useTheme } from "@/hooks/use-color-scheme";

export default function PoolsPage() {
    const router = useRouter();
    const { theme } = useTheme();

    const pools = [
        { id: "pool-1", name: "USDC Pool", token: "USDC", apy: "12.5%" },
        { id: "pool-2", name: "USDT Pool", token: "USDT", apy: "10.8%" },
        { id: "pool-3", name: "DAI Pool", token: "DAI", apy: "11.2%" },
    ];

    return (
        <ScrollView style={{ paddingHorizontal: 16 }}>
            <View style={{ padding: 12 }}>
                <Text style={[styles.pageTitle, { color: theme.textPrimaryColor }]}>Available Pools</Text>

                {pools.map((pool) => (
                    <Pressable key={pool.id} style={[styles.poolCard, { backgroundColor: theme.bgSecondaryColor }]} onPress={() => router.push(`/(tabs)/pools/${pool.id}` as any)}>
                        <Image source={"https://crypto-images-4545f.web.app/images/token/USDC.png"} style={{ width: 48, height: 48 }} />
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[styles.poolName, { color: theme.textPrimaryColor }]}>{pool.name}</Text>
                            <Text style={[styles.poolToken, { color: theme.textSecondaryColor }]}>{pool.token}</Text>
                        </View>
                        <View style={{ alignItems: "flex-end" }}>
                            <Text style={[styles.apyLabel, { color: theme.textSecondaryColor }]}>APY</Text>
                            <Text style={[styles.apyValue, { color: theme.primaryColor }]}>{pool.apy}</Text>
                        </View>
                    </Pressable>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    pageTitle: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 16,
    },
    poolCard: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
    },
    poolName: {
        fontSize: 18,
        fontWeight: "600",
    },
    poolToken: {
        fontSize: 14,
        marginTop: 4,
    },
    apyLabel: {
        fontSize: 12,
        marginBottom: 4,
    },
    apyValue: {
        fontSize: 18,
        fontWeight: "700",
    },
});
