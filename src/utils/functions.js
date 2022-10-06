// For pagination

const getListDataToDisplay = (page, list) =>
  page === 1 ? list.slice(0, 10) : list.slice(10);

export { getListDataToDisplay };
