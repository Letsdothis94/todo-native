import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export interface ColorScheme {
  bg: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
  primary: string;
  success: string;
  warning: string;
  danger: string;
  shadow: string;
  gradients: {
    background: [string, string];
    surface: [string, string];
    primary: [string, string];
    success: [string, string];
    warning: [string, string];
    danger: [string, string];
    muted: [string, string];
    empty: [string, string];
  };
  backgrounds: {
    input: string;
    editInput: string;
  };
  statusBarStyle: "light-content" | "dark-content";
}

const lightColors: ColorScheme = {
  bg: "#f9fafb", 
  surface: "#ffffff", 
  text: "#0f172a", 
  textMuted: "#6b7280", 
  border: "#e5e7eb", 
  primary: "#2563eb", 
  success: "#16a34a", 
  warning: "#f59e0b", 
  danger: "#dc2626", 
  shadow: "rgba(15, 23, 42, 0.08)", 

  gradients: {
    background: ["#f9fafb", "#eef2f7"],
    surface: ["#ffffff", "#f9fafb"],

    primary: ["#3b82f6", "#2563eb"],
    success: ["#22c55e", "#16a34a"],
    warning: ["#fbbf24", "#f59e0b"],
    danger: ["#ef4444", "#dc2626"],

    muted: ["#d1d5db", "#9ca3af"],
    empty: ["#f3f4f6", "#e5e7eb"],
  },
  backgrounds: {
    input: "#ffffff",
    editInput: "#ffffff",
  },
  statusBarStyle: "dark-content" as const,
};

const darkColors: ColorScheme = {
  bg: "#020617", 
  surface: "#020617",
  text: "#e5e7eb", 
  textMuted: "#94a3b8", 
  border: "#1e293b", 
  primary: "#3b82f6", 
  success: "#22c55e", 
  warning: "#fbbf24", 
  danger: "#ef4444", 
  shadow: "rgba(0, 0, 0, 0.6)",

  gradients: {
    background: ["#020617", "#020617"],
    surface: ["#020617", "#020617"],

    primary: ["#60a5fa", "#2563eb"],
    success: ["#4ade80", "#16a34a"],
    warning: ["#fde68a", "#f59e0b"],
    danger: ["#f87171", "#dc2626"],

    muted: ["#334155", "#1e293b"],
    empty: ["#020617", "#020617"],
  },
  backgrounds: {
    input: "#1e293b",
    editInput: "#0f172a",
  },
  statusBarStyle: "light-content" as const,
};

interface ThemeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    colors: ColorScheme
}

const ThemeContext = createContext<undefined | ThemeContextType>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem("darkMode").then((value) => {
            if(value) setIsDarkMode(JSON.parse(value));
        })
    }, []);

    const toggleDarkMode = async () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        await AsyncStorage.setItem("darkMode", JSON.stringify(newMode));
    }

    const colors = isDarkMode ? darkColors : lightColors;

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, colors }}>
            {children}
        </ThemeContext.Provider>
    )
};

const useTheme = () => {
    const context = useContext(ThemeContext);
    if(context === undefined) {
        throw new Error("Error in useThemeProvider");
    }

    return context;
}

export default useTheme;
