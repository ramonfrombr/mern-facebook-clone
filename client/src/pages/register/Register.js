import React from "react";

import styled from "styled-components";

const Register = () => {
  return (
    <Container>
      <Wrap>
        <Esquerda>
          <Logo>Aprenda Agora</Logo>

          <Descricao>Aprenda idiomas e conecte-se com o mundo.</Descricao>
        </Esquerda>

        <Direita>
          <Formulario>
            <Input type="email" placeholder="Digite seu nome" />

            <Input type="email" placeholder="Digite seu email" />
            <Input placeholder="Digite sua senha" type="password" />

            <Input placeholder="Digite sua senha novamente" type="password" />
            <BotaoEntrar>Registrar</BotaoEntrar>

            <BotaoRegistrar>Acessar minha conta</BotaoRegistrar>
          </Formulario>
        </Direita>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
`;

const Esquerda = styled.div`
  flex: 1;
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
`;

const Direita = styled(Esquerda)``;

const Logo = styled.h3`
  font-size: 50px;
  font-weight: 800;
  margin-bottom: 10px;
  text-shadow: 1px 1px black;
  font-family: "Merienda One", sans-serif;
`;

const Descricao = styled.span`
  font-size: 24px;
`;

const Formulario = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input`
  height: 50px;
  border-radius: 10px;
  border: 1px solid gray;
  font-size: 18px;
  padding-left: 20px;
  margin-bottom: 15px;

  &:focus {
    outline: none;
  }
`;

const BotaoEntrar = styled.button`
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #1775ee;
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 30px;
`;

const BotaoRegistrar = styled.button`
  width: 60%;
  align-self: center;
  height: 50px;
  border-radius: 10px;
  border: none;

  background-image: linear-gradient(to right, darkgreen, green);

  transition: background-image 5s ease-out;

  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(to right, green, darkgreen);
  }
`;

export default Register;
