import Api from "../../utils/api";

export const CATEGORY_PAGE_LOAD_DAILY_OPERATIONS_SUCCESS =
  "CATEGORY_PAGE_LOAD_DAILY_OPERATIONS_SUCCESS";

export const CATEGORY_PAGE_SET_SELECTED_DATE =
  "CATEGORY_PAGE_SET_SELECTED_DATE";

export const CATEGORY_PAGE_CHANGE_DATA_RELEVANT =
  "CATEGORY_PAGE_CHANGE_DATA_RELEVANT";

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

export const changeDataRelevant = isRelevant => ({
  type: CATEGORY_PAGE_CHANGE_DATA_RELEVANT,
  payload: {
    isRelevant
  }
});

export const loadDailyOperations = (id, date) => dispatch => {
  const startOfTheDay = new Date(date).setHours(0, 0, 0, 0);
  const endOfTheDay = startOfTheDay + 86400000;

  Api.loadOperations(startOfTheDay, endOfTheDay, id)
    .then(response => response.json())
    .then(json => {
      dispatch(loadDailyOperationsSuccess(json));
    })
    .then(() => dispatch(setSelectedDate(date)))
    .then(() => dispatch(changeDataRelevant(true)));
};

export const setOperation = operation => dispatch => {
  Api.setOperation(operation).then(() => dispatch(changeDataRelevant(false)));
};

export const deleteOperation = id => dispatch => {
  Api.deleteOperation(id).then(() => dispatch(changeDataRelevant(false)));
};
