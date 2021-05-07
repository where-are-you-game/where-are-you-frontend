import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
`;

function Loading() {
  return (
    <Wrapper>
      Loading...
    </Wrapper>
  );
}

export default Loading;
