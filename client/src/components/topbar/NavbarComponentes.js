import styled from "styled-components";

import SearchIcon from "@material-ui/icons/Search";

export const Container = styled.div`
  height: 50px;
  width: 100%;
  background-color: green;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Esquerda = styled.div`
  flex: 1;
`;

export const Logo = styled.span`
  font-family: "Merienda One";
  font-size: 24px;
  margin-left: 20px;
  font-weight: bold;
  text-shadow: 1px 1px black;
  color: white;
  cursor: pointer;
  padding: 5px;
`;

export const Centro = styled.div`
  flex: 8;
`;

export const BarraPesquisa = styled.div`
  width: 100%;
  height: 30px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
`;

export const PesquisaIcone = styled(SearchIcon)`
  font-size: 20px !important;
  margin: 0 10px;
`;

export const PesquisaInput = styled.input`
  border: none;
  width: 94%;

  &:focus {
    outline: none;
  }
`;

export const Direita = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
`;

export const Links = styled.div`
  display: flex;
`;

export const Link = styled.span`
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
`;

export const Icones = styled.div`
  display: flex;
`;

export const Icone = styled.div`
  margin-right: 15px;
  cursor: pointer;
  position: relative;
`;

export const IconeContador = styled.span`
  width: 15px;
  height: 15px;
  background-color: darkgreen;
  border-radius: 50px;

  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 12px;

  position: absolute;
  top: -5px;
  right: -5px;
`;

export const ImagemAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
