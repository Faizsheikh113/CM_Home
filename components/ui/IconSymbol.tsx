import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { OpaqueColorValue, StyleProp, ViewStyle } from "react-native";
import { SymbolWeight } from "expo-symbols";

/**
 * Mapping of SFSymbol names to MaterialIcons names for cross-platform consistency.
 * - See MaterialIcons: https://icons.expo.fyi
 * - See SF Symbols: SF Symbols app on Mac.
 */
const ICON_MAPPING = {
  "house.fill": "home",
  "paperplane.fill": "send",
  // Uncomment and add more mappings as needed:
  "newspaper.fill": "newspaper",
  "article.fill": "article",
  "account-box.fill": "account-box",
  "contact-support.fill": "contact-support",
  "chevron.left.forwardslash.chevron.right": "code",
  "chevron.right": "chevron-right",
} as const;

export type IconSymbolName = keyof typeof ICON_MAPPING;

/**
 * Props for the `IconSymbol` component.
 */
interface IconSymbolProps {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight; // Optional for future extension if iOS-specific weights are added
}

/**
 * `IconSymbol` component for rendering icons using native SFSymbols on iOS,
 * and MaterialIcons on Android and web. Ensures consistency across platforms.
 *
 * @param name - Name of the icon (based on SFSymbols).
 * @param size - Size of the icon (default is 24).
 * @param color - Color of the icon.
 * @param style - Additional styles for the icon.
 * @param weight - Optional weight for the symbol (iOS-specific feature).
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight,
}: IconSymbolProps) {
  const iconName = ICON_MAPPING[name];

  if (!iconName) {
    console.error(`Icon name "${name}" is not mapped to a MaterialIcon.`);
    return null;
  }

  return (
    <MaterialIcons
      name={iconName}
      size={size}
      color={color}
      style={style}
    />
  );
}
