export const getBlankDays = (
  daysOfWeek: string[],
  fullYear: number,
  monthIndex: number
) => {
  let blankDays = [];
  const firstDayOfMonth = new Date(fullYear, monthIndex, 1);
  const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  const paddingDays = daysOfWeek.indexOf(dateString.split(', ')[0]);

  for (let index = 1; index <= paddingDays; index++) {
    blankDays.push(index);
  }

  return blankDays;
};
