function SummaryCards({
  currentWeight,
  goalWeight,
  calories,
  calorieGoal,
  protein,
  proteinGoal
}) {
  const weightProgress = Math.min(
    ((92 - currentWeight) / (92 - goalWeight)) * 100,
    100
  );

  const calorieProgress = Math.min(
    (calories / calorieGoal) * 100,
    100
  );

  const proteinProgress = Math.min(
    (protein / proteinGoal) * 100,
    100
  );

  const cards = [
    {
      title: "Current Weight",
      value: `${currentWeight.toFixed(1)} kg`,
      progress: weightProgress
    },
    {
      title: "Calories",
      value: `${calories} / ${calorieGoal}`,
      progress: calorieProgress
    },
    {
      title: "Protein",
      value: `${protein} g / ${proteinGoal} g`,
      progress: proteinProgress
    },
    {
      title: "Goal Weight",
      value: `${goalWeight.toFixed(1)} kg`,
      progress: 100
    }
  ];

  return (
    <section className="summary-grid">
      {cards.map((card) => (
        <article
          key={card.title}
          className="summary-card"
        >
          <h3>{card.title}</h3>

          <p>{card.value}</p>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${card.progress}%`
              }}
            />
          </div>

          <small>{Math.round(card.progress)}%</small>
        </article>
      ))}
    </section>
  );
}

export default SummaryCards;