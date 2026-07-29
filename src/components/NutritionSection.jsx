import { useState } from "react";

function NutritionSection({
  calories,
  calorieGoal,
  protein,
  proteinGoal,
  updateNutrition
}) {
  const [calorieInput, setCalorieInput] = useState(calories);
  const [proteinInput, setProteinInput] = useState(protein);

  function handleSubmit(event) {
    event.preventDefault();

    const newCalories = parseInt(calorieInput, 10);
    const newProtein = parseInt(proteinInput, 10);

    if (
      isNaN(newCalories) ||
      isNaN(newProtein) ||
      newCalories < 0 ||
      newProtein < 0
    ) {
      alert("Please enter valid nutrition values.");
      return;
    }

    updateNutrition(newCalories, newProtein);
  }

  return (
    <section className="dashboard-section">
      <h2>Nutrition</h2>

      <div className="weight-grid">
        <div className="weight-card">
          <h3>Calories</h3>
          <p>
            {calories} / {calorieGoal}
          </p>
        </div>

        <div className="weight-card">
          <h3>Protein</h3>
          <p>
            {protein} g / {proteinGoal} g
          </p>
        </div>
      </div>

      <form className="nutrition-form" onSubmit={handleSubmit}>
        <label htmlFor="calories">
          Calories
        </label>

        <input
          id="calories"
          type="number"
          value={calorieInput}
          onChange={(event) => setCalorieInput(event.target.value)}
        />

        <label htmlFor="protein">
          Protein (g)
        </label>

        <input
          id="protein"
          type="number"
          value={proteinInput}
          onChange={(event) => setProteinInput(event.target.value)}
        />

        <button type="submit">
          Save Nutrition
        </button>
      </form>
    </section>
  );
}

export default NutritionSection;