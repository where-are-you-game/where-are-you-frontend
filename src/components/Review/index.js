import React, { useState, useRef, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import useFetchReviews from "../../hooks/useFetchReviews";
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
  const [page, setPage] = useState(1);
  const isLastPasswordUnlocked = useSelector((state) => state.game.playerPassword["password5"].isUnlocked);
  const hasReview = useSelector((state) => state.player.hasReview);
  const reviews = useSelector((state) => state.review.list);
  const observer = useRef();
  const dispatch = useDispatch();

  const {
    isLoading,
    error,
    hasMore
  } = useFetchReviews(page, dispatch);

  const lastReviewElementRef = useCallback((node) => {
    if (isLoading) return;

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prev) => prev + 1);
      }
    });

    if (node) {
      observer.current.observe(node);
    }
  }, [isLoading, hasMore]);

  const renderWrite = () => {
    if (isLastPasswordUnlocked === false) {
      return <Alert>엔딩을 본 이후에 리뷰를 남길 수 있습니다.</Alert>;
    }

    if (hasReview) {
      return <Alert>리뷰는 한 번만 작성할 수 있습니다.</Alert>;
    }

    return <Write />;
  };

  const renderReviews = () => {
    return reviews.map((review, index) => {
      if (reviews.length === 0) {
        return <p>등록된 리뷰가 없습니다.</p>;
      }

      if (reviews.length === index + 1) {
        return (
          <View
            lastRef={lastReviewElementRef}
            key={review._id}
            name={review.name}
            clearTime={review.clearTime}
            content={review.content}
          />
        );
      }

      return (
        <View
          lastRef={null}
          key={review._id}
          name={review.name}
          clearTime={review.clearTime}
          content={review.content}
        />
      );
    });
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
      {renderWrite()}
      {renderReviews()}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </Wrapper>
  );
}

export default Review;
