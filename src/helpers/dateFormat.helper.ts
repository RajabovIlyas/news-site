enum Month {
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
}

export const dateFormat = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getUTCDay() + 1} ${Month[date.getMonth()]} ${date.getFullYear()} `;
};
