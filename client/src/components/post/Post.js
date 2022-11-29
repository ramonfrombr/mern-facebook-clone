import React, { useState } from "react";

import {
  Container,
  Wrap,
  Cabecalho,
  CabecalhoDireita,
  CabecalhoEsquerda,
  ImagemPerfil,
  NomeUsuario,
  DataPublicacao,
  Centro,
  ConteudoPublicacao,
  ImagemPublicacao,
  Rodape,
  RodapeEsquerda,
  RodapeDireita,
  IconeReacao,
  ReacaoContador,
  ComentarioContador,
} from "./PublicacaoElementos";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import { Usuarios } from "../../dados";

const Publicacao = ({ publicacao }) => {
  const [like, definirLike] = useState(publicacao.n_likes);

  const [recebeuLike, definirRecebeuLike] = useState(false);

  const likeHandler = () => {
    definirLike(recebeuLike ? like - 1 : like + 1);
    definirRecebeuLike(!recebeuLike);
  };

  return (
    <Container>
      <Wrap>
        <Cabecalho>
          <CabecalhoEsquerda>
            <ImagemPerfil
              src={
                Usuarios.filter(
                  (usuario) => usuario.id === publicacao.usuario_id
                )[0].imagem_perfil
              }
            />

            <NomeUsuario>
              {
                Usuarios.filter(
                  (usuario) => usuario.id === publicacao.usuario_id
                )[0].nome_usuario
              }
            </NomeUsuario>

            <DataPublicacao>{publicacao.data}</DataPublicacao>
          </CabecalhoEsquerda>

          <CabecalhoDireita>
            <MoreVertIcon />
          </CabecalhoDireita>
        </Cabecalho>

        <Centro>
          {publicacao.descricao && (
            <ConteudoPublicacao>{publicacao.descricao}</ConteudoPublicacao>
          )}

          <ImagemPublicacao src={publicacao.foto} />
        </Centro>

        <Rodape>
          <RodapeEsquerda>
            <IconeReacao src="/assets/like.png" onClick={likeHandler} />
            <IconeReacao src="/assets/coracao.png" onClick={likeHandler} />

            <ReacaoContador>{like} pessoas reagiram</ReacaoContador>
          </RodapeEsquerda>

          <RodapeDireita>
            <ComentarioContador>
              {publicacao.n_comentarios} comentários
            </ComentarioContador>
          </RodapeDireita>
        </Rodape>
      </Wrap>
    </Container>
  );
};

export default Publicacao;
