import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import styled from "styled-components";

import { fetchReviews } from "../../api";
import Loading from "../Loading";
import LinkButton from "../Shared/LinkButton";
import View from "./View";
import Write from "./Write";

const Wrapper = styled.div`
  width: 800px;
`;

const TopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.p`
  margin: 0;
  font-size: 4rem;
  font-weight: 700;
`;

const Alert = styled.div`
  width: 100%;
  margin: 0 0 2.5rem 0;
  padding: ${({ theme }) => theme.padding.big};
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  color: #ffffff;
`;

const Notice = styled.div`
  margin: 0 0 0.3rem 0;
  color: ${({ theme }) => theme.color.red};
  font-size: 1rem;
`;

function Review() {
  const isLastPasswordUnlocked = useSelector((state) => state.game.playerPassword["password5"].isUnlocked);
  const review = useSelector((state) => state.review);

  const renderReview = () => {
    const list = [];

    for (const id of review.allIds) {
      list.push(review.byId[id]);
    }

    return (
      list.map((review) => (
        <View
          key={review._id}
          name={review.name}
          clearTime={review.clearTime}
          content={review.content}
        />
      ))
    );
  };

  return (
    <Wrapper>
      <TopBox>
        <Title>REVIEW</Title>
        <LinkButton
          path="/"
          title="메인으로 가기"
          color="black"
        />
      </TopBox>
      <Notice>* 게임에 대한 스포일러와 비밀번호는 피해서 적어주세요!!</Notice>
      {isLastPasswordUnlocked
        ? <Write />
        : <Alert>엔딩을 본 이후에 리뷰를 남길 수 있습니다.</Alert>}
      {renderReview()}
    </Wrapper>
  );
}

export default Review;
