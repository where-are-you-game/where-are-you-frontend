import React, { useState, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { changePlayerAnswer } from "../../../actions/game";
import { hidePuzzleModal } from "../../../actions/puzzleModal";
import Answer from "./Answer";
import Question from "./Question";

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
  width: 900px;
  height: 800px;
  padding: ${({ theme }) => theme.padding.base};
  display: grid;
  grid-template-columns: auto 350px;
  grid-template-rows: repeat(3, minmax(250px, auto));
  position: relative;
  background: #ffffff;

  > div {
    margin: ${({ theme }) => theme.padding.small};
  }
`;

const Button = styled.button`
  width: 70px;
  position: absolute;
  top: 0;
  right: -70px;
  background: ${({ theme }) => theme.color.orange};
  border: none;
  color: #ffffff;
`;

function Puzzle() {
  const puzzleModal = useSelector(state => state.puzzleModal);
  const playerAnswer = useSelector(state => state.game.playerAnswer[puzzleModal.name].answer);
  const [answer, setAnswer] = useState(playerAnswer);
  const dispatch = useDispatch();
  const modal = useRef();

  const closePuzzleModal = () => {
    dispatch(hidePuzzleModal());
    dispatch(changePlayerAnswer(puzzleModal.name, answer));
  };

  const clickModalOutside = (event) => {
    if (!modal.current || modal.current.contains(event.target)) return;
    closePuzzleModal();
  };

  const handleAnswer = (event) => {
    const { value } = event.target;
    setAnswer(value);
  };

  return (
    <Backdrop onClick={clickModalOutside}>
      <Wrapper ref={modal}>
        <Button
          type="button"
          onClick={closePuzzleModal}
        >
          Close
        </Button>
        <Question
          title={puzzleModal.title}
          content={puzzleModal.content}
        />
        <Answer
          playerAnswer={answer}
          handleAnswer={handleAnswer}
          style={puzzleModal.style}
          cssBefore={puzzleModal.cssBefore}
          cssAfter={puzzleModal.cssAfter}
          markup={puzzleModal.markup}
          output={puzzleModal.output}
        />
      </Wrapper>
    </Backdrop>
  );
}

export default Puzzle;
