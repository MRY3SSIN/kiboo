import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StatCard } from '../components/StatCard';
import { ClassCard } from '../components/ClassCard';
import { mockClasses, getDashboardStats } from '../data/mockData';

export const DashboardScreen = ({ navigation }: any) => {
  const stats = getDashboardStats();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Teacher Dashboard</Text>
        <Text style={styles.subtitle}>Welcome back! 👋</Text>
      </View>

      <View style={styles.statsGrid}>
        <StatCard
          title="Total Students"
          value={stats.totalStudents}
          icon="👨‍🎓"
          color="#3B82F6"
        />
        <StatCard
          title="Total Classes"
          value={stats.totalClasses}
          icon="🏫"
          color="#10B981"
        />
        <StatCard
          title="Avg Attendance"
          value={`${stats.averageAttendance}%`}
          icon="📊"
          color="#F59E0B"
        />
        <StatCard
          title="Avg Score"
          value={`${stats.averageScore}%`}
          icon="⭐"
          color="#8B5CF6"
        />
        <StatCard
          title="Improving"
          value={stats.improvingStudents}
          icon="📈"
          color="#10B981"
          subtitle="Students on upward trend"
        />
        <StatCard
          title="Needs Attention"
          value={stats.needsAttention}
          icon="⚠️"
          color="#EF4444"
          subtitle="Students below threshold"
        />
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Classes</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All ›</Text>
          </TouchableOpacity>
        </View>
        {mockClasses.map((classData) => (
          <ClassCard
            key={classData.id}
            classData={classData}
            onPress={() => navigation.navigate('ClassDetail', { classId: classData.id })}
          />
        ))}
      </View>

      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  statsGrid: {
    padding: 16,
  },
  section: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  seeAll: {
    fontSize: 14,
    color: '#3B82F6',
    fontWeight: '600',
  },
  bottomSpacing: {
    height: 20,
  },
});
