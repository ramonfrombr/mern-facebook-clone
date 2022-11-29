import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-blue-500">
      <div className="h-9/12 flex w-9/12">
        <div className="flex flex-1 flex-col justify-center text-white">
          <h3 className="mb-2.5 text-5xl font-extrabold">Facebook</h3>

          <span className="text-2xl">
            Aprenda idiomas e conecte-se com o mundo.
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center text-white">
          <div className="flex h-72 flex-col justify-between rounded-xl bg-white p-5">
            <input
              className="h-12 rounded-xl border border-gray-200 pl-5 text-lg text-black focus:outline-none"
              type="email"
              placeholder="Digite seu email"
            />

            <input
              className="h-12 rounded-xl border border-gray-200 pl-5 text-lg text-black focus:outline-none"
              placeholder="Digite sua senha"
              type="password"
            />
            <button className="h-12 cursor-pointer rounded-xl border-0 bg-blue-600 text-xl font-medium text-white">
              Entrar
            </button>

            <span className="text-center text-blue-400">
              Esqueceu sua senha?
            </span>

            <button className="h-12 w-3/5 cursor-pointer self-center rounded-xl border-0 bg-blue-900 text-xl font-medium text-white">
              Criar uma nova conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
