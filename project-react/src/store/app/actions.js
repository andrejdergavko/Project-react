import Api from "../../utils/api";

export const APP_LOAD_USER_CATEGORIES_LOADING =
  "APP_LOAD_USER_CATEGORIES_LOADING";

export const APP_LOAD_USER_CATEGORIES_SUCCESS =
  "APP_LOAD_USER_CATEGORIES_SUCCESS";

export const loadUserCategoriesSuccess = userCategories => ({
  type: APP_LOAD_USER_CATEGORIES_SUCCESS,
  payload: {
    userCategories
  }
});

export const loadUserCategories = userId => async dispatch => {
  dispatch({ type: APP_LOAD_USER_CATEGORIES_LOADING });

  const defaultCategories = await Api.loadDefaultCategories().then(response =>
    response.json()
  );

  const castomCategories = await Api.loadCastomCategories(
    userId
  ).then(response => response.json());

  dispatch(
    loadUserCategoriesSuccess([...defaultCategories, ...castomCategories])
  );
};
