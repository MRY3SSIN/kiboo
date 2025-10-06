# Teacher Dashboard Mobile App

A comprehensive mobile application designed to help teachers track student progress, analyze performance, and identify strengths and weaknesses across different subjects.

## Features

### 📊 Dashboard Overview
- View total students, classes, and overall statistics
- Track average attendance and scores
- Monitor improving students and those needing attention
- Quick access to all classes

### 🏫 Class Management
- View detailed class statistics
- Track subject performance by class
- See all students in a class sorted by performance
- Monitor class averages and trends

### 👨‍🎓 Student Details
- Individual student profiles with comprehensive data
- Subject-by-subject performance tracking with trends
- Visual representation of strengths and weaknesses
- Performance comparison with class averages
- Recent activity timeline
- Attendance tracking

### 🏆 Leaderboard
- School-wide student rankings
- Filter by class or view all students
- Medal badges for top 3 performers
- Quick access to student profiles
- View top subjects for each student

## Technology Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **React Navigation** for seamless navigation
- Modern, mobile-optimized UI design

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (optional but recommended)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on your device:
   - Install Expo Go app on your iOS or Android device
   - Scan the QR code from the terminal
   
   Or run on simulators:
   - iOS: `npm run ios`
   - Android: `npm run android`
   - Web: `npm run web`

## Project Structure

```
teacher-dashboard-mobile/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── StatCard.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── StudentCard.tsx
│   │   └── ClassCard.tsx
│   ├── screens/           # Main app screens
│   │   ├── DashboardScreen.tsx
│   │   ├── ClassDetailScreen.tsx
│   │   ├── StudentDetailScreen.tsx
│   │   └── LeaderboardScreen.tsx
│   ├── navigation/        # Navigation configuration
│   │   └── AppNavigator.tsx
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts
│   └── data/             # Mock data and data utilities
│       └── mockData.ts
├── App.tsx               # Main app component
├── package.json
└── README.md
```

## Features in Detail

### Dashboard
- **Quick Stats**: See at-a-glance metrics for your entire teaching load
- **Class Cards**: Tap any class to view detailed information
- **Performance Indicators**: Color-coded metrics for easy identification

### Class View
- **Subject Performance**: Visual bars showing average scores per subject
- **Student List**: Sortable list of all students with quick stats
- **Class Metrics**: Average score, student count, and subject breakdown

### Student Profile
- **Performance Trends**: Track whether students are improving, declining, or stable
- **Strength Identification**: Automatically identifies top-performing subjects
- **Weakness Detection**: Highlights subjects needing attention
- **Detailed Analysis**: Compare student performance to class averages
- **Activity Feed**: See recent assessments and assignments

### Leaderboard
- **School-wide Rankings**: See how students compare across all classes
- **Medal System**: Gold, silver, and bronze badges for top performers
- **Class Filters**: Focus on specific classes or view all students
- **Performance Metrics**: Overall scores and best subjects displayed

## Data Structure

The app uses a comprehensive data model including:
- **Students**: Profile, scores, attendance, subject performance
- **Classes**: Student lists, averages, subjects
- **Subjects**: Name, color coding
- **Performance Metrics**: Scores, trends, comparisons
- **Activities**: Recent assessments and assignments

## Customization

### Adding New Subjects
Edit `src/data/mockData.ts` and add to the `subjects` array:

```typescript
{ id: 's6', name: 'Music', color: '#EC4899' }
```

### Modifying Mock Data
Update the `mockClasses` array in `src/data/mockData.ts` to add your own students, classes, and performance data.

### Styling
All component styles are defined inline using StyleSheet. Modify colors, spacing, and typography in individual component files.

## Future Enhancements

- [ ] Real backend integration with API
- [ ] Push notifications for important updates
- [ ] Export reports functionality
- [ ] Parent access portal
- [ ] Assignment creation and management
- [ ] Attendance marking interface
- [ ] Grade calculation tools
- [ ] Calendar integration
- [ ] Multi-language support
- [ ] Dark mode theme

## Contributing

This is a demonstration project. Feel free to fork and customize for your specific needs.

## License

See LICENSE file for details.

## Support

For questions or issues, please open an issue in the repository.

---

Built with ❤️ for educators
