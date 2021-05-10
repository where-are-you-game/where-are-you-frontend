import React, { useState, useContext } from "react";

import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { changePlayerPassword, solvePassword } from "../../../actions/game";
import lock from "../../../assets/common/lock_locked.png";
import lockUnlocked from "../../../assets/common/lock_unlocked.png";
import { ModalContext } from "../../../contexts/ModalContext";

const Content = styled.div`
  width: 300px;
  height: auto;
  padding: ${({ theme }) => theme.padding.big};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  margin: 0 0 0.5rem 0;
  font-size: 1.5em;
  font-weight: bold;
`;

const Image = styled.img`
  width: 50px;
  height: auto;
  margin: 0 0 0.5rem 0;
  display: inline-block;
`;

const InputBox = styled.div`
  margin: 0 0 0.5rem 0;
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  width: calc(100% - 70px);
  height: 30px;
  padding: 0.2rem 0.5rem;
`;

const Button = styled.button`
  width: 60px;
  height: 30px;
  transition: 0.3s all;

  &:hover {
    background: ${({ theme }) => theme.color.black};
    color: #ffffff;
  }
`;

const Result = styled.p`
  color: ${({ theme }) => theme.color.red};
  font-size: 1rem;
`;

function Lock({ name, password }) {
  const [isCorrect, setIsCorrect] = useState(false);
  const [result, setResult] = useState(null);

  const playerPassword = useSelector((state) => state.game.playerPassword[name].answer);
  const dispatch = useDispatch();

  const { handleModal } = useContext(ModalContext);

  const handleAnswer = (event) => {
    const { value } = event.target;
    dispatch(changePlayerPassword(name, value));
  };

  const checkAnswer = () => {
    if (playerPassword === password) {
      setIsCorrect(true);
      dispatch(solvePassword(name));
      return;
    }

    setResult("비밀번호가 틀렸어.. 다시 입력해보자.");
  };

  return (
    <Content>
      <Title>비밀번호</Title>
      {isCorrect
        ? (
          <>
            <Image src={lockUnlocked} alt="자물쇠 그림" />
            <Button type="button" onClick={() => handleModal(null)}>확인</Button>
          </>
        )
        : (
          <>
            <Image src={lock} alt="자물쇠 그림" />
            <InputBox>
              <Input
                type="text"
                name="password"
                onChange={handleAnswer}
                value={playerPassword}
              />
              <Button
                type="button"
                onClick={checkAnswer}
              >
                입력
              </Button>
            </InputBox>
            {result
              && <Result>{result}</Result>}
          </>
        )}
    </Content>
  );
}

Lock.propTypes = {
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default Lock;
