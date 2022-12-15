import React, { useState } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { IDados } from "./interfaces";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState<IDados>({
    email: "",
    senha: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const registrar = useMutation((dados: IDados) =>
    axios.post("http://localhost:3333/login", dados)
  );

  return (
    <div className=" flex flex-col text-white bg-blue-900 m-10 rounded p-10">
      <h1 className="text-center">Logar-se</h1>
      <a className="mx-10 my-5">
        E-mail:{" "}
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="text"
          className="p-1 rounded"
        ></input>
      </a>
      <a className="mx-10 my-5">
        Senha:{" "}
        <input
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          type="password"
          className="p-1 rounded"
        ></input>
      </a>
      <button
        className="text-black mx-auto"
        onClick={() =>
          registrar.mutate({ email: formData.email, senha: formData.senha })
        }
      >
        Registrar
      </button>
    </div>
  );
};

export default LoginForm;
