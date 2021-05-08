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

const Content = styled.p`
  white-space: pre-wrap;
`;

function Question({ title, content }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>{parse(content)}</Content>
    </Wrapper>
  );
}

Question.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Question;
