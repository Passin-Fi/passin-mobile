import { StyleSheet, View } from "react-native";

import { ScrollView } from "@/components/scroll-view";
import Button from "@/components/ui/button";
import { Image } from "expo-image";

export default function PoolsPage() {
    return (
        <ScrollView style={{ paddingHorizontal: 16 }}>
            <View style={{ padding: 12 }}>
                <View>
                    <Image source={"https://crypto-images-4545f.web.app/images/token/USDC.png"} style={{ width: 40, height: 40 }} />
                </View>
                <Button title="Subscribe" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: "absolute",
    },
});
