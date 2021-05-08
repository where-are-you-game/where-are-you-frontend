import React, { useRef, useLayoutEffect } from "react";

import parse from "html-react-parser";
import PropTypes from "prop-types";
import styled from "styled-components";

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

const StyleInput = styled.input`
  width: calc(100% - 43px - 0.5rem);
  height: 24px;
  margin: 0 0 0 43px;
  padding: 8px;
  display: block;
  font-family: "Anonymous Pro";

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
    playerAnswer,
    handleAnswer,
    style,
    cssBefore,
    cssAfter,
    markup,
    output
  } = props;
  const outputRef = useRef();

  useLayoutEffect(() => {
    const selectedElement = outputRef.current.querySelector(".selected");
    selectedElement.style = playerAnswer;
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
        <StyleInput
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
  playerAnswer: PropTypes.string.isRequired,
  handleAnswer: PropTypes.func.isRequired,
  style: PropTypes.string.isRequired,
  cssBefore: PropTypes.string.isRequired,
  cssAfter: PropTypes.string.isRequired,
  markup: PropTypes.string.isRequired,
  output: PropTypes.string.isRequired
};

export default Answer;
