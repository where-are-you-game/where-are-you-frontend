import React, { useContext } from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import configIcon from "../../assets/common/config_icon.png";
import { ModalContext } from "../../contexts/ModalContext";
import IconButton from "../Shared/IconButton";
import Menu from "./Menu";
import Music from "./Music";
import Room from "./Room";
import StylePuzzle from "./StylePuzzle";
import TextBox from "./TextBox";
import TodoList from "./TodoList";

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
  const { handleModal } = useContext(ModalContext);

  const puzzleModal = useSelector(state => state.puzzleModal);
  const { room } = useParams();

  return (
    <>
      <Wrapper room={room}>
        <TodoList />
        <Room
          room={room}
        />
        <TextBox />
        <IconButton
          type="button"
          icon={configIcon}
          top="0px"
          handleClick={() => handleModal(<Menu />)}
        />
        <Music />
      </Wrapper>
      {puzzleModal.isVisible
        && <StylePuzzle />}
    </>
  );
}

export default Game;
