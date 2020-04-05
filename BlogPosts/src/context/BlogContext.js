import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_BLOG":
      return [...state.filter(blogPost => blogPost.id !== action.payload)];
    case "ADD_BLOG":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    default:
      return state;
  }
};
const addBlogPost = dispatch => {
  return (title, content) => {
    dispatch({ type: "ADD_BLOG", payload: {title, content} });
  };
};

const deletePost = dispatch => {
  return id => {
    dispatch({ type: "DELETE_BLOG", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deletePost },
  []
);
