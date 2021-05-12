import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

import NotFoundImage from "../../assets/common/not_found.png";
import LinkButton from "./LinkButton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.div`
  width: 300px;
  height: 281px;
  background: url(${NotFoundImage}) no-repeat center;
  position: relative;
`;

const Title = styled.p`
  position: absolute;
  top: 35px;
  right: 20px;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 1.5rem;
  text-align: center;
`;

const Text = styled.p`
  margin: 0.8rem 0 0;
  font-size: 1.3rem;
`;

function NotFound() {
  return (
    <Wrapper>
      <Image>
        <Title>
          404
          <br/>
          Not Found
        </Title>
      </Image>
      <Text>이런.. 존재하지 않는 페이지입니다.</Text>
      <LinkButton
        path="/"
        title="메인으로 가기"
        color="black"
      />
    </Wrapper>
  );
}

export default NotFound;
