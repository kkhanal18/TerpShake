import axios from "axios";
import { setAlert } from "./alert";
import { REGISTER_SUCESS, REGISTER_FAIL } from "./types";

// Register User

export const register = ({ name, email, password }) => async dispatch => {
  // need headers to work
  const config = {
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    // this will register the data
    const res = await axios.post("/api/users", body, config);
    dispatch({
      type: REGISTER_SUCESS,
      payload: res.data
    });
    // dispatch(loadUser());
  } catch (error) {
    // Showing errors
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};
