function WorkoutSection() {
  const exercises = [
    {
      name: "Bench Press",
      sets: 3,
      reps: 10,
      weight: "60 kg"
    },
    {
      name: "Lat Pulldown",
      sets: 3,
      reps: 12,
      weight: "45 kg"
    },
    {
      name: "Shoulder Press",
      sets: 3,
      reps: 10,
      weight: "25 kg"
    }
  ];

  return (
    <section className="dashboard-section">
      <h2>Today's Workout</h2>

      <div className="workout-card">
        <h3>Upper Body</h3>

        <table className="workout-table">
          <thead>
            <tr>
              <th>Exercise</th>
              <th>Sets</th>
              <th>Reps</th>
              <th>Weight</th>
            </tr>
          </thead>

          <tbody>
            {exercises.map((exercise) => (
              <tr key={exercise.name}>
                <td>{exercise.name}</td>
                <td>{exercise.sets}</td>
                <td>{exercise.reps}</td>
                <td>{exercise.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default WorkoutSection;