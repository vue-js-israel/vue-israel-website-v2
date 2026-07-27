export const sortByDate = (a, b) => {
  return new Date(b.date) - new Date(a.date);
};

export const sortDescendingByDate = (events) => {
  return [...events].sort(sortByDate);
};
