import React from "react";
import { Container, Wrap } from "./MuralElementos";

import { Publicacoes } from "../../dados";

import Escrever from "../share/Share";
import Publicacao from "../post/Post";

const Mural = () => {
  return (
    <Container>
      <Wrap>
        <Escrever />
        {Publicacoes.map((p) => (
          <Publicacao key={p.id} publicacao={p} />
        ))}
      </Wrap>
    </Container>
  );
};

export default Mural;
