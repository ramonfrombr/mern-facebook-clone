import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 30px 0;
`;

export const Wrap = styled.div`
  padding: 10px;
`;

export const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CabecalhoEsquerda = styled.div`
  display: flex;
  align-items: center;
`;

export const CabecalhoDireita = styled.div``;

export const ImagemPerfil = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const NomeUsuario = styled.span`
  font-size: 15px;
  font-weight: 500px;
  margin: 0 10px;
`;

export const DataPublicacao = styled.span`
  font-size: 12px;
`;

export const Centro = styled.div`
  margin: 20px 0;
`;

export const ConteudoPublicacao = styled.span``;

export const ImagemPublicacao = styled.img`
  margin-top: 20px;
  width: 100%;
  max-height: 500px;
  object-fit: contain;
`;

export const Rodape = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RodapeEsquerda = styled.div`
  display: flex;
  align-items: center;
`;

export const IconeReacao = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
  cursor: pointer;
`;

export const ReacaoContador = styled.span`
  font-size: 15px;
`;

export const RodapeDireita = styled.div``;

export const ComentarioContador = styled.span`
  cursor: pointer;
  font-size: 15px;
  border-bottom: 1px dashed grey;
`;

/*
export const Container = styled.div`
`;

*/
