export const CATEGORY_PAGE_LOAD_DAILY_OPERATIONS_SUCCESS =
  "CATEGORY_PAGE_LOAD_DAILY_OPERATIONS_SUCCESS";

export const CATEGORY_PAGE_SET_SELECTED_DATE =
  "CATEGORY_PAGE_SET_SELECTED_DATE";

export const CATEGORY_PAGE_CHANGE_DATA_RELEVANCE =
  "CATEGORY_PAGE_CHANGE_DATA_RELEVANCE";

export const loadDailyOperationsSuccess = operations => ({
  type: CATEGORY_PAGE_LOAD_DAILY_OPERATIONS_SUCCESS,
  payload: {
    operations
  }
});

export const setSelectedDate = date => ({
  type: CATEGORY_PAGE_SET_SELECTED_DATE,
  payload: {
    date
  }
});

export const changeDataRelevance = isRelevant => ({
  type: CATEGORY_PAGE_CHANGE_DATA_RELEVANCE,
  payload: {
    isRelevant
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
    })
    .then(() => dispatch(setSelectedDate(date)))
    .then(() => dispatch(changeDataRelevance(true)));
};

export const setOperation = operation => dispatch => {
  fetch("http://localhost:3001/operations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(operation)
  }).then(() => dispatch(changeDataRelevance(false)));
};

export const deleteOperation = id => dispatch => {
  fetch(`http://localhost:3001/operations/${id}`, {
    method: "DELETE"
  }).then(() => dispatch(changeDataRelevance(false)));
};
