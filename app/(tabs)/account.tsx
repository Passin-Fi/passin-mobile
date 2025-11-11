import { ScrollView } from "@/components/scroll-view";
import ThemeToggle from "@/components/theme-toggle";
import { ThemedText } from "@/components/themed-text";
import { Fonts } from "@/constants/theme";
import { View } from "react-native";

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
