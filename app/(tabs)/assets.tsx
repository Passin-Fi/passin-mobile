import { ScrollView } from "@/components/scroll-view";
import { ThemedText } from "@/components/themed-text";
import { Fonts } from "@/constants/theme";

export default function Assets() {
    return (
        <ScrollView style={{ paddingHorizontal: 16 }}>
            <ThemedText
                type="title"
                style={{
                    fontFamily: Fonts.rounded,
                }}
            >
                Assets
            </ThemedText>
        </ScrollView>
    );
}
