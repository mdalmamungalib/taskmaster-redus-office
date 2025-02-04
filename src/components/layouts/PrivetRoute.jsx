import React, { useEffect } from "react";
import Loading from "../ui/Loading";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import {
  setUser,
  toggleLoading,
} from "../../Redux/features/users/userSlice";

const PrivetRoute = ({ children }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const { isLoading, email } = useSelector(
    (state) => state.userSlice
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
          })
        );
        dispatch(toggleLoading(false));
      }
      else {
        dispatch(toggleLoading(false));
      }
    });
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !email) {
    return <Navigate to="/signUp" state={{ path: pathname }} />;
  }
  return children;
};

export default PrivetRoute;
