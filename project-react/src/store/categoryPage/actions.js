export const CATEGORY_PAGE_LOAD_DAILY_OPERATIONS_SUCCESS =
  "CATEGORY_PAGE_LOAD_DAILY_OPERATIONS_SUCCESS";

export const loadDailyOperationsSuccess = operations => ({
  type: CATEGORY_PAGE_LOAD_DAILY_OPERATIONS_SUCCESS,
  payload: {
    operations
  }
});

export const loadDailyOperations = (id, date) => dispatch => {
  const startOfTheDay = new Date(date).setHours(0, 0, 0, 0);
  const endOfTheDay = startOfTheDay + 86400000;
  fetch(
    `http://localhost:3001/operations?date_gte=${startOfTheDay}&date_lte=${endOfTheDay}&userId=${id}`
  )
    .then(response => response.json())
    .then(json => {
      dispatch(loadDailyOperationsSuccess(json));
    });
};

export const setOperation = operation => dispatch => {
  fetch("http://localhost:3001/operations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(operation)
  }).then(() =>
    dispatch(loadDailyOperations(operation.userId, operation.date))
  );
};
