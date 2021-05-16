import React from "react";

import styled from "styled-components";

import landscape from "../../assets/ending/ending02.png";

const Wrapper = styled.div`
  width: 600px;
  height: 361px;
  position: relative;
  top: -200px;
  background: url(${landscape}) no-repeat center;
`;

function SecondScene() {
  return (
    <Wrapper>
    </Wrapper>
  );
}

export default SecondScene;
