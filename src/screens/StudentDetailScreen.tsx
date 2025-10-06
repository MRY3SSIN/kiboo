import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ProgressBar } from '../components/ProgressBar';
import { mockClasses } from '../data/mockData';

export const StudentDetailScreen = ({ route, navigation }: any) => {
  const { studentId } = route.params;
  
  let student = null;
  let className = '';
  
  for (const cls of mockClasses) {
    const foundStudent = cls.students.find(s => s.id === studentId);
    if (foundStudent) {
      student = foundStudent;
      className = cls.name;
      break;
    }
  }

  if (!student) {
    return (
      <View style={styles.container}>
        <Text>Student not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>‹ Back</Text>
        </TouchableOpacity>
        <View style={styles.profileSection}>
          <View style={styles.avatarLarge}>
            <Text style={styles.avatarText}>{student.avatar}</Text>
          </View>
          <Text style={styles.name}>{student.name}</Text>
          <Text style={styles.class}>{className}</Text>
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{student.overallScore}%</Text>
            <Text style={styles.statLabel}>Overall Score</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{student.attendance}%</Text>
            <Text style={styles.statLabel}>Attendance</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Subject Performance</Text>
        <View style={styles.card}>
          {student.subjectPerformances.map((performance) => (
            <ProgressBar
              key={performance.subjectId}
              label={performance.subjectName}
              value={performance.score}
              color={
                performance.score >= 90 ? '#10B981' : 
                performance.score >= 75 ? '#F59E0B' : 
                '#EF4444'
              }
              trend={performance.trend}
            />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Strengths</Text>
        <View style={styles.tagsContainer}>
          {student.strengths.map((strength, index) => (
            <View key={index} style={[styles.tag, styles.strengthTag]}>
              <Text style={styles.strengthText}>💪 {strength}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Areas for Improvement</Text>
        <View style={styles.tagsContainer}>
          {student.weaknesses.map((weakness, index) => (
            <View key={index} style={[styles.tag, styles.weaknessTag]}>
              <Text style={styles.weaknessText}>📚 {weakness}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Performance Analysis</Text>
        <View style={styles.card}>
          {student.subjectPerformances.map((perf) => {
            const vsAverage = perf.score - perf.averageScore;
            const isAboveAverage = vsAverage > 0;
            
            return (
              <View key={perf.subjectId} style={styles.analysisItem}>
                <View style={styles.analysisHeader}>
                  <Text style={styles.analysisSubject}>{perf.subjectName}</Text>
                  <Text style={styles.analysisScore}>{perf.score}%</Text>
                </View>
                <View style={styles.analysisDetails}>
                  <Text style={styles.analysisText}>
                    {isAboveAverage ? '🎯' : '📊'} {Math.abs(vsAverage).toFixed(1)} points {isAboveAverage ? 'above' : 'below'} class average
                  </Text>
                  <Text style={styles.analysisText}>
                    📅 {perf.totalAssessments} assessments completed
                  </Text>
                  <Text style={styles.analysisText}>
                    🗓️ Last assessed: {new Date(perf.lastAssessmentDate).toLocaleDateString()}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.card}>
          {student.recentActivity.map((activity) => (
            <View key={activity.id} style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <Text style={styles.activityEmoji}>
                  {activity.type === 'assessment' ? '📝' : 
                   activity.type === 'assignment' ? '📄' : '✅'}
                </Text>
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityDate}>
                  {new Date(activity.date).toLocaleDateString()}
                </Text>
              </View>
              {activity.score && (
                <View style={styles.activityScore}>
                  <Text style={styles.activityScoreText}>{activity.score}%</Text>
                </View>
              )}
            </View>
          ))}
        </View>
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
  backButton: {
    marginBottom: 20,
  },
  backText: {
    fontSize: 16,
    color: '#3B82F6',
    fontWeight: '600',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 48,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  class: {
    fontSize: 14,
    color: '#6B7280',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  strengthTag: {
    backgroundColor: '#D1FAE5',
  },
  strengthText: {
    color: '#065F46',
    fontWeight: '600',
    fontSize: 14,
  },
  weaknessTag: {
    backgroundColor: '#FEE2E2',
  },
  weaknessText: {
    color: '#991B1B',
    fontWeight: '600',
    fontSize: 14,
  },
  analysisItem: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  analysisHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  analysisSubject: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
  analysisScore: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3B82F6',
  },
  analysisDetails: {
    gap: 4,
  },
  analysisText: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 20,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityEmoji: {
    fontSize: 20,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  activityDate: {
    fontSize: 12,
    color: '#6B7280',
  },
  activityScore: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
  activityScoreText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E40AF',
  },
  bottomSpacing: {
    height: 20,
  },
});
