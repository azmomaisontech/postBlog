import React, { useReducer } from "react";
import postReducer from "./postReducer";
import PostContext from "./postContext";
import axios from "axios";
import {
  GET_POST,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  SET_CURRENT,
  CLEAR_CURRENT,
  POST_ERROR,
  ADD_AUTHOR,
  GET_AUTHOR,
  SEARCH_POST
} from "../types";

const PostState = props => {
  const initialState = {
    posts: null,
    authors: null,
    current: null,
    loading: true,
    error: null
  };
  const [state, dispatch] = useReducer(postReducer, initialState);

  //Post
  //getPost
  const getPost = async () => {
    try {
      const res = await axios.get("/posts");
      dispatch({
        type: GET_POST,
        payload: res.data
      });
    } catch (err) {}
  };

  //addPost
  const addPost = async post => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("/posts", post, config);
      dispatch({
        type: ADD_POST,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.statusText
      });
    }
  };

  //deletePost
  const deletePost = async id => {
    try {
      await axios.delete(`/posts/${id}`);
      dispatch({
        type: DELETE_POST,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.statusText
      });
    }
  };

  //updatePost
  const updatePost = async post => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.put(`/posts/${post.id}`, post, config);
      dispatch({
        type: UPDATE_POST,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.statusText
      });
    }
  };

  //Set current
  const setCurrent = post => {
    dispatch({
      type: SET_CURRENT,
      payload: post
    });
  };

  //Clear current
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    });
  };

  //Author
  //get Authors
  const getAuthors = async () => {
    try {
      const res = await axios.get("/authors");
      dispatch({
        type: GET_AUTHOR,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.statusText
      });
    }
  };

  //add Author
  const addAuthor = async author => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/authors", author, config);
      dispatch({
        type: ADD_AUTHOR,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.statusText
      });
    }
  };

  //Search post
  const searchPost = async text => {
    try {
      const res = await axios.get(`posts?q=${text}`);
      dispatch({
        type: SEARCH_POST,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.statusText
      });
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        loading: state.loading,
        current: state.current,
        error: state.error,
        authors: state.authors,
        getPost,
        addPost,
        deletePost,
        updatePost,
        setCurrent,
        clearCurrent,
        getAuthors,
        addAuthor,
        searchPost
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
