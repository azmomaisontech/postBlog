import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  SET_CURRENT,
  CLEAR_CURRENT,
  POST_ERROR,
  GET_POST,
  ADD_AUTHOR,
  GET_AUTHOR,
  SEARCH_POST
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
        loading: false
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post
        ),
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        loading: false
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        loading: false
      };
    case POST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case GET_AUTHOR:
      return {
        ...state,
        authors: action.payload,
        loading: false
      };
    case ADD_AUTHOR:
      return {
        ...state,
        authors: [...state.authors, action.payload],
        loading: false
      };
    case SEARCH_POST:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
