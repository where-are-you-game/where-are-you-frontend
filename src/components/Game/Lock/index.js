import React, { useState, useRef } from "react";

import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { changePlayerPassword, solvePassword } from "../../../actions/game";
import lock from "../../../assets/common/lock_locked.png";
import lockUnlocked from "../../../assets/common/lock_unlocked.png";
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
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
`;

const Wrapper = styled.div`
  width: 300px;
  height: auto;
  padding: ${({ theme }) => theme.padding.big};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #ffffff;
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

function Lock({ name, password, showLock }) {
  const [isCorrect, setIsCorrect] = useState(false);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);
  const dispatch = useDispatch();
  const lockRef = useRef();

  const closeLock = () => {
    dispatch(changePlayerPassword(name, answer));
    showLock(false);
  };

  const clickLockOutside = (event) => {
    if (!lockRef.current || lockRef.current.contains(event.target)) return;
    closeLock();
  };

  const handleAnswer = (event) => {
    const { value } = event.target;
    setAnswer(value);
  };

  const checkAnswer = () => {
    if (answer === password) {
      setIsCorrect(true);
      dispatch(solvePassword(name));
      return;
    }

    setResult("비밀번호가 틀렸어.. 다시 입력해보자.");
  };

  return (
    <Backdrop onClick={clickLockOutside}>
      <Wrapper ref={lockRef}>
        <CloseButton
          title="Close"
          top="-30px"
          closeModal={closeLock}
          color="#f8a507"
        />
        <Title>비밀번호</Title>
        {isCorrect
          ? (
            <>
              <Image src={lockUnlocked} alt="자물쇠 그림" />
              <Button type="button" onClick={closeLock}>확인</Button>
            </>
          )
          : (
            <>
              <Image src={lock} alt="자물쇠 그림" />
              <p>{name} {password}</p>
              <InputBox>
                <Input
                  type="text"
                  name="password"
                  onChange={handleAnswer}
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
      </Wrapper>
    </Backdrop>
  );
}

Lock.propTypes = {
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  showLock: PropTypes.func.isRequired
};

export default Lock;
