import React from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Puzzle from "./Puzzle";
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
  const puzzleModal = useSelector(state => state.puzzleModal);
  const { room } = useParams();

  return (
    <>
      <Wrapper room={room}>
        <Todolist />
        <Room room={room} />
        <Textbox />
      </Wrapper>
      {puzzleModal.isVisible
        && <Puzzle />
      }
    </>
  );
}

export default Game;
