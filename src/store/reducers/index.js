import actions from "../actions";
const initialValue = {
  loading: false,
  res: null,
  error: null,
};

const postReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case actions.POST_ERROR:
      return { loading: false, error: payload, res: null };
    case actions.POST_LOADING:
      return { loading: true, error: null, res: null };
    case actions.POST_RES:
      return { loading: false, error: null, res: payload };
    default:
      return state;
  }
};

export default postReducer
