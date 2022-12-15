import React, { useState } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { IDados } from "./interfaces";

const RegisterForm = () => {
  const [formData, setFormData] = useState<IDados>({
    email: "",
    senha: "",
  });

  const [registrado, setRegistrado] = useState(false);

  const registrar = useMutation(
    (dados: IDados) => axios.post("http://localhost:3333/register", dados),
    {
      onSuccess: () => setRegistrado(true),
    }
  );

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className=" flex flex-col text-white bg-blue-900 m-10 p-10 rounded">
      <h1 className="text-center">Registrar-se</h1>

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

      {registrado && (
        <div className="mx-auto my-5 text-green-400">
          Registrado com sucesso
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
