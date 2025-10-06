import { Class, Student, Subject, LeaderboardEntry, DashboardStats } from '../types';

export const subjects: Subject[] = [
  { id: 's1', name: 'Mathematics', color: '#3B82F6' },
  { id: 's2', name: 'Science', color: '#10B981' },
  { id: 's3', name: 'English', color: '#F59E0B' },
  { id: 's4', name: 'History', color: '#8B5CF6' },
  { id: 's5', name: 'Art', color: '#EC4899' },
];

export const mockClasses: Class[] = [
  {
    id: 'c1',
    name: 'Class 5A',
    grade: '5th Grade',
    studentCount: 25,
    averageScore: 78.5,
    subjects: subjects,
    students: [
      {
        id: 'st1',
        name: 'Emma Wilson',
        avatar: '👧',
        classId: 'c1',
        overallScore: 92,
        attendance: 98,
        strengths: ['Mathematics', 'Science'],
        weaknesses: ['Art'],
        subjectPerformances: [
          { subjectId: 's1', subjectName: 'Mathematics', score: 95, averageScore: 78, trend: 'up', lastAssessmentDate: '2025-10-02', totalAssessments: 8 },
          { subjectId: 's2', subjectName: 'Science', score: 94, averageScore: 80, trend: 'up', lastAssessmentDate: '2025-10-01', totalAssessments: 7 },
          { subjectId: 's3', subjectName: 'English', score: 90, averageScore: 82, trend: 'stable', lastAssessmentDate: '2025-09-30', totalAssessments: 9 },
          { subjectId: 's4', subjectName: 'History', score: 88, averageScore: 75, trend: 'up', lastAssessmentDate: '2025-10-03', totalAssessments: 6 },
          { subjectId: 's5', subjectName: 'Art', score: 82, averageScore: 85, trend: 'down', lastAssessmentDate: '2025-10-02', totalAssessments: 5 },
        ],
        recentActivity: [
          { id: 'a1', type: 'assessment', title: 'Math Quiz Chapter 5', date: '2025-10-02', score: 95, subject: 'Mathematics' },
          { id: 'a2', type: 'assignment', title: 'Science Project', date: '2025-10-01', score: 94, subject: 'Science' },
        ],
      },
      {
        id: 'st2',
        name: 'Liam Johnson',
        avatar: '👦',
        classId: 'c1',
        overallScore: 85,
        attendance: 95,
        strengths: ['English', 'History'],
        weaknesses: ['Mathematics'],
        subjectPerformances: [
          { subjectId: 's1', subjectName: 'Mathematics', score: 72, averageScore: 78, trend: 'down', lastAssessmentDate: '2025-10-02', totalAssessments: 8 },
          { subjectId: 's2', subjectName: 'Science', score: 84, averageScore: 80, trend: 'stable', lastAssessmentDate: '2025-10-01', totalAssessments: 7 },
          { subjectId: 's3', subjectName: 'English', score: 93, averageScore: 82, trend: 'up', lastAssessmentDate: '2025-09-30', totalAssessments: 9 },
          { subjectId: 's4', subjectName: 'History', score: 91, averageScore: 75, trend: 'up', lastAssessmentDate: '2025-10-03', totalAssessments: 6 },
          { subjectId: 's5', subjectName: 'Art', score: 85, averageScore: 85, trend: 'stable', lastAssessmentDate: '2025-10-02', totalAssessments: 5 },
        ],
        recentActivity: [
          { id: 'a3', type: 'assessment', title: 'English Essay', date: '2025-09-30', score: 93, subject: 'English' },
          { id: 'a4', type: 'attendance', title: 'Present', date: '2025-10-06' },
        ],
      },
      {
        id: 'st3',
        name: 'Sophia Brown',
        avatar: '👧',
        classId: 'c1',
        overallScore: 88,
        attendance: 100,
        strengths: ['Art', 'English'],
        weaknesses: ['History'],
        subjectPerformances: [
          { subjectId: 's1', subjectName: 'Mathematics', score: 86, averageScore: 78, trend: 'up', lastAssessmentDate: '2025-10-02', totalAssessments: 8 },
          { subjectId: 's2', subjectName: 'Science', score: 87, averageScore: 80, trend: 'stable', lastAssessmentDate: '2025-10-01', totalAssessments: 7 },
          { subjectId: 's3', subjectName: 'English', score: 90, averageScore: 82, trend: 'up', lastAssessmentDate: '2025-09-30', totalAssessments: 9 },
          { subjectId: 's4', subjectName: 'History', score: 78, averageScore: 75, trend: 'stable', lastAssessmentDate: '2025-10-03', totalAssessments: 6 },
          { subjectId: 's5', subjectName: 'Art', score: 95, averageScore: 85, trend: 'up', lastAssessmentDate: '2025-10-02', totalAssessments: 5 },
        ],
        recentActivity: [
          { id: 'a5', type: 'assignment', title: 'Art Portfolio', date: '2025-10-02', score: 95, subject: 'Art' },
        ],
      },
    ],
  },
  {
    id: 'c2',
    name: 'Class 5B',
    grade: '5th Grade',
    studentCount: 23,
    averageScore: 81.2,
    subjects: subjects,
    students: [
      {
        id: 'st4',
        name: 'Noah Davis',
        avatar: '👦',
        classId: 'c2',
        overallScore: 90,
        attendance: 97,
        strengths: ['Science', 'Mathematics'],
        weaknesses: ['English'],
        subjectPerformances: [
          { subjectId: 's1', subjectName: 'Mathematics', score: 92, averageScore: 81, trend: 'up', lastAssessmentDate: '2025-10-02', totalAssessments: 8 },
          { subjectId: 's2', subjectName: 'Science', score: 94, averageScore: 83, trend: 'up', lastAssessmentDate: '2025-10-01', totalAssessments: 7 },
          { subjectId: 's3', subjectName: 'English', score: 82, averageScore: 80, trend: 'stable', lastAssessmentDate: '2025-09-30', totalAssessments: 9 },
          { subjectId: 's4', subjectName: 'History', score: 89, averageScore: 78, trend: 'up', lastAssessmentDate: '2025-10-03', totalAssessments: 6 },
          { subjectId: 's5', subjectName: 'Art', score: 88, averageScore: 82, trend: 'stable', lastAssessmentDate: '2025-10-02', totalAssessments: 5 },
        ],
        recentActivity: [
          { id: 'a6', type: 'assessment', title: 'Science Experiment', date: '2025-10-01', score: 94, subject: 'Science' },
        ],
      },
      {
        id: 'st5',
        name: 'Olivia Martinez',
        avatar: '👧',
        classId: 'c2',
        overallScore: 87,
        attendance: 94,
        strengths: ['English', 'Art'],
        weaknesses: ['Mathematics'],
        subjectPerformances: [
          { subjectId: 's1', subjectName: 'Mathematics', score: 78, averageScore: 81, trend: 'down', lastAssessmentDate: '2025-10-02', totalAssessments: 8 },
          { subjectId: 's2', subjectName: 'Science', score: 85, averageScore: 83, trend: 'stable', lastAssessmentDate: '2025-10-01', totalAssessments: 7 },
          { subjectId: 's3', subjectName: 'English', score: 92, averageScore: 80, trend: 'up', lastAssessmentDate: '2025-09-30', totalAssessments: 9 },
          { subjectId: 's4', subjectName: 'History', score: 86, averageScore: 78, trend: 'stable', lastAssessmentDate: '2025-10-03', totalAssessments: 6 },
          { subjectId: 's5', subjectName: 'Art', score: 93, averageScore: 82, trend: 'up', lastAssessmentDate: '2025-10-02', totalAssessments: 5 },
        ],
        recentActivity: [
          { id: 'a7', type: 'assignment', title: 'Creative Writing', date: '2025-09-30', score: 92, subject: 'English' },
        ],
      },
    ],
  },
  {
    id: 'c3',
    name: 'Class 6A',
    grade: '6th Grade',
    studentCount: 28,
    averageScore: 76.8,
    subjects: subjects,
    students: [
      {
        id: 'st6',
        name: 'James Wilson',
        avatar: '👦',
        classId: 'c3',
        overallScore: 83,
        attendance: 92,
        strengths: ['History', 'Science'],
        weaknesses: ['Art'],
        subjectPerformances: [
          { subjectId: 's1', subjectName: 'Mathematics', score: 80, averageScore: 76, trend: 'stable', lastAssessmentDate: '2025-10-02', totalAssessments: 8 },
          { subjectId: 's2', subjectName: 'Science', score: 88, averageScore: 77, trend: 'up', lastAssessmentDate: '2025-10-01', totalAssessments: 7 },
          { subjectId: 's3', subjectName: 'English', score: 82, averageScore: 79, trend: 'stable', lastAssessmentDate: '2025-09-30', totalAssessments: 9 },
          { subjectId: 's4', subjectName: 'History', score: 90, averageScore: 73, trend: 'up', lastAssessmentDate: '2025-10-03', totalAssessments: 6 },
          { subjectId: 's5', subjectName: 'Art', score: 75, averageScore: 80, trend: 'down', lastAssessmentDate: '2025-10-02', totalAssessments: 5 },
        ],
        recentActivity: [
          { id: 'a8', type: 'assessment', title: 'History Timeline Project', date: '2025-10-03', score: 90, subject: 'History' },
        ],
      },
    ],
  },
];

