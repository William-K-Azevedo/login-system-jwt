import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { IDados } from "./interfaces";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Cookies from "universal-cookie";

const LoginForm = () => {
  const cookies = new Cookies();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("E-mail inválido")
      .trim()
      .required("Digite um e-mail"),
    senha: Yup.string()
      .min(6, "Senha de 6 caracteres")
      .max(6, "Senha de 6 caracteres")
      .trim()
      .required("Digite uma senha"),
  });

  const Logar = useMutation(
    (dados: IDados) => axios.post("http://localhost:3333/login", dados),
    {
      onSuccess: (dados) => {
        cookies.set("TOKEN", dados.data.token, {
          path: "/",
        });
        // window.location.href = "/auth";
      },
    }
  );

  return (
    <div className="flex flex-col text-white bg-blue-900 m-10 rounded p-10">
      <h1 className="text-center">Logar-se</h1>
      <Formik
        initialValues={{
          email: "",
          senha: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => Logar.mutate(values)}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col">
            <div>
              <label htmlFor="email">E-mail: </label>
              <Field className="m-2 rounded p-2 text-black" name="email" />
              {errors.email && touched.email ? (
                <div className="text-center text-red-600">{errors.email}</div>
              ) : (
                <div className="text-center text-green-400">
                  Digite seu email
                </div>
              )}
            </div>

            <div>
              <label>Senha: </label>
              <Field
                className="m-2 rounded p-2 text-black"
                name="senha"
                type="password"
              />
            </div>
            {errors.senha && touched.senha ? (
              <div className="text-center text-red-600">{errors.senha}</div>
            ) : (
              <div className="text-center text-green-400">Digite sua senha</div>
            )}
            <button className="mx-auto mt-2 border-white" type="submit">
              Logar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
