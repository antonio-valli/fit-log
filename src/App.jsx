import { useEffect, useState } from "react";
import WeightHistory from "./components/WeightHistory";
import DEFAULT_PROFILE from "./config/defaultProfile";
import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import WeightSection from "./components/WeightSection";
import NutritionSection from "./components/NutritionSection";
import WorkoutSection from "./components/WorkoutSection";
import Footer from "./components/Footer";

import {
  getLocalDate,
  loadWeightHistory,
  saveWeightHistory
} from "./utils/weightHistory";

import "./styles/App.css";

function App() {
  const [weightHistory, setWeightHistory] = useState(() =>
    loadWeightHistory(DEFAULT_PROFILE.startingWeight)
  );

  const [calories, setCalories] = useState(() => {
    const saved = localStorage.getItem("calories");

    return saved
      ? parseInt(saved, 10)
      : DEFAULT_PROFILE.calorieGoal;
  });

  const [protein, setProtein] = useState(() => {
    const saved = localStorage.getItem("protein");

    return saved
      ? parseInt(saved, 10)
      : DEFAULT_PROFILE.proteinGoal;
  });

  const [workout, setWorkout] = useState(() => {
    return (
      localStorage.getItem("workout") ??
      DEFAULT_PROFILE.defaultWorkout
    );
  });

  const calorieGoal = DEFAULT_PROFILE.calorieGoal;
  const proteinGoal = DEFAULT_PROFILE.proteinGoal;
  const goalWeight = DEFAULT_PROFILE.goalWeight;

  const latestWeightEntry = weightHistory.at(-1);

  const currentWeight = latestWeightEntry
    ? latestWeightEntry.weight
    : DEFAULT_PROFILE.startingWeight;

  const totalWeightLost =
    DEFAULT_PROFILE.startingWeight - currentWeight;

  useEffect(() => {
    saveWeightHistory(weightHistory);

    localStorage.setItem("currentWeight", currentWeight);
  }, [weightHistory, currentWeight]);

  useEffect(() => {
    localStorage.setItem("calories", calories);
  }, [calories]);

  useEffect(() => {
    localStorage.setItem("protein", protein);
  }, [protein]);

  useEffect(() => {
    localStorage.setItem("workout", workout);
  }, [workout]);

  function updateNutrition(newCalories, newProtein) {
    setCalories(newCalories);
    setProtein(newProtein);
  }

  function updateWorkout(newWorkout) {
    setWorkout(newWorkout);
  }

  function updateWeight(newWeight) {
    const today = getLocalDate();

    setWeightHistory((previousHistory) => {
      const existingEntry = previousHistory.find(
        (entry) => entry.date === today
      );

      if (existingEntry) {
        return previousHistory.map((entry) =>
          entry.date === today
            ? { ...entry, weight: newWeight }
            : entry
        );
      }

      return [
        ...previousHistory,
        {
          id: today,
          date: today,
          weight: newWeight
        }
      ].sort((a, b) => a.date.localeCompare(b.date));
    });
  }

  function deleteWeight(entryId) {
  setWeightHistory((previousHistory) =>
    previousHistory.filter((entry) => entry.id !== entryId)
  );
}

  return (
    <div className="app">
      <Header />

      <main className="dashboard">
        <SummaryCards
          currentWeight={currentWeight}
          goalWeight={goalWeight}
          calories={calories}
          calorieGoal={calorieGoal}
          protein={protein}
          proteinGoal={proteinGoal}
        />

        <WeightSection
          currentWeight={currentWeight}
          goalWeight={goalWeight}
          totalWeightLost={totalWeightLost}
          updateWeight={updateWeight}
        />

        <WeightHistory
          history={weightHistory}
          deleteWeight={deleteWeight}
        />

        <NutritionSection
          calories={calories}
          calorieGoal={calorieGoal}
          protein={protein}
          proteinGoal={proteinGoal}
          updateNutrition={updateNutrition}
        />

        <WorkoutSection
          workout={workout}
          updateWorkout={updateWorkout}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
