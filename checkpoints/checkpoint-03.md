# Checkpoint 03 – Core Features Complete

**Date:** 29 July 2026

---

## Overview

This checkpoint marks the completion of FitLog's core functionality. The application has transitioned from a static dashboard into a fully interactive React application with persistent data storage.

---

## Features Completed

### Weight Tracking

- Users can update their current body weight.
- Weight updates immediately across the application.
- Weight data persists using localStorage.
- Starting weight and goal weight are managed through a centralized configuration.

### Nutrition Tracking

- Users can log daily calories.
- Users can log daily protein intake.
- Dashboard updates instantly after saving.
- Nutrition data persists between sessions.

### Workout Tracking

- Users can select today's workout using a dropdown menu.
- Workout selection updates immediately.
- Workout data persists using localStorage.

---

## Technical Improvements

- Centralized application defaults using `defaultProfile.js`.
- Removed hardcoded configuration values throughout the application.
- Improved code maintainability by referencing a single configuration source.
- Introduced React Hooks including:
  - useState
  - useEffect
- Implemented controlled forms.
- Implemented reusable React components.
- Connected components through props.

---

## Current Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── SummaryCards.jsx
│   ├── WeightSection.jsx
│   ├── NutritionSection.jsx
│   ├── WorkoutSection.jsx
│   └── Footer.jsx
│
├── config/
│   └── defaultProfile.js
│
├── styles/
│   └── App.css
│
├── App.jsx
├── main.jsx
```

---

## Skills Demonstrated

- React
- JavaScript (ES6+)
- Component-based architecture
- State management
- React Hooks
- Props
- Controlled forms
- Local storage
- Responsive CSS
- Git & GitHub

---

## Lessons Learned

This milestone reinforced several important React concepts:

- Keeping state in a single source of truth.
- Passing data through props.
- Separating configuration from application logic.
- Persisting application state using localStorage.
- Building reusable, modular components.

---

## Next Milestone

Version 1.0 Release

Remaining tasks:

- Deploy application using Vercel.
- Update README.
- Capture application screenshots.
- Create GitHub Release (v1.0.0).
- Add project to resume and portfolio.