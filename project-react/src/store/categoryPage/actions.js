export const CATEGORY_PAGE_LOAD_DAILY_OPERATIONS_SUCCESS =
  "CATEGORY_PAGE_LOAD_DAILY_OPERATIONS_SUCCESS";

export const loadDailyOperationsSuccess = operations => ({
  type: CATEGORY_PAGE_LOAD_DAILY_OPERATIONS_SUCCESS,
  payload: {
    operations
  }
});

export const loadDailyOperations = (id, day) => dispatch => {
  const startOfTheDay = new Date(day).setHours(0, 0, 0, 0);
  const endOfTheDay = startOfTheDay + 86400000;
  fetch(
    `http://localhost:3001/operations?date_gte=${startOfTheDay}&date_lte=${endOfTheDay}&userId=${id}`
  )
    .then(response => response.json())
    .then(json => {
      dispatch(loadDailyOperationsSuccess(json));
    });
};
