import * as actionTypes from "../action/actionTypes";
const initialState = {
  page: 1,
  detail: false
};

const nextPage = (state, action) => {
  return { ...state, page: state.page + 1 };
};
const previousPage = (state, action) => {
  return { ...state, page: state.page - 1 };
};
const resetPagination = (state, action) => {
  return { ...state, page: 1 };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GO_NEXT_PAGE:
      return nextPage(state, action);
    case actionTypes.GO_PREV_PAGE:
      return previousPage(state, action);
    case actionTypes.RESET_PAGINATION:
      return resetPagination(state, action);
    default:
      return { ...state };
  }
};
export default reducer;
