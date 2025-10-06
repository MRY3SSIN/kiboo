import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StudentCard } from '../components/StudentCard';
import { ProgressBar } from '../components/ProgressBar';
import { mockClasses } from '../data/mockData';

export const ClassDetailScreen = ({ route, navigation }: any) => {
  const { classId } = route.params;
  const classData = mockClasses.find(c => c.id === classId);

  if (!classData) {
    return (
      <View style={styles.container}>
        <Text>Class not found</Text>
      </View>
    );
  }

  const subjectAverages = classData.subjects.map(subject => {
    const scores = classData.students.flatMap(student =>
      student.subjectPerformances
        .filter(p => p.subjectId === subject.id)
        .map(p => p.score)
    );
    const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    return { ...subject, average };
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{classData.name}</Text>
        <Text style={styles.subtitle}>{classData.grade}</Text>
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{classData.students.length}</Text>
            <Text style={styles.statLabel}>Students</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{classData.averageScore.toFixed(1)}%</Text>
            <Text style={styles.statLabel}>Avg Score</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{classData.subjects.length}</Text>
            <Text style={styles.statLabel}>Subjects</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Subject Performance</Text>
        <View style={styles.card}>
          {subjectAverages.map((subject) => (
            <ProgressBar
              key={subject.id}
              label={subject.name}
              value={Math.round(subject.average)}
              color={subject.color}
            />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Students ({classData.students.length})</Text>
        {classData.students
          .sort((a, b) => b.overallScore - a.overallScore)
          .map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onPress={() => navigation.navigate('StudentDetail', { studentId: student.id })}
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
  backButton: {
    marginBottom: 12,
  },
  backText: {
    fontSize: 16,
    color: '#3B82F6',
    fontWeight: '600',
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
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
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
  bottomSpacing: {
    height: 20,
  },
});
