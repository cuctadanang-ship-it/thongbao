import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Dữ liệu mẫu khớp với các thông báo sinh viên
const data = [
    { id: '1', sender: 'Phòng Đào tạo', title: 'Khảo sát ý kiến sinh viên về chất lượng giảng dạy HK1', time: '10:45 AM', type: 'survey' },
    { id: '2', sender: 'Phòng Công tác SV', title: 'Danh sách SV dự kiến nhận Học bổng Khuyến khích', time: '08:20 AM', type: 'scholarship' },
    { id: '3', sender: 'Trung tâm Ngoại ngữ', title: 'Lịch thi kết thúc học phần Tiếng Anh chuẩn đầu ra', time: 'Hôm qua', type: 'exam' },
    { id: '4', sender: 'Văn phòng Khoa', title: 'Thông báo lịch bảo vệ Đồ án cơ sở ngành chính thức', time: '20 THG 10', type: 'thesis' },
];

export default function NotificationList({ onGoDetail }: any) {
    // Hàm chọn icon và màu sắc cho icon
    const getIconConfig = (type: string) => {
        switch (type) {
            case 'survey': return { name: 'file-text-o', color: '#673AB7' }; // Tím
            case 'scholarship': return { name: 'graduation-cap', color: '#4CAF50' }; // Xanh lá
            case 'exam': return { name: 'pencil-square-o', color: '#F44336' }; // Đỏ
            case 'thesis': return { name: 'book', color: '#0077BE' }; // Xanh đậm
            default: return { name: 'university', color: '#666' };
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 15, paddingBottom: 30 }}
                renderItem={({ item }) => {
                    const { name, color } = getIconConfig(item.type);
                    return (
                        <TouchableOpacity style={styles.card} onPress={onGoDetail}>
                            {/* Icon tròn bên trái */}
                            <View style={styles.iconCol}>
                                <View style={[styles.iconCircle, { borderColor: color }]}>
                                    <FontAwesome name={name} size={22} color={color} />
                                </View>
                            </View>

                            {/* Nội dung text */}
                            <View style={styles.textCol}>
                                <View style={styles.row}>
                                    <Text style={styles.sender}>{item.sender}</Text>
                                    <Text style={styles.time}>{item.time}</Text>
                                </View>
                                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f9f9f9' },
    // Định dạng Thẻ (Card) bo góc và có bóng đổ
    card: {
        flexDirection: 'row',
        padding: 18,
        backgroundColor: 'white',
        borderRadius: 16,
        marginBottom: 15,
        elevation: 4, // Bóng đổ Android
        shadowColor: '#000', // Bóng đổ iOS
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        alignItems: 'center'
    },
    iconCol: { width: 60, alignItems: 'center', justifyContent: 'center' },
    iconCircle: { width: 50, height: 50, borderRadius: 25, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    textCol: { flex: 1, marginLeft: 15 },
    row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    sender: { fontWeight: 'bold', fontSize: 16, color: '#333' },
    time: { fontSize: 11, color: '#999' },
    title: { color: '#0077BE', marginTop: 5, fontSize: 14, lineHeight: 20 }
});