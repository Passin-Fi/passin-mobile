import { ScrollView } from "@/components/scroll-view";
import { ThemedText } from "@/components/themed-text";
import { Fonts } from "@/constants/theme";
import { Image } from "expo-image";

export default function Account() {
    return (
        <ScrollView style={{ paddingHorizontal: 16 }}>
            <ThemedText
                type="title"
                style={{
                    fontFamily: Fonts.rounded,
                }}
            >
                Explore
            </ThemedText>
            <Image source={"https://crypto-images-4545f.web.app/images/token/ORAI-lightmode.png"} style={{ width: 70, height: 70, alignSelf: "center", marginTop: 30 }} />
        </ScrollView>
    );
}