export const generateLeaderboard = (): LeaderboardEntry[] => {
  const allStudents = mockClasses.flatMap(cls => 
    cls.students.map(student => ({
      studentId: student.id,
      studentName: student.name,
      classId: cls.id,
      className: cls.name,
      overallScore: student.overallScore,
      topSubject: student.strengths[0] || 'N/A',
    }))
  );

  const sorted = allStudents.sort((a, b) => b.overallScore - a.overallScore);
  
  return sorted.map((entry, index) => ({
    ...entry,
    rank: index + 1,
    badge: index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : undefined,
  }));
};

export const getDashboardStats = (): DashboardStats => {
  const totalStudents = mockClasses.reduce((sum, cls) => sum + cls.students.length, 0);
  const totalClasses = mockClasses.length;
  
  const allStudents = mockClasses.flatMap(cls => cls.students);
  const averageAttendance = allStudents.reduce((sum, s) => sum + s.attendance, 0) / allStudents.length;
  const averageScore = allStudents.reduce((sum, s) => sum + s.overallScore, 0) / allStudents.length;
  
  const improvingStudents = allStudents.filter(s => 
    s.subjectPerformances.filter(p => p.trend === 'up').length >= 2
  ).length;
  
  const needsAttention = allStudents.filter(s => s.overallScore < 75 || s.attendance < 90).length;

  return {
    totalStudents,
    totalClasses,
    averageAttendance: Math.round(averageAttendance * 10) / 10,
    averageScore: Math.round(averageScore * 10) / 10,
    improvingStudents,
    needsAttention,
  };
};
