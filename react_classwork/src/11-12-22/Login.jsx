import { async } from "@firebase/util";

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  google,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "../services/Firebase_Configue";

const LogIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const user = await signInWithEmailAndPassword(
      auth,
      state.email,
      state.password
    );
    // console.log(user);
    if (user) {
      navigate("/Post");
    } else {
      alert("Wrong Code Entered");
    }
  };
  const handlGoogleLogin = async (event) => {
    event.preventDefault();
    const userGoogle = await signInWithPopup(auth, google);

    console.log(userGoogle);
    if (userGoogle) {
      navigate("/Post");
    } else {
      alert("Wrong Code Entered");
    }
  };
  //   const handleGoogleLogin = async (event) => {
  //     event.preventDefault
  //   }
  return (
    <>
      <div className="container">
        <h1 className="text-center my-3">logIn Form</h1>

        <form onSubmit={handleLogin}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setState({ ...state, email: e.target.value });
              }}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                setState({ ...state, password: e.target.value });
              }}
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          <button type="button" onClick={handlGoogleLogin}>
            Sign In With Google
          </button>
        </form>
      </div>
    </>
  );
};

export default LogIn;
