export interface Subject {
  id: string;
  name: string;
  color: string;
}

export interface SubjectPerformance {
  subjectId: string;
  subjectName: string;
  score: number;
  averageScore: number;
  trend: 'up' | 'down' | 'stable';
  lastAssessmentDate: string;
  totalAssessments: number;
}

export interface Student {
  id: string;
  name: string;
  avatar: string;
  classId: string;
  overallScore: number;
  attendance: number;
  subjectPerformances: SubjectPerformance[];
  strengths: string[];
  weaknesses: string[];
  recentActivity: Activity[];
}

export interface Activity {
  id: string;
  type: 'assessment' | 'assignment' | 'attendance';
  title: string;
  date: string;
  score?: number;
  subject?: string;
}

export interface Class {
  id: string;
  name: string;
  grade: string;
  studentCount: number;
  averageScore: number;
  subjects: Subject[];
  students: Student[];
}

export interface LeaderboardEntry {
  rank: number;
  studentId: string;
  studentName: string;
  classId: string;
  className: string;
  overallScore: number;
  topSubject: string;
  badge?: 'gold' | 'silver' | 'bronze';
}

export interface DashboardStats {
  totalStudents: number;
  totalClasses: number;
  averageAttendance: number;
  averageScore: number;
  improvingStudents: number;
  needsAttention: number;
}
