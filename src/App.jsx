import { useEffect, useState } from "react";

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

    return savedWeight ? parseFloat(savedWeight) : 92.0;
  });

  useEffect(() => {
    localStorage.setItem("currentWeight", currentWeight);
  }, [currentWeight]);

  const goalWeight = 85.0;
  const calories = 1540;
  const calorieGoal = 1700;
  const protein = 165;
  const proteinGoal = 170;

  const weeklyChange = currentWeight - 92.0;

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
          weeklyChange={weeklyChange}
          updateWeight={updateWeight}
        />

        <NutritionSection />

        <WorkoutSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;