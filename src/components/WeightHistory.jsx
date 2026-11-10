
function WeightHistory({ history, deleteWeight }) {
  const sortedHistory = [...history].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  function formatDate(dateString) {
    return new Date(`${dateString}T00:00:00`).toLocaleDateString(
      "en-AU",
      {
        day: "numeric",
        month: "short",
        year: "numeric"
      }
    );
  }

  return (
    <section className="dashboard-section weight-history">
      <h2>Weight History</h2>

      {sortedHistory.length === 0 ? (
        <p className="history-empty">
          No weight records yet. Update your weight to get started.
        </p>
      ) : (
        <div className="history-table-wrapper">
          <table className="history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Weight</th>
                <th>Change</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {sortedHistory.map((entry) => {
                const previousEntry = history
                  .filter((item) => item.date < entry.date)
                  .sort((a, b) => b.date.localeCompare(a.date))[0];

                const change = previousEntry
                  ? entry.weight - previousEntry.weight
                  : null;

                return (
                  <tr key={entry.id}>
                    <td>{formatDate(entry.date)}</td>
                    <td>{entry.weight.toFixed(1)} kg</td>
                    <td>
                      {change === null
                        ? "—"
                        : `${change > 0 ? "+" : ""}${change.toFixed(1)} kg`}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="history-delete"
                        onClick={() => deleteWeight(entry.id)}
                        aria-label={`Delete weight record from ${formatDate(entry.date)}`}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default WeightHistory;
