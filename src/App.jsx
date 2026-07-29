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

  const [calories, setCalories] = useState(() => {
    const saved = localStorage.getItem("calories");
    return saved ? parseInt(saved, 10) : 1650;
  });

  const [protein, setProtein] = useState(() => {
    const saved = localStorage.getItem("protein");
    return saved ? parseInt(saved, 10) : 160;
  });

  const calorieGoal = 1800;
  const proteinGoal = 160;
  const goalWeight = 75.0;

  useEffect(() => {
    localStorage.setItem("currentWeight", currentWeight);
  }, [currentWeight]);

  useEffect(() => {
    localStorage.setItem("calories", calories);
  }, [calories]);

  useEffect(() => {
    localStorage.setItem("protein", protein);
  }, [protein]);


  function updateNutrition(newCalories, newProtein) {
    setCalories(newCalories);
    setProtein(newProtein);
  }

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

        <NutritionSection
          calories={calories}
          calorieGoal={calorieGoal}
          protein={protein}
          proteinGoal={proteinGoal}
          updateNutrition={updateNutrition}
        />

        <WorkoutSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;