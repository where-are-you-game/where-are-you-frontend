import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  position: absolute;
  top: 0;
  z-index: 1;
`;

function Room() {
  return (
    <Wrapper>
      room
    </Wrapper>
  );
}

export default Room;
