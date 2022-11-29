import React from "react";

import styled from "styled-components";

const Amigo = () => {
  return (
    <Container>
      <Imagem src="assets/pessoa/1.jpeg" alt="" />

      <span>John Carter</span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Imagem = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
`;

export default Amigo;
