import { Stack } from 'expo-router';
import React from 'react';

export default function TabLayout() {
    return (
        <Stack
            screenOptions={{
                // Giấu thanh tiêu đề mặc định của hệ thống để dùng Header tự chế của mình
                headerShown: false,
            }}>
            {/* Màn hình chính */}
            <Stack.Screen name="index" />

            {/* Các màn hình khác nếu có */}
            <Stack.Screen name="explore" />
        </Stack>
    );
}