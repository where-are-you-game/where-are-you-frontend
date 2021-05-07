import React from "react";

import PropTypes from "prop-types";
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
    background: ${({ color }) => color};
    transform: rotate(3deg);
  }
`;

function Game({ color }) {
  return (
    <Wrapper color={color}>
      <Todolist />
      <Room />
      <Textbox text="테스트입니다." />
    </Wrapper>
  );
}

Game.propTypes = {
  color: PropTypes.string.isRequired
};

export default Game;
