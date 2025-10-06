# Quick Setup Guide

## Getting Started

This Teacher Dashboard mobile app is ready to run with mock data. Follow these steps to get it running on your device or simulator.

### 1. Install Dependencies

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

### 2. Start the Development Server

```bash
npm start
```

This will start the Expo development server and show you a QR code.

### 3. Run the App

#### On Your Phone (Easiest Method)

1. **iOS**: Download "Expo Go" from the App Store
2. **Android**: Download "Expo Go" from Google Play Store
3. Open Expo Go and scan the QR code shown in your terminal
4. The app will load on your device!

#### On a Simulator/Emulator

**iOS Simulator (Mac only)**:
```bash
npm run ios
```

**Android Emulator**:
```bash
npm run android
```
Make sure you have Android Studio installed with an emulator set up.

**Web Browser** (for testing):
```bash
npm run web
```

## What You'll See

### Dashboard Screen
- Statistics overview showing total students, classes, and averages
- Quick metrics for improving students and those needing attention
- List of all your classes

### Class Detail Screen
- Tap any class to see:
  - Subject performance breakdown
  - Complete student list
  - Class statistics

### Student Detail Screen
- Tap any student to see:
  - Overall performance and attendance
  - Subject-by-subject scores with trends (↑ improving, ↓ declining, → stable)
  - Identified strengths and weaknesses
  - Performance compared to class average
  - Recent activity

### Leaderboard Screen
- School-wide student rankings
- Medal badges (🥇🥈🥉) for top 3 students
- Filter by class
- Quick access to student details

## Customizing the App

### Modifying Mock Data

Edit `src/data/mockData.ts` to customize:

1. **Add more students**:
```typescript
{
  id: 'st7',
  name: 'Your Student Name',
  avatar: '👦', // or '👧'
  classId: 'c1',
  overallScore: 85,
  attendance: 95,
  // ... more fields
}
```

2. **Add new classes**:
```typescript
{
  id: 'c4',
  name: 'Class 7A',
  grade: '7th Grade',
  studentCount: 20,
  // ... more fields
}
```

3. **Change subjects**:
```typescript
{ id: 's6', name: 'Music', color: '#EC4899' }
```

### Changing Colors

Each component has inline styles. Look for `StyleSheet.create()` at the bottom of component files.

Main brand color: `#3B82F6` (blue) - change this throughout for a different theme.

## App Structure

```
teacher-dashboard-mobile/
├── App.tsx                          # Main app entry
├── src/
│   ├── components/                  # Reusable components
│   │   ├── StatCard.tsx            # Statistics display card
│   │   ├── ProgressBar.tsx         # Visual progress indicator
│   │   ├── StudentCard.tsx         # Student list item
│   │   └── ClassCard.tsx           # Class list item
│   ├── screens/                     # Main screens
│   │   ├── DashboardScreen.tsx     # Home/Overview
│   │   ├── ClassDetailScreen.tsx   # Class details
│   │   ├── StudentDetailScreen.tsx # Student profile
│   │   └── LeaderboardScreen.tsx   # Rankings
│   ├── navigation/
│   │   └── AppNavigator.tsx        # Navigation setup
│   ├── types/
│   │   └── index.ts                # TypeScript types
│   └── data/
│       └── mockData.ts             # Sample data
```

## Troubleshooting

### App won't start
- Make sure you ran `npm install`
- Try clearing cache: `expo start -c`

### QR code won't scan
- Make sure your phone and computer are on the same WiFi network
- Try the "Tunnel" connection option in Expo

### Styles look weird
- This app is optimized for mobile. Use a phone or mobile simulator
- Adjust styles in component files if needed

### TypeScript errors
- Run `npm install` to ensure all type definitions are installed
- Check that your Node version is 14 or higher

## Next Steps

### Connect to Real Data

To connect this to a real backend:

1. Create API service layer in `src/services/api.ts`
2. Replace mock data imports with API calls
3. Add loading states and error handling
4. Implement authentication

### Add More Features

Ideas for expansion:
- Assignment creation interface
- Attendance marking
- Grade input forms
- Report generation
- Parent notifications
- Calendar/schedule view
- Analytics dashboard

## Support

If you encounter any issues:
1. Check the console for error messages
2. Review the component where the error occurs
3. Verify your data structure matches the TypeScript types

Happy teaching! 📚✨
