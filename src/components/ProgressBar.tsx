import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProgressBarProps {
  label: string;
  value: number;
  maxValue?: number;
  color: string;
  showPercentage?: boolean;
  trend?: 'up' | 'down' | 'stable';
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  label, 
  value, 
  maxValue = 100, 
  color,
  showPercentage = true,
  trend
}) => {
  const percentage = (value / maxValue) * 100;
  
  const getTrendIcon = () => {
    if (trend === 'up') return '↑';
    if (trend === 'down') return '↓';
    return '→';
  };

  const getTrendColor = () => {
    if (trend === 'up') return '#10B981';
    if (trend === 'down') return '#EF4444';
    return '#6B7280';
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.valueContainer}>
          {showPercentage && <Text style={styles.value}>{value}%</Text>}
          {trend && (
            <Text style={[styles.trend, { color: getTrendColor() }]}>
              {getTrendIcon()}
            </Text>
          )}
        </View>
      </View>
      <View style={styles.barContainer}>
        <View 
          style={[
            styles.barFill, 
            { width: `${percentage}%`, backgroundColor: color }
          ]} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
  },
  trend: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  barContainer: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 4,
  },
});
