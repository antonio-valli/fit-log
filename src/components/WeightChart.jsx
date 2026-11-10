function WeightChart({ history, goalWeight }) {
  if (history.length < 2) {
    return (
      <section className="dashboard-section weight-chart">
        <h2>Weight Progress</h2>
        <p className="chart-empty">
          Record at least two weigh-ins to see your progress chart.
        </p>
      </section>
    );
  }

  const sortedHistory = [...history].sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  const weights = sortedHistory.map((entry) => entry.weight);

  const minWeight = Math.min(...weights, goalWeight);
  const maxWeight = Math.max(...weights, goalWeight);

  const chartRange = Math.max(maxWeight - minWeight, 1);

  const chartWidth = 700;
  const chartHeight = 300;

  const padding = {
    top: 30,
    right: 30,
    bottom: 45,
    left: 55
  };

  const plotWidth = chartWidth - padding.left - padding.right;
  const plotHeight = chartHeight - padding.top - padding.bottom;

    const firstDate = new Date(
        `${sortedHistory[0].date}T00:00:00`
    ).getTime();

  const lastDate = new Date(
        `${sortedHistory[sortedHistory.length - 1].date}T00:00:00`
    ).getTime();

  const dateRange = lastDate - firstDate;

  const points = sortedHistory.map((entry) => {
    const dateValue = new Date(
      `${entry.date}T00:00:00`
    ).getTime();

    const x =
      padding.left +
      ((dateValue - firstDate) / dateRange) * plotWidth;

    const y =
      padding.top +
      ((maxWeight - entry.weight) / chartRange) * plotHeight;

    return {
      ...entry,
      x,
      y
    };
  });

  const goalY =
    padding.top +
    ((maxWeight - goalWeight) / chartRange) * plotHeight;

  const chartPoints = points
    .map((point) => `${point.x},${point.y}`)
    .join(" ");

  return (
    <section className="dashboard-section weight-chart">
      <h2>Weight Progress</h2>

            <div className="chart-container">
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          role="img"
          aria-label="Weight progress chart showing historical weigh-ins and goal weight"
        >
          {/* Horizontal grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((fraction) => {
            const y = padding.top + fraction * plotHeight;

            const weight =
              maxWeight - fraction * chartRange;

            return (
              <g key={fraction}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={chartWidth - padding.right}
                  y2={y}
                  stroke="#e5e7eb"
                  strokeDasharray="4 4"
                />

                <text
                  x={padding.left - 10}
                  y={y + 4}
                  textAnchor="end"
                  fontSize="12"
                  fill="#6b7280"
                >
                  {weight.toFixed(1)}
                </text>
              </g>
            );
          })}

          {/* Goal weight reference line */}
          <line
            x1={padding.left}
            y1={goalY}
            x2={chartWidth - padding.right}
            y2={goalY}
            stroke="#16a34a"
            strokeWidth="2"
            strokeDasharray="7 5"
          />

          {/* Goal weight label */}
          <text
            x={chartWidth - padding.right}
            y={goalY - 10}
            textAnchor="end"
            fontSize="12"
            fill="#16a34a"
            fontWeight="bold"
          >
            Goal: {goalWeight.toFixed(1)} kg
          </text>

          {/* Weight progress line */}
          <polyline
            points={chartPoints}
            fill="none"
            stroke="#2563eb"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Individual weigh-in points */}
          {points.map((point) => (
            <circle
              key={point.id}
              cx={point.x}
              cy={point.y}
              r="5"
              fill="#2563eb"
              stroke="white"
              strokeWidth="2"
            >
              <title>
                {point.date}: {point.weight.toFixed(1)} kg
              </title>
            </circle>
          ))}

          {/* Date labels */}
          {[
            points[0],
            points[points.length - 1]
          ].map((point, index) => (
            <text
              key={`${point.id}-${index}`}
              x={point.x}
              y={chartHeight - 12}
              textAnchor={index === 0 ? "start" : "end"}
              fontSize="12"
              fill="#6b7280"
            >
              {new Date(
                `${point.date}T00:00:00`
              ).toLocaleDateString("en-AU", {
                day: "numeric",
                month: "short"
              })}
            </text>
          ))}
        </svg>
      </div>
    </section>
  );
}

export default WeightChart;