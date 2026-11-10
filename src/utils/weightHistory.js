
const STORAGE_KEY = "weightHistory";

// Returns today's date in local YYYY-MM-DD format.
export function getLocalDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// Loads and validates historical weight records.
export function loadWeightHistory(startingWeight) {
  const savedHistory = localStorage.getItem(STORAGE_KEY);

  if (savedHistory) {
    try {
      const parsedHistory = JSON.parse(savedHistory);

      if (
        Array.isArray(parsedHistory) &&
        parsedHistory.every(
          (entry) =>
            typeof entry.id === "string" &&
            typeof entry.date === "string" &&
            Number.isFinite(entry.weight) &&
            entry.weight > 0
        )
      ) {
        return parsedHistory.sort((a, b) =>
          a.date.localeCompare(b.date)
        );
      }
    } catch {
      console.warn("Unable to read saved weight history.");
    }
  }

  // Migrate the existing currentWeight value.
  const existingWeight = Number(
    localStorage.getItem("currentWeight")
  );

  const initialWeight =
    Number.isFinite(existingWeight) && existingWeight > 0
      ? existingWeight
      : startingWeight;

  return [
    {
      id: getLocalDate(),
      date: getLocalDate(),
      weight: initialWeight
    }
  ];
}

// Saves historical records to Local Storage.
export function saveWeightHistory(history) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(history)
  );
}
