import React from "react";
import Cookies from "universal-cookie";
import { Navigate } from "@tanstack/react-location";

const cookies = new Cookies();

type PrivateRouteProps = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = cookies.get("TOKEN");
  if (token) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
