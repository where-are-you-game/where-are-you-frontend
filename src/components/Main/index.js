import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

import DoorImage from "../../assets/main/main_door.png";

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
  margin: 0 0 1rem 0;
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

const Button = styled.div`
  width: 200px;
  height: 60px;
  margin: 1rem 0 0 0;
  display: inline-block;
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.black};
  text-align: center;
  cursor: pointer;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);

  &::after {
    width: 100%;
    height: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: ${({ theme }) => theme.color.black};
    content: "";
    transition: inherit;
  }

  &:hover {
    box-shadow: 1px 1px 15px 2px rgba(0, 0, 0, 0.1);

    a {
      color: #ffffff;
    }

    &::after {
      height: 100%;
      top: 0;
    }
  }
`;

const LinkButton = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Door = styled.img`
  width: 300px;
  height: 388px;
  margin: 0 2rem 0 0;
  display: inline-block;
  align-self: center;
`;

function index() {
  return (
    <Wrapper>
      <StartBox>
        <Title>
          <span>Where</span>
          <span>are</span>
          <span>you?</span>
        </Title>
        <Input placeholder="Your name" />
        <Input placeholder="Your friend's name" />
        <Button>
          <LinkButton to="/game/livingroom">GAME START</LinkButton>
        </Button>
      </StartBox>
      <Door src={DoorImage} alt="게임 메인 이미지" />
    </Wrapper>
  );
}

export default index;
