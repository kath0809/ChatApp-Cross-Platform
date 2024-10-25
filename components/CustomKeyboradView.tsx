import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const ios = Platform.OS === "ios";

import { ReactNode } from "react";

interface CustomKeyboardViewProps {
    children: ReactNode;
}

export default function CustomKeyboardView({ children }: CustomKeyboardViewProps) {
    return (
        <KeyboardAvoidingView
            behavior={ios ? "padding" : "height"}
            style={{ flex: 1 }}
        >

            <ScrollView
            style={{flex: 1}}
            bounces={false}
            showsVerticalScrollIndicator={false}
            >
                {
                    children
                }
            </ScrollView>
        </KeyboardAvoidingView>
    );
}