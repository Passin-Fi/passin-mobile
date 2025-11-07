import { darkTheme } from "@/constants/theme.dark";
import { lightTheme } from "@/constants/theme.light";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
    onPress?: () => void;
    title?: string;
    children?: React.ReactNode;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
    variant?: ButtonVariant;
    size?: ButtonSize;
}

export default function Button({ onPress, title, children, style, textStyle, disabled = false, variant = "primary", size = "medium" }: ButtonProps) {
    const colorScheme = useColorScheme();
    const theme = colorScheme === "dark" ? darkTheme : lightTheme;

    // Xác định màu nền và màu chữ theo variant
    const backgroundColor = variant === "primary" ? theme.primaryColor : theme.secondaryColor;
    const textColor = variant === "primary" ? theme.bgPrimaryColor : theme.textHighlightColor;

    // Xác định padding và height theo size
    const sizeStyles = size === "small" ? { height: 32, paddingHorizontal: 12 } : size === "medium" ? { height: 40, paddingHorizontal: 16 } : { height: 50, paddingHorizontal: 20 };

    return (
        <TouchableOpacity
            style={[
                styles.button,
                sizeStyles,
                {
                    backgroundColor: backgroundColor,
                    borderRadius: theme.radius,
                    opacity: disabled ? 0.5 : 1,
                },
                style,
            ]}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.8}
        >
            {children || <Text style={[styles.text, { color: textColor }, textStyle]}>{title}</Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start", // Width fit content
    },
    text: {
        fontSize: 16,
        fontWeight: "600",
    },
});
