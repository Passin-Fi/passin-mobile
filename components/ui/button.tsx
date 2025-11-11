import { ThemeValue } from "@/constants/type";
import { useTheme } from "@/hooks/use-color-scheme";
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

// Cấu hình size styles - static, không phụ thuộc theme
const sizeStyles: Record<ButtonSize, { height: number; paddingHorizontal: number }> = {
    small: {
        height: 32,
        paddingHorizontal: 10,
    },
    medium: {
        height: 38,
        paddingHorizontal: 14,
    },
    large: {
        height: 46,
        paddingHorizontal: 16,
    },
};

// Factory function để tạo variant styles dựa trên theme
const getVariantStyles = (theme: ThemeValue): Record<ButtonVariant, { backgroundColor: string; textColor: string }> => ({
    primary: {
        backgroundColor: theme.primaryColor,
        textColor: theme.bgPrimaryColor,
    },
    secondary: {
        backgroundColor: theme.secondaryColor,
        textColor: theme.textHighlightColor,
    },
});

export default function Button({ onPress, title, children, style, textStyle, disabled = false, variant = "primary", size = "medium" }: ButtonProps) {
    const { theme } = useTheme();

    const variantStyles = getVariantStyles(theme);
    const currentVariant = variantStyles[variant];
    const currentSize = sizeStyles[size];

    return (
        <TouchableOpacity
            style={[
                styles.button,
                currentSize,
                {
                    backgroundColor: currentVariant.backgroundColor,
                    borderRadius: theme.radius,
                    opacity: disabled ? 0.5 : 1,
                },
                style,
            ]}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.8}
        >
            {children || <Text style={[styles.text, { color: currentVariant.textColor }, textStyle]}>{title}</Text>}
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
