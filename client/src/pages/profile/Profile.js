import React from "react";

import styled from "styled-components";

import MenuDireita from "../../components/rightbar/Rightbar";
import Mural from "../../components/feed/Feed";

const Profile = () => {
  return (
    <>
      <PerfilDireita>
        <Cabecalho>
          <PerfilCapa>
            <FotoCapa src="assets/publicacao/2.jpeg" alt="" />

            <FotoPerfil src="assets/pessoa/7.jpeg" alt="" />
          </PerfilCapa>

          <PerfilInfo>
            <NomeUsuario>Ramon Rodrigues</NomeUsuario>
            <DescricaoUsuario>Hello friend!</DescricaoUsuario>
          </PerfilInfo>
        </Cabecalho>

        <Rodape>
          <Mural />
          <MenuDireita profile />
        </Rodape>
      </PerfilDireita>
    </>
  );
};

export default Profile;

const PerfilDireita = styled.div`
  flex: 9;
`;

const Cabecalho = styled.div``;

const Rodape = styled.div`
  display: flex;
`;

const PerfilCapa = styled.div`
  height: 320px;
  position: relative;
`;

const FotoCapa = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const FotoPerfil = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 150px;
  border: 3px solid white;
`;

const PerfilInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NomeUsuario = styled.h4`
  font-size: 24px;
  margin: 0;
`;

const DescricaoUsuario = styled.span`
  font-weight: 300;
`;
