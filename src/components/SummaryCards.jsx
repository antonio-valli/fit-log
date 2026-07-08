function SummaryCards({
  currentWeight,
  goalWeight,
  calories,
  calorieGoal,
  protein,
  proteinGoal
}) {
  const cards = [
    {
      title: "Current Weight",
      value: `${currentWeight.toFixed(1)} kg`
    },
    {
      title: "Goal Weight",
      value: `${goalWeight.toFixed(1)} kg`
    },
    {
      title: "Calories",
      value: `${calories} / ${calorieGoal}`
    },
    {
      title: "Protein",
      value: `${protein} g / ${proteinGoal} g`
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
        </article>
      ))}
    </section>
  );
}

export default SummaryCards;