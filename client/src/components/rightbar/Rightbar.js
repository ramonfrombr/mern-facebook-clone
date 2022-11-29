import React from "react";

import AmigoOnline from "../online/Online";

import Amigo from "./Amigo";

import { Usuarios } from "../../dados";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="flex items-center">
          <img className="mr-2.5 h-10 w-10" src="/assets/presente.png" />

          <div className="text-base font-light">
            <b>João Silva</b> e <b>outros 3 amigos</b> fazem aniversário hoje
          </div>
        </div>

        <img className="my-7 w-full rounded-lg" src="/assets/propaganda.png" />

        <h4 className="mb-5">Online Friends</h4>

        <ul className="m-0 list-none p-0">
          {Usuarios.map((amigo) => (
            <AmigoOnline key={amigo.id} amigo={amigo} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="mb-5">Informação do Usuário</h4>

        <div className="mb-8">
          <div className="mb-2.5">
            <span className="mr-3.5 font-medium text-gray-500">Cidade:</span>
            <span className="font-light">Rio de Janeiro</span>
          </div>

          <div className="mb-2.5">
            <span className="mr-3.5 font-medium text-gray-500">De:</span>
            <span className="font-light">Serra</span>
          </div>

          <div className="mb-2.5">
            <span className="mr-3.5 font-medium text-gray-500">
              Relacionamento:
            </span>
            <span className="font-light">Solteiro</span>
          </div>
        </div>

        <h4 className="mb-5">Friends</h4>

        <div className="flex flex-wrap justify-between">
          <Amigo />
          <Amigo />
          <Amigo />
          <Amigo />
        </div>
      </>
    );
  };

  return (
    <div className="w-1/4">
      <div className="pt-5 pr-5">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
