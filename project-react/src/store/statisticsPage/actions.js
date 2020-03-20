import Api from "../../utils/api";

export const STATISTICS_PAGE_LOAD_OPERATIONS_SUCCESS =
  "STATISTICS_PAGE_LOAD_OPERATIONS_SUCCESS";

export const STATISTICS_PAGE_CHANGE_DATA_RELEVANT =
  "STATISTICS_PAGE_CHANGE_DATA_RELEVANT";

  export const STATISTICS_PAGE_SET_SELECTED_DATE =
  "STATISTICS_PAGE_SET_SELECTED_DATE";

export const changeDataRelevant = isRelevant => ({
  type: STATISTICS_PAGE_CHANGE_DATA_RELEVANT,
  payload: {
    isRelevant
  }
});

export const setSelectedDate = (startDate, finishDate) => ({
  type: STATISTICS_PAGE_SET_SELECTED_DATE,
  payload: {
    startDate,
    finishDate
  }
});

export const loadOperationsSuccess = operations => ({
  type: STATISTICS_PAGE_LOAD_OPERATIONS_SUCCESS,
  payload: {
    operations
  }
});

export const loadOperations = (id, startDate, finishDate) => dispatch => {
  Api.loadOperations(startDate, finishDate, id)
    .then(response => response.json())
    .then(json => {
      dispatch(loadOperationsSuccess(json));
    })
    .then(() => dispatch(changeDataRelevant(true)));
  // .then(() => dispatch(setSelectedDate(date)))
};
