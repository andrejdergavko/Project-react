export const APP_LOAD_USER_CATEGORIES_SUCCESS =
  "APP_LOAD_USER_CATEGORIES_SUCCESS";

export const loadUserCategoriesSuccess = userCategories => ({
  type: APP_LOAD_USER_CATEGORIES_SUCCESS,
  payload: {
    userCategories
  }
});

export const loadUserCategories = userId => async dispatch => {
  const defaultCategories = await fetch(
    `http://localhost:3001/defaultCategories`
  ).then(response => response.json());

  const castomCategories = await fetch(
    `http://localhost:3001/castomCategories?userId=${userId}`
  ).then(response => response.json());

  dispatch(
    loadUserCategoriesSuccess([...defaultCategories, ...castomCategories])
  );
};
