import React, { useState } from "react";
import axios from "axios";
import RegisterForm from "../../components/RegistroForm";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row mx-auto items-center justify-center  mt-12">
      <RegisterForm />
      <LoginForm />
    </div>
  );
};

export default Login;
