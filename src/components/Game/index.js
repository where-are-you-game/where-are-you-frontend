import React, { useState } from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import configIcon from "../../assets/common/config_icon.png";
import Menu from "./Menu";
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

const MenuButton = styled.button`
  width: 30px;
  height: 30px;
  display: inline-block;
  position: absolute;
  top: 0;
  right: calc((50px + 0.5rem) * -1);
  background: #ffffff url(${configIcon}) no-repeat center;
  opacity: 0.4;
  transition: 0.3s all;

  &:hover {
    opacity: 1;
  }
`;

function Game() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const puzzleModal = useSelector(state => state.puzzleModal);
  const { room } = useParams();

  return (
    <>
      <Wrapper room={room}>
        <Todolist />
        <Room room={room} />
        <Textbox />
        <MenuButton
          type="button"
          onClick={() => setIsMenuVisible(!isMenuVisible)}
        />
      </Wrapper>
      {isMenuVisible
        && <Menu hideMenu={setIsMenuVisible} />}
      {puzzleModal.isVisible
        && <Puzzle />}
    </>
  );
}

export default Game;
