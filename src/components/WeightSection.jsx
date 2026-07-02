function WeightSection() {
  return (
    <section className="dashboard-section">
      <h2>Weight Progress</h2>

      <div className="weight-grid">
        <div className="weight-card">
          <h3>Current Weight</h3>
          <p>92.0 kg</p>
        </div>

        <div className="weight-card">
          <h3>Goal Weight</h3>
          <p>85.0 kg</p>
        </div>

        <div className="weight-card">
          <h3>Weekly Change</h3>
          <p>-0.8 kg</p>
        </div>
      </div>
    </section>
  );
}

export default WeightSection;