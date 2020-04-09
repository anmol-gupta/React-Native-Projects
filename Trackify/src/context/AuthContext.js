import createDataContext from "./createDataContext";
import trackerApi from "../api/trackify";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";
const authReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ERROR":
      return { ...state, errorMessage: action.payload };
    case "SIGNIN":
      return { errorMessage: "", token: action.payload };
    case "SIGNOUT":
      return {token: null, errorMessage:""}
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if(token) {
    dispatch({type:"SIGN",payload: token})
    navigate('TrackList')
  } else {
    navigate('loginFlow')
  }

}

const signup = dispatch => ({ email, password }) => {
  trackerApi
    .post("/signup", { email, password })
    .then(response => {
      AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "SIGNIN", payload: response.data.token });
      navigate("TrackList");
    })
    .catch(reject =>
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong with the signup"
      })
    );
};

const signin = dispatch => ({ email, password }) => {
  trackerApi.post("/signin",{email,password})
  .then(response => {
    AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "SIGNIN", payload: response.data.token });
      navigate("TrackList");
  }).catch(
    dispatch({type: "ADD_ERROR",
    payload: "Something went wrong with the signin"})
  )
  };

const signout = dispatch => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({type: "SIGNOUT"});
  navigate("loginFlow")
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, tryLocalSignin },
  { token: null, errorMessage: "" }
);
