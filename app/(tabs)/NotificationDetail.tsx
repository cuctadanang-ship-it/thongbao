import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function NotificationDetail() {
    return (
        <View style={styles.container}>
            {/* Miếng bo góc này giờ sẽ rất mỏng để không làm dài phần Header */}
            <View style={styles.blueCurve} />

            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.dept}>Phòng Đào tạo - Đại học Thái Bình Dương</Text>
                <Text style={styles.date}>25/10/2026 • Gửi đến: Nguyễn Khánh Hưng (SV2024)</Text>

                <Text style={styles.mainTitle}>Thông báo về kế hoạch học tập và đăng ký học phần Học kỳ II - Năm học 2026-2027</Text>

                <View style={styles.tagRow}>
                    <View style={styles.tagBlue}><Text style={styles.tagTextBlue}>HỌC VỤ</Text></View>
                    <View style={styles.tagGray}><Text style={styles.tagTextGray}>QUAN TRỌNG</Text></View>
                </View>

                <Text style={styles.content}>
                    Thân gửi các bạn sinh viên,{"\n"}{"\n"}
                    Để chuẩn bị tốt nhất cho học kỳ sắp tới, Phòng Đào tạo thông báo lộ trình đăng ký học phần Học kỳ II. Sinh viên lưu ý kiểm tra các học phần tiên quyết trước ngày mở cổng chính thức.
                </Text>

                <View style={styles.blueBox}>
                    <Text style={styles.boxTitle}>Lịch đăng ký chính thức:</Text>
                    <View style={styles.milestone}>
                        <FontAwesome name="calendar-check-o" size={16} color="#0077BE" />
                        <Text style={styles.msText}>Bắt đầu: 08:00 ngày 10/11/2026</Text>
                    </View>
                </View>

                <Text style={styles.label}>Tài liệu đính kèm:</Text>
                <View style={styles.fileCard}>
                    <FontAwesome name="file-pdf-o" size={24} color="#D32F2F" />
                    <Text style={styles.fileName}>HD_DangKyHocPhan_2026.pdf</Text>
                    <FontAwesome name="download" size={20} color="#888" />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
    blueCurve: {
        backgroundColor: '#0077BE',
        height: 10, // Rút ngắn miếng bo góc này lại
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    contentContainer: { padding: 20, paddingBottom: 40 },
    dept: { fontWeight: 'bold', fontSize: 15, color: '#333' },
    date: { color: '#888', fontSize: 12, marginBottom: 10 },
    mainTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, lineHeight: 24 },
    tagRow: { flexDirection: 'row', marginBottom: 20 },
    tagBlue: { backgroundColor: '#E3F2FD', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, marginRight: 8 },
    tagTextBlue: { color: '#0077BE', fontSize: 11, fontWeight: 'bold' },
    tagGray: { backgroundColor: '#F5F5F5', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
    tagTextGray: { color: '#666', fontSize: 11, fontWeight: 'bold' },
    content: { color: '#444', lineHeight: 22 },
    blueBox: { backgroundColor: '#F9FBFF', padding: 15, borderRadius: 12, borderLeftWidth: 4, borderLeftColor: '#0077BE', marginTop: 20 },
    boxTitle: { color: '#0077BE', fontWeight: 'bold', marginBottom: 5 },
    milestone: { flexDirection: 'row', alignItems: 'center' },
    msText: { marginLeft: 10, fontSize: 13 },
    label: { fontWeight: 'bold', marginTop: 25 },
    fileCard: { flexDirection: 'row', alignItems: 'center', padding: 12, borderWidth: 1, borderColor: '#eee', borderRadius: 10, marginTop: 10 },
    fileName: { flex: 1, marginLeft: 10, fontSize: 13 }
});