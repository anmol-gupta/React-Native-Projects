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
    case "EDIT_BLOG":
      return state.map(post => {
        return post.id === action.payload.id ? action.payload : post;
      });
    default:
      return state;
  }
};
const addBlogPost = dispatch => {
  return (title, content) => {
    dispatch({ type: "ADD_BLOG", payload: { title, content } });
  };
};

const editPost = dispatch => {
  return (id, title, content) => {
    dispatch({ type: "EDIT_BLOG", payload: { id, title, content } });
  };
};

const deletePost = dispatch => {
  return id => {
    dispatch({ type: "DELETE_BLOG", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deletePost, editPost },
  [{ title: "TEST TITLE", content: "TEST CONTENT", id: 1 }]
);
