import styled from "styled-components";

export const Amigo = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const AmigoImagemContainer = styled.div`
  margin-right: 10px;
  position: relative;
`;

export const AmigoImagem = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Online = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: limegreen;
  position: absolute;
  top: -2px;
  right: 0px;
  border: 2px solid white;
`;

export const AmigoNome = styled.span`
  font-weight: 500;
`;
