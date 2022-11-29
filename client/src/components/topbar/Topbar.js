import React from "react";
import {
  Container,
  Esquerda,
  Direita,
  Centro,
  BarraPesquisa,
  PesquisaIcone,
  PesquisaInput,
  Logo,
  Links,
  Link,
  Icones,
  Icone,
  IconeContador,
  ImagemAvatar,
} from "./NavbarComponentes";

import PersonIcon from "@material-ui/icons/Person";

import ChatIcon from "@material-ui/icons/Chat";

import NotificationsIcon from "@material-ui/icons/Notifications";

const Topbar = () => {
  return (
    <Container>
      <Esquerda>
        <Logo>A+</Logo>
      </Esquerda>

      <Centro>
        <BarraPesquisa>
          <PesquisaIcone />
          <PesquisaInput />
        </BarraPesquisa>
      </Centro>

      <Direita>
        <Links>
          <Link>Início</Link>
          <Link>Mural</Link>
        </Links>

        <Icones>
          <Icone>
            <PersonIcon />
            <IconeContador>1</IconeContador>
          </Icone>

          <Icone>
            <ChatIcon />
            <IconeContador>1</IconeContador>
          </Icone>

          <Icone>
            <NotificationsIcon />
            <IconeContador>1</IconeContador>
          </Icone>
        </Icones>
        <ImagemAvatar src="/assets/pessoa/1.jpeg" />
      </Direita>
    </Container>
  );
};

export default Topbar;
