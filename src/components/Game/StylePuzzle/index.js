import React, { useState, useContext } from "react";

import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { changePlayerAnswer } from "../../../actions/game";
import Answer from "./Answer";
import Question from "./Question";

const Content = styled.div`
  width: 900px;
  height: 800px;
  padding: ${({ theme }) => theme.padding.base};
  display: grid;
  grid-template-columns: auto 350px;
  grid-template-rows: repeat(3, minmax(250px, auto));
  position: relative;
  background: #ffffff;
`;

function StylePuzzle({ puzzle }) {
  const playerAnswer = useSelector(state => state.game.playerAnswer[puzzle.name].answer);
  const [answer, setAnswer] = useState(playerAnswer);
  const dispatch = useDispatch();

  return (
    <Content>
      <Question
        title={puzzle.title}
        content={puzzle.content}
      />
      <Answer
        name={puzzle.name}
        style={puzzle.style}
        cssBefore={puzzle.cssBefore}
        cssAfter={puzzle.cssAfter}
        markup={puzzle.markup}
        output={puzzle.output}
      />
    </Content>
  );
}

StylePuzzle.propTypes = {
  puzzle: PropTypes.object.isRequired
};

export default StylePuzzle;
