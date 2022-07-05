export const getDaysInCurrentMonth = (
  fullYear: number,
  currentMonth: number
) => {
  let month = currentMonth + 1;
  const days = new Date(fullYear, month, 0).getDate();
  return Array(days)
    .fill(null)
    .map((_, dayNumber) => dayNumber + 1);
};
