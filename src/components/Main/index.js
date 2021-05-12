import React from "react";

import styled from "styled-components";

import DoorImage from "../../assets/main/main_door.png";
import LinkButton from "../Shared/LinkButton";

const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  font-family: "Goudy Bookletter 1911";

  &::before {
    content: "";
    width: 65vw;
    height: 100vh;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    background: rgba(255, 255, 255, 0.65);
    clip-path: polygon(100% 65%, 100% 33%, 0 0, 0 100%);
  }
`;

const StartBox = styled.div`
  margin: -4rem 0 0 3rem;
`;

const Title = styled.h1`
  margin: 0 0 3rem 0;
  font-size: 4.2rem;
  line-height: 3rem;

  span {
    display: block;

    &:nth-child(2) {
      margin: 0 0 0 5rem;
    }

    &:last-child {
      margin: 0 0 0 9rem;
    }
  }
`;

const Input = styled.input`
  width: 200px;
  margin: 0 0 0.5rem 0;
  padding: 0.5rem;
  display: block;
  border: none;
  border-bottom: 1px solid black;
  font-size: 1.2rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.grey};
  }
`;

const Door = styled.img`
  width: 300px;
  height: 388px;
  margin: 0 2rem 0 0;
  display: inline-block;
  align-self: center;
`;

function Main() {
  return (
    <Wrapper>
      <StartBox>
        <Title>
          <span>Where</span>
          <span>are</span>
          <span>you?</span>
        </Title>
        <Input placeholder="Your name" />
        <LinkButton
          path="/game/livingroom"
          title="GAME START"
          color="black"
        />
      </StartBox>
      <Door src={DoorImage} alt="게임 메인 이미지" />
    </Wrapper>
  );
}

export default Main;
