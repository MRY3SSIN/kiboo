import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { generateLeaderboard } from '../data/mockData';

export const LeaderboardScreen = ({ navigation }: any) => {
  const [filter, setFilter] = useState<'all' | string>('all');
  const leaderboard = generateLeaderboard();
  
  const filteredLeaderboard = filter === 'all' 
    ? leaderboard 
    : leaderboard.filter(entry => entry.classId === filter);

  const getBadgeEmoji = (badge?: 'gold' | 'silver' | 'bronze') => {
    if (badge === 'gold') return '🥇';
    if (badge === 'silver') return '🥈';
    if (badge === 'bronze') return '🥉';
    return '';
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return '#10B981';
    if (score >= 80) return '#3B82F6';
    if (score >= 70) return '#F59E0B';
    return '#EF4444';
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Leaderboard</Text>
        <Text style={styles.subtitle}>Top Performing Students 🏆</Text>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
        contentContainerStyle={styles.filterContent}
      >
        <TouchableOpacity
          style={[styles.filterButton, filter === 'all' && styles.filterButtonActive]}
          onPress={() => setFilter('all')}
        >
          <Text style={[styles.filterText, filter === 'all' && styles.filterTextActive]}>
            All Classes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'c1' && styles.filterButtonActive]}
          onPress={() => setFilter('c1')}
        >
          <Text style={[styles.filterText, filter === 'c1' && styles.filterTextActive]}>
            Class 5A
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'c2' && styles.filterButtonActive]}
          onPress={() => setFilter('c2')}
        >
          <Text style={[styles.filterText, filter === 'c2' && styles.filterTextActive]}>
            Class 5B
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'c3' && styles.filterButtonActive]}
          onPress={() => setFilter('c3')}
        >
          <Text style={[styles.filterText, filter === 'c3' && styles.filterTextActive]}>
            Class 6A
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <ScrollView style={styles.listContainer}>
        {filteredLeaderboard.map((entry) => (
          <TouchableOpacity
            key={entry.studentId}
            style={[
              styles.leaderboardCard,
              entry.rank <= 3 && styles.leaderboardCardHighlight
            ]}
            onPress={() => navigation.navigate('StudentDetail', { studentId: entry.studentId })}
          >
            <View style={styles.rankContainer}>
              {entry.badge ? (
                <Text style={styles.badgeEmoji}>{getBadgeEmoji(entry.badge)}</Text>
              ) : (
                <View style={styles.rankCircle}>
                  <Text style={styles.rankText}>{entry.rank}</Text>
                </View>
              )}
            </View>
            
            <View style={styles.studentInfo}>
              <Text style={styles.studentName}>{entry.studentName}</Text>
              <Text style={styles.className}>{entry.className}</Text>
              <View style={styles.subjectBadge}>
                <Text style={styles.subjectText}>⭐ Best at: {entry.topSubject}</Text>
              </View>
            </View>

            <View style={styles.scoreContainer}>
              <Text style={[styles.score, { color: getScoreColor(entry.overallScore) }]}>
                {entry.overallScore}%
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
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
    marginBottom: 16,
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
  filterContainer: {
    maxHeight: 50,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  filterContent: {
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  filterButtonActive: {
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  filterTextActive: {
    color: '#fff',
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  leaderboardCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  leaderboardCardHighlight: {
    borderWidth: 2,
    borderColor: '#F59E0B',
  },
  rankContainer: {
    width: 50,
    alignItems: 'center',
    marginRight: 12,
  },
  badgeEmoji: {
    fontSize: 36,
  },
  rankCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6B7280',
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  className: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 6,
  },
  subjectBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  subjectText: {
    fontSize: 11,
    color: '#92400E',
    fontWeight: '600',
  },
  scoreContainer: {
    marginLeft: 12,
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
