import { useState } from "react";

function WeightSection({
  currentWeight,
  goalWeight,
  totalWeightLost,
  updateWeight
}) {
  const [weightInput, setWeightInput] = useState(currentWeight.toFixed(1));

  function handleSubmit(event) {
    event.preventDefault();

    const newWeight = parseFloat(weightInput);

    if (isNaN(newWeight) || newWeight <= 0) {
      alert("Please enter a valid weight.");
      return;
    }

    updateWeight(newWeight);
  }

  return (
    <section className="dashboard-section">
      <h2>Weight Progress</h2>

      <div className="weight-grid">
        <div className="weight-card">
          <h3>Current Weight</h3>
          <p>{currentWeight.toFixed(1)} kg</p>
        </div>

        <div className="weight-card">
          <h3>Goal Weight</h3>
          <p>{goalWeight.toFixed(1)} kg</p>
        </div>

        <div className="weight-card">
          <h3>Weight Lost</h3>
          <p>{totalWeightLost.toFixed(1)} kg</p>
        </div>
      </div>

      <form className="weight-form" onSubmit={handleSubmit}>
        <label htmlFor="weightInput">
          Update Today's Weight
        </label>

        <input
          id="weightInput"
          type="number"
          step="0.1"
          value={weightInput}
          onChange={(event) => setWeightInput(event.target.value)}
        />

        <button type="submit">
          Update Weight
        </button>
      </form>
    </section>
  );
}

export default WeightSection;