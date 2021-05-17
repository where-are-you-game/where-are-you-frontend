import React, { useState, useRef, useLayoutEffect, useEffect } from "react";

import parse from "html-react-parser";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { changePlayerAnswer } from "../../../actions/game";
import Numbers from "./Numbers";

const Style = styled.div`
  height: 300px;
  position: relative;
  border: 1px solid #dddddd;
  font-family: "Anonymous Pro";
  font-size: 16px;
  line-height: 16px;
  overflow-y: auto;
`;

const Alert = styled.p`
  position: absolute;
  top: -20px;
  color: ${({ theme }) => theme.color.red};
  font-size: 0.6rem;
`;

const StyleTextarea = styled.textarea`
  width: calc(100% - 43px - 0.5rem);
  height: 88px;
  margin: 0 0 0 43px;
  padding: 5px;
  display: block;
  font-family: "Anonymous Pro";
  line-height: 18px;
  resize: none;

  &::placeholder {
    color: #bbbbbb;
  }

  &:focus {
    outline: none;
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
  line-height: 22px;
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

const Output = styled.div`
  ${props => props.ouputStyle};
  grid-column: 2 / 3;
  grid-row: 1 / 4;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fcf9e9;
`;

function Answer(props) {
  const {
    name,
    style,
    cssBefore,
    cssAfter,
    markup,
    output,
    puzzleAnswer
  } = props;

  const [styleLines, setStyleLines] = useState(0);
  const [markupLines, setMarkupLines] = useState(0);
  const [alert, setAlert] = useState(null);
  const playerAnswer = useSelector(state => state.game.playerAnswer[name].answer);
  const dispatch = useDispatch();
  const outputRef = useRef();
  const styleRef = useRef();
  const markupRef = useRef();

  const handleAnswer = (event) => {
    const { value } = event.target;
    dispatch(changePlayerAnswer(name, value));
    checkAnswer(value);
  };

  const checkAnswer = (answer) => {
    if (answer.includes("position") || answer.includes("margin")) {
      if (puzzleAnswer.includes("position") === false) {
        setAlert("혹시 Element를 강제로 옮기려고 하는 거야? 다른 방법을 생각해보자. 잘 모르겠으면 HINT 버튼을 눌러봐!");
        return;
      }
    }

    setAlert(null);
  };

  useLayoutEffect(() => {
    const removeStyles = (node) => {
      node.removeAttribute("style");

      if (node.hasChildNodes) {
        for (let i = 0; i < node.children.length; i++) {
          removeStyles(node.children[i]);
        }
      }
    };

    removeStyles(outputRef.current);
    const selectedElements = outputRef.current.querySelectorAll(".selected");

    for (let i =0; i < selectedElements.length; i++) {
      selectedElements[i].style = playerAnswer;
    }

    setStyleLines(Math.round(styleRef.current.scrollHeight / 22));
    setMarkupLines(Math.round(markupRef.current.scrollHeight / 22));
  }, [playerAnswer]);

  return (
    <>
      <Style ref={styleRef}>
        {alert && <Alert>{alert}</Alert>}
        <Label color="red">CSS</Label>
        <Numbers line={styleLines} />
        <Pre>{cssBefore}</Pre>
        <StyleTextarea
          placeholder="/* Type style */"
          onChange={handleAnswer}
          value={playerAnswer}
        />
        <Pre>{cssAfter}</Pre>
      </Style>
      <Markup ref={markupRef}>
        <Label color="orange">HTML</Label>
        <Numbers line={markupLines} />
        <Pre>{markup}</Pre>
      </Markup>
      <Output ref={outputRef} ouputStyle={style}>
        {parse(output)}
      </Output>
    </>
  );
}

Answer.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  cssBefore: PropTypes.string.isRequired,
  cssAfter: PropTypes.string.isRequired,
  markup: PropTypes.string.isRequired,
  output: PropTypes.string.isRequired,
  puzzleAnswer: PropTypes.string.isRequired
};

export default Answer;
