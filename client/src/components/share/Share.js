import React from "react";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LabelIcon from "@mui/icons-material/Label";

const Escrever = () => {
  return (
    <div className="h-44 w-full rounded-lg shadow-lg">
      <div className="p-2.5">
        <div className="flex items-center">
          <img
            className="mr-2.5 h-12 w-12 rounded-full object-cover"
            src="/assets/pessoa/4.jpeg"
          />
          <input
            className="w-4/5 border-0 focus:outline-none"
            placeholder="Faça uma pergunta."
          />
        </div>

        <hr className="m-5" />

        <div className="flex items-center justify-between">
          <div className="ml-5 flex">
            <div className="mr-4 flex cursor-pointer items-center [&>svg]:mr-1 [&>svg]:text-base">
              <PermMediaIcon htmlColor="tomato" />
              <div className="text-sm font-medium">Foto ou Vídeo</div>
            </div>

            <div className="mr-4 flex cursor-pointer items-center [&>svg]:mr-1 [&>svg]:text-base">
              <LabelIcon htmlColor="blue" />
              <div className="text-sm font-medium">Tag</div>
            </div>

            <div className="mr-4 flex cursor-pointer items-center [&>svg]:mr-1 [&>svg]:text-base">
              <EmojiEmotionsIcon htmlColor="goldenrod" />
              <div className="text-sm font-medium">Sentimento</div>
            </div>
          </div>

          <button className="mr-5 cursor-pointer rounded-md border-0 bg-blue-500 p-2 font-medium text-white">
            Compartilhar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Escrever;
