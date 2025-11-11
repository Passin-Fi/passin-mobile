import { ThemeValue } from "@/constants/type";
import { useTheme } from "@/hooks/use-color-scheme";
import type { LucideIcon } from "lucide-react-native";
import React from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

type ButtonIconVariant = "fill" | "outline" | "text";
type ButtonIconSize = "small" | "medium" | "large";

interface ButtonIconProps {
    icon: LucideIcon;
    onPress?: () => void;
    style?: ViewStyle;
    disabled?: boolean;
    variant?: ButtonIconVariant;
    size?: ButtonIconSize;
}

// Cấu hình size styles - static
const sizeConfig: Record<ButtonIconSize, { containerSize: number; iconSize: number }> = {
    small: {
        containerSize: 32,
        iconSize: 16,
    },
    medium: {
        containerSize: 40,
        iconSize: 20,
    },
    large: {
        containerSize: 48,
        iconSize: 24,
    },
};

// Factory function để tạo variant styles dựa trên theme
const getVariantStyles = (theme: ThemeValue): Record<ButtonIconVariant, { backgroundColor: string; iconColor: string; borderWidth: number; borderColor: string }> => ({
    fill: {
        backgroundColor: theme.primaryColor,
        iconColor: theme.bgPrimaryColor,
        borderWidth: 0,
        borderColor: "transparent",
    },
    outline: {
        backgroundColor: "transparent",
        iconColor: theme.textPrimaryColor,
        borderWidth: 1,
        borderColor: theme.textSecondaryColor,
    },
    text: {
        backgroundColor: "transparent",
        iconColor: theme.textPrimaryColor,
        borderWidth: 0,
        borderColor: "transparent",
    },
});

export default function ButtonIcon({ icon: Icon, onPress, style, disabled = false, variant = "fill", size = "medium" }: ButtonIconProps) {
    const { theme } = useTheme();

    const variantStyles = getVariantStyles(theme);
    const currentVariant = variantStyles[variant];
    const currentSize = sizeConfig[size];

    return (
        <TouchableOpacity
            style={[
                styles.button,
                {
                    width: currentSize.containerSize,
                    height: currentSize.containerSize,
                    backgroundColor: currentVariant.backgroundColor,
                    borderRadius: theme.radius,
                    borderWidth: currentVariant.borderWidth,
                    borderColor: currentVariant.borderColor,
                    opacity: disabled ? 0.5 : 1,
                },
                style,
            ]}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.7}
        >
            <Icon color={currentVariant.iconColor} size={currentSize.iconSize} strokeWidth={2} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
    },
});
