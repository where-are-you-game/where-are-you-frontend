import React, { useState } from "react";

import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { changePlayerPassword, solvePassword } from "../../../actions/game";
import lock from "../../../assets/common/lock_locked.png";
import StylePuzzle from "../StylePuzzle";

const Content = styled.div`
  width: auto;
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

function Lock({ name, password, puzzleName }) {
  const [result, setResult] = useState(null);

  const puzzles = useSelector((state) => state.puzzle.byName);
  const { answer, isUnlocked} = useSelector((state) => state.game.playerPassword[name]);
  const dispatch = useDispatch();

  const handleAnswer = (event) => {
    const { value } = event.target;
    dispatch(changePlayerPassword(name, value));
  };

  const checkAnswer = () => {
    if (answer === password) {
      dispatch(solvePassword(name));
      return;
    }

    setResult("비밀번호가 틀렸어.. 다시 입력해보자.");
  };

  return (
    <>
      {isUnlocked
        ? <StylePuzzle puzzle={puzzles[puzzleName]} />
        : (
          <Content>
            <Title>비밀번호</Title>
            <Image src={lock} alt="자물쇠 그림" />
            <InputBox>
              <Input
                type="text"
                name="password"
                onChange={handleAnswer}
                value={answer}
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
          </Content>
        )}
    </>
  );
}

Lock.propTypes = {
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  puzzleName: PropTypes.string.isRequired
};

export default Lock;
