import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.padding.base};
  position: absolute;
  bottom: -7rem;
  background: #ffffff;
`;

function Textbox({ text }) {
  return (
    <Text>
      {text}
    </Text>
  );
}

Textbox.propTypes = {
  text: PropTypes.string.isRequired
};

export default Textbox;
