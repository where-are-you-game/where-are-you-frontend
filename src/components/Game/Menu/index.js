import React, { useRef } from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

import CloseButton from "../../Shared/ModalCloseButton";

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.4);
`;

const Wrapper = styled.div`
  width: 400px;
  height: auto;
  padding: ${({ theme }) => theme.padding.big};
  position: relative;
  background: white;
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

function Menu({ showMenu }) {
  const option = useRef();

  const closeMenu = () => {
    showMenu(false);
  };

  const clickOptionOutside = (event) => {
    if (!option.current || option.current.contains(event.target)) return;
    closeMenu();
  };

  return (
    <Backdrop onClick={clickOptionOutside}>
      <Wrapper ref={option}>
        <CloseButton
          title="Close"
          top="-30px"
          closeModal={closeMenu}
          color="#f8a507"
        />
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
      </Wrapper>
    </Backdrop>
  );
}

Menu.propTypes = {
  showMenu: PropTypes.func.isRequired
};

export default Menu;
