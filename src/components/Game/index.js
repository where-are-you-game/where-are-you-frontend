import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import styled from "styled-components";

import configIcon from "../../assets/common/config_icon.png";
import { ModalContext } from "../../contexts/ModalContext";
import IconButton from "../Shared/IconButton";
import Menu from "./Menu";
import Music from "./Music";
import ProgressBar from "./ProgressBar";
import Room from "./Room";
import TextBox from "./TextBox";
import Timer from "./Timer";
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
  const { room } = useParams();

  return (
    <>
      <Wrapper room={room}>
        <Timer />
        <ProgressBar />
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
    </>
  );
}

export default Game;
