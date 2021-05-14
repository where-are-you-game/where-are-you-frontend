import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { countClearTime } from "../../../actions/player";

const Wrapper = styled.div`
  padding: 0.3rem 0.5rem;
  position: absolute;
  top: -45px;
  left: calc((250px + 3rem) * -1);
  z-index: 1;
  background: ${({ theme }) => theme.color.black};
  color: #ffffff;
`;

const Label = styled.span`
  padding: 0 0.5rem 0 0;
`;

function Timer() {
  const clearTime = useSelector((state) => state.player.clearTime);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(countClearTime());
    }, 1000);
  }, [clearTime]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const renderTimer = (time) => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  };

  return (
    <Wrapper>
      <Label>PLAY TIME</Label>
      {renderTimer(clearTime)}
    </Wrapper>
  );
}

export default Timer;
