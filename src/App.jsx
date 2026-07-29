import { useEffect, useState } from "react";

import DEFAULT_PROFILE from "./config/defaultProfile";
import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import WeightSection from "./components/WeightSection";
import NutritionSection from "./components/NutritionSection";
import WorkoutSection from "./components/WorkoutSection";
import Footer from "./components/Footer";

import "./styles/App.css";

function App() {
  const [currentWeight, setCurrentWeight] = useState(() => {
    const savedWeight = localStorage.getItem("currentWeight");

    return savedWeight
      ? parseFloat(savedWeight)
      : DEFAULT_PROFILE.startingWeight;
  });

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

  useEffect(() => {
    localStorage.setItem("currentWeight", currentWeight);
  }, [currentWeight]);

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

  const totalWeightLost =
    DEFAULT_PROFILE.startingWeight - currentWeight;

  function updateWeight(newWeight) {
    setCurrentWeight(newWeight);
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