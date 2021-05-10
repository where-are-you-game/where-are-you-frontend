import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
  width: 400px;
  height: auto;
  padding: ${({ theme }) => theme.padding.big};
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;

  li {
    margin: 0 0 0.5rem 0;
    text-align: center;
  }
`;

const Button = styled(Link)`
  width: 200px;
  padding: 0.5rem;
  display: inline-block;
  background: ${({ theme }) => theme.color.background};
  font-size: 1.3rem;
  transition: 0.3s all;

  &:hover {
    background: ${({ theme }) => theme.color.black};
    color: #ffffff;
  }
`;

function Menu() {
  return (
    <Content>
      <Title>MENU</Title>
      <List>
        <li>
          <Button>메인 화면으로</Button>
        </li>
        <li>
          <Button>처음부터 다시 하기</Button>
        </li>
        <li>
          <Button>리뷰 보러가기</Button>
        </li>
      </List>
    </Content>
  );
}

export default Menu;
