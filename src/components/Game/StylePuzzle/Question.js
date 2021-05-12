import React from "react";

import parse from "html-react-parser";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

const Title = styled.p`
  font-size: 3rem;
  font-weight: 700;
`;

const Hint = styled.a`
  margin: 1rem 1rem 0 0;
  padding: 0.2rem 0.3rem;
  float: right;
  background: ${({ theme }) => theme.color.black};
  color: #ffffff !important;
  font-size: 0.7rem;
  text-transform: uppercase;
  transition: 0.3s all;

  &:hover {
    background: ${({ theme }) => theme.color.blue};
  }
`;

const Content = styled.p`
  white-space: pre-wrap;
`;

function Question({ title, content, hint }) {
  return (
    <Wrapper>
      <Title>
        {title}
        <Hint
          href={hint}
          target="_blank"
          rel="noopener noreferrer"
        >
          hint
        </Hint>
      </Title>
      <Content>{parse(content)}</Content>
    </Wrapper>
  );
}

Question.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired
};

export default Question;
