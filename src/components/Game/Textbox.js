import React from "react";

import { useSelector } from "react-redux";
import styled from "styled-components";

const Text = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.padding.base};
  position: absolute;
  bottom: -7rem;
  background: #ffffff;
`;

function Textbox() {
  const text = useSelector(state => state.game.textBox);

  return (
    <Text>
      {text}
    </Text>
  );
}

export default Textbox;
