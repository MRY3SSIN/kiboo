import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Class } from '../types';

interface ClassCardProps {
  classData: Class;
  onPress: () => void;
}

export const ClassCard: React.FC<ClassCardProps> = ({ classData, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <View>
          <Text style={styles.className}>{classData.name}</Text>
          <Text style={styles.grade}>{classData.grade}</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{classData.studentCount} students</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Average Score</Text>
          <Text style={styles.statValue}>{classData.averageScore.toFixed(1)}%</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Subjects</Text>
          <Text style={styles.statValue}>{classData.subjects.length}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  className: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  grade: {
    fontSize: 14,
    color: '#6B7280',
  },
  badge: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  badgeText: {
    fontSize: 12,
    color: '#1E40AF',
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 12,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
});
