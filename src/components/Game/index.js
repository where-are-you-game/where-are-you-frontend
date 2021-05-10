import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import configIcon from "../../assets/common/config_icon.png";
import IconButton from "../Shared/IconButton";
import Lock from "./Lock";
import Menu from "./Menu";
import Music from "./Music";
import Puzzle from "./Puzzle";
import Room from "./Room";
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
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isLockVisible, setIsLockVisible] = useState(false);
  const [lockInfo, setLockInfo] = useState(null);

  const puzzleModal = useSelector(state => state.puzzleModal);
  const { room } = useParams();

  const showLock = (lockInfo) => {
    setLockInfo(lockInfo);
    setIsLockVisible(true);
  };

  return (
    <>
      <Wrapper room={room}>
        <TodoList />
        <Room
          room={room}
          showLock={showLock}
        />
        <TextBox />
        <IconButton
          type="button"
          icon={configIcon}
          top="0px"
          handleClick={() => setIsMenuVisible(!isMenuVisible)}
        />
        <Music />
      </Wrapper>
      {isLockVisible
        && (
            <Lock
              name={lockInfo.name}
              password={lockInfo.password}
              showLock={setIsLockVisible}
            />
          )}
      {isMenuVisible
        && <Menu showMenu={setIsMenuVisible} />}
      {puzzleModal.isVisible
        && <Puzzle />}
    </>
  );
}

export default Game;
