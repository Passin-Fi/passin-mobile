import { StyleSheet } from "react-native";

import { ScrollView } from "@/components/scroll-view";
import { ThemedText } from "@/components/themed-text";
import { Fonts } from "@/constants/theme";

export default function Orders() {
    return (
        <ScrollView style={{ paddingHorizontal: 16 }}>
            <ThemedText
                type="title"
                style={{
                    fontFamily: Fonts.rounded,
                }}
            >
                Orders
            </ThemedText>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        gap: 8,
    },
});
