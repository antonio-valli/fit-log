function NutritionSection() {
  const meals = [
    {
      meal: "Breakfast",
      food: "Protein Shake"
    },
    {
      meal: "Lunch",
      food: "Chicken & Rice Bowl"
    },
    {
      meal: "Dinner",
      food: "Chicken Wrap"
    }
  ];

  return (
    <section className="dashboard-section">
      <h2>Today's Nutrition</h2>

      <div className="nutrition-card">

        {meals.map((item) => (
          <div
            key={item.meal}
            className="meal-row"
          >
            <span className="meal-title">
              {item.meal}
            </span>

            <span className="meal-food">
              {item.food}
            </span>
          </div>
        ))}

        <div className="nutrition-totals">

          <div className="total-item">
            <h3>Calories</h3>
            <p>1540 / 1700 kcal</p>
          </div>

          <div className="total-item">
            <h3>Protein</h3>
            <p>165 g / 170 g</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default NutritionSection;