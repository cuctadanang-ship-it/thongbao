import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, StatusBar, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import NotificationList from './NotificationList';
import NotificationDetail from './NotificationDetail';

export default function App() {
    const [screen, setScreen] = useState('home');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#0077BE" />

            {/* Header đã được làm ngắn lại và hạ thấp chữ */}
            <View style={styles.header}>
                {screen !== 'home' ? (
                    <TouchableOpacity onPress={() => setScreen(screen === 'detail' ? 'list' : 'home')}>
                        <FontAwesome name="chevron-left" size={20} color="white" />
                    </TouchableOpacity>
                ) : <View style={{ width: 20 }} />}

                <Text style={styles.headerTitle}>Thông báo</Text>

                <View style={{ width: 20 }} />
            </View>

            <View style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
                {screen === 'home' && (
                    <View style={styles.center}>
                        <TouchableOpacity style={styles.bellBtn} onPress={() => setScreen('list')}>
                            <FontAwesome name="bell-o" size={28} color="white" />
                            <Text style={styles.bellBtnText}>Mở Thông Báo</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {screen === 'list' && (
                    <NotificationList onGoDetail={() => setScreen('detail')} />
                )}

                {screen === 'detail' && (
                    <NotificationDetail />
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0077BE' },
    header: {
        backgroundColor: '#0077BE',
        height: 80, // Giảm chiều cao xuống để Header không bị quá dài
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 25, // Hạ thấp chữ thông báo xuống một chút
    },
    headerTitle: { color: 'white', fontSize: 18, fontWeight: 'bold' },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    bellBtn: {
        flexDirection: 'row',
        backgroundColor: '#0077BE',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center'
    },
    bellBtnText: { color: 'white', marginLeft: 10, fontWeight: 'bold', fontSize: 16 }
});