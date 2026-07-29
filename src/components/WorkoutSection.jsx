import { useState } from "react";

function WorkoutSection({
  workout,
  updateWorkout
}) {
  const [selectedWorkout, setSelectedWorkout] = useState(workout);

  function handleSubmit(event) {
    event.preventDefault();

    updateWorkout(selectedWorkout);
  }

  return (
    <section className="dashboard-section">
      <h2>Workout</h2>

      <div className="weight-grid">
        <div className="weight-card">
          <h3>Today's Workout</h3>
          <p>{workout}</p>
        </div>
      </div>

      <form className="workout-form" onSubmit={handleSubmit}>
        <label htmlFor="workout">
          Select Workout
        </label>

        <select
          id="workout"
          value={selectedWorkout}
          onChange={(event) => setSelectedWorkout(event.target.value)}
        >
          <option value="Push">Push</option>
          <option value="Pull">Pull</option>
          <option value="Legs">Legs</option>
          <option value="Upper Body">Upper Body</option>
          <option value="Lower Body">Lower Body</option>
          <option value="Cardio">Cardio</option>
          <option value="Full Body">Full Body</option>
          <option value="Rest Day">Rest Day</option>
        </select>

        <button type="submit">
          Save Workout
        </button>
      </form>
    </section>
  );
}

export default WorkoutSection;