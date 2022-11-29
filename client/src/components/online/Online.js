import React from "react";

const AmigoOnline = ({ amigo }) => {
  return (
    <li className="mb-4 flex items-center">
      <div className="relative mr-2.5">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={amigo.imagem_perfil}
        />

        <span className="absolute -top-0.5 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
      </div>

      <span className="font-medium">{amigo.nome_usuario}</span>
    </li>
  );
};

export default AmigoOnline;
