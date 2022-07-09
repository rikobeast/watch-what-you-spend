export const getNameOfSelectedDay = (
  fullYear: number,
  monthIndex: number,
  selectedDay: number
) => {
  return new Date(fullYear, monthIndex, selectedDay).toLocaleDateString(
    'en-us',
    { weekday: 'long' }
  );
};
