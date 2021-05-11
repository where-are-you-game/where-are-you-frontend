import React, { useRef, useLayoutEffect } from "react";

import parse from "html-react-parser";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { changePlayerAnswer } from "../../../actions/game";
import Numbers from "./Numbers";

const Output = styled.div`
  ${props => props.ouputStyle};
  grid-column: 2 / 3;
  grid-row: 1 / 4;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fcf9e9;
`;

const Style = styled.div`
  position: relative;
  border: 1px solid #dddddd;
  font-family: "Anonymous Pro";
  font-size: 16px;
`;

const StyleTextarea = styled.textarea`
  width: calc(100% - 43px - 0.5rem);
  height: 95px;
  margin: 0 0 0 43px;
  padding: 8px;
  display: block;
  font-family: "Anonymous Pro";
  resize: none;

  &::placeholder {
    color: #bbbbbb;
  }
`;

const Markup = styled.div`
  position: relative;
  background: #f0f0f0;
  font-family: "Anonymous Pro";
  font-size: 16px;
`;

const Pre = styled.pre`
  margin: 0 0 0 25px;
  line-height: 1.5rem;
`;

const Label = styled.span`
  width: 50px;
  padding: 0.1rem 0.2rem;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  background: ${({ color }) => color};
  color: #ffffff;
  text-align: center;
`;

function Answer(props) {
  const {
    name,
    style,
    cssBefore,
    cssAfter,
    markup,
    output
  } = props;
  const outputRef = useRef();

  const playerAnswer = useSelector(state => state.game.playerAnswer[name].answer);
  const dispatch = useDispatch();

  const handleAnswer = (event) => {
    const { value } = event.target;
    dispatch(changePlayerAnswer(name, value));
  };

  useLayoutEffect(() => {
    const selectedElements = outputRef.current.querySelectorAll(".selected");

    for (let i =0; i < selectedElements.length; i++) {
      selectedElements[i].style = playerAnswer;
    }
  }, [playerAnswer]);

  return (
    <>
      <Output ref={outputRef} ouputStyle={style}>
        {parse(output)}
      </Output>
      <Style>
        <Label color="red">CSS</Label>
        <Numbers />
        <Pre>{cssBefore}</Pre>
        <StyleTextarea
          placeholder="/* Type style */"
          onChange={handleAnswer}
          value={playerAnswer}
        />
        <Pre>{cssAfter}</Pre>
      </Style>
      <Markup>
        <Label color="orange">HTML</Label>
        <Numbers />
        <Pre>{markup}</Pre>
      </Markup>
    </>
  );
}

Answer.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  cssBefore: PropTypes.string.isRequired,
  cssAfter: PropTypes.string.isRequired,
  markup: PropTypes.string.isRequired,
  output: PropTypes.string.isRequired
};

export default Answer;
