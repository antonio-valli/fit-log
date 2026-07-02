import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import WeightSection from "./components/WeightSection";
import NutritionSection from "./components/NutritionSection";
import WorkoutSection from "./components/WorkoutSection";
import Footer from "./components/Footer";

import "./styles/App.css";

function App() {
  return (
    <div className="app">

      <Header />

      <main className="dashboard">

        <SummaryCards />

        <WeightSection />

        <NutritionSection />

        <WorkoutSection />

      </main>

      <Footer />

    </div>
  );
}

export default App;