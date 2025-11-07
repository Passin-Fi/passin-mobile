// Fallback for using MaterialIcons on Android and web.

import { SymbolWeight } from "expo-symbols";
import { Camera, ChevronLeft, ChevronRight, FileClock, Home, Pickaxe, Send, UserRound, Wallet } from "lucide-react-native";
import { OpaqueColorValue, ViewStyle, type StyleProp } from "react-native";

type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
    house: Home,
    paperplane: Send,
    "chevron.left": ChevronLeft,
    "chevron.right": ChevronRight,
    camera: Camera,
    account: UserRound,
    pickaxe: Pickaxe,
    "file.clock": FileClock,
    wallet: Wallet,
};

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
    name,
    size = 24,
    color,
    style,
    weight = "medium",
}: {
    name: IconSymbolName;
    size?: number;
    color: string | OpaqueColorValue;
    style?: StyleProp<ViewStyle>;
    weight?: SymbolWeight;
}) {
    const Icon = MAPPING[name];
    return <Icon color={color} size={size} style={style} strokeWidth={weight == "thin" ? 1 : weight == "medium" ? 2 : 3} />;
}
