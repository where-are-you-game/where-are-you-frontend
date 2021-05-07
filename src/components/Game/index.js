import React from "react";

import { useParams } from "react-router-dom";
import styled from "styled-components";

import Room from "./Room";
import Textbox from "./Textbox";
import Todolist from "./Todolist";

const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  margin: -3rem 0 0 0;
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.black};

  &::before,
  &::after {
    content: "";
    width: 800px;
    height: 600px;
    display: block;
    position: absolute;
  }

  &::before {
    background: #ffffff;
    transform: rotate(-3deg);
  }

  &::after {
    top: 0;
    background: ${({ theme, room }) => theme.color[room]};
    transform: rotate(3deg);
  }
`;

function Game() {
  const { room } = useParams();

  return (
    <Wrapper room={room}>
      <Todolist />
      <Room room={room} />
      <Textbox text="테스트입니다." />
    </Wrapper>
  );
}

export default Game;
