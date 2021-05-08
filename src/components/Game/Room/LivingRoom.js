import React, { useRef, useEffect } from "react";

import { useDispatch } from "react-redux";

import { changeTextBox } from "../../../actions/game";
import { showPuzzleModal } from "../../../actions/puzzleModal";
import OBJECT from "../../../constants/livingroom.js";
import { drawImage, clickImage } from "../../../utils/canvas";
import LeftButton from "../../Shared/LeftButton";
import RightButton from "../../Shared/RightButton";

const puzzle1 = {
  title: "편지",
  content: "편지가 있다. 그런데 글씨가 너무 흐려서 안 보여..\n글씨 색을 <b>black</b>으로 바꾸면 보이지 않을까?",
  style: "#letter { background: #ffffff; padding: 1rem; margin: 1rem; color: rgba(0, 0, 0, 0.05); }",
  cssBefore: "#letter {\n  background: #ffffff;",
  cssAfter: "}",
  markup: "<div id='letter'>\n  편지내용\n</div>",
  output: "<div id='letter'>이 편지를 읽고 있다면 문제를 푸는 방법을 알았다는 뜻이겠지?<br/>숨겨진 문제들을 풀면 나를 찾을 수 있을 거야.<br/>문제를 풀고 나를 찾아줘.<br/>P.S 1: 문제를 푸는 방식은 다양할 수 있지만, 정확한 답은 단 하나 뿐이니까 힌트를 잘 읽어줘!<br/>P.S 2: 세미콜론 잊어버리면 안 돼!</div>"
};

function LivingRoom() {
  const dispatch = useDispatch();
  const canvasRef = useRef();

  const showPuzzle = (object) => {
    if (object.text) {
      dispatch(changeTextBox(object.text));
    } else {
      dispatch(showPuzzleModal(puzzle1));
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    for (const object in OBJECT) {
      const image = OBJECT[object];
      drawImage(context, image.src, image.x, image.y, image.width, image.height);
    }

    clickImage(canvas, OBJECT, showPuzzle);
  }, []);

  return (
    <>
      <LeftButton path="/game/kitchen" text="부엌" />
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
      />
      <RightButton path="/game/room" text="방" />
    </>
  );
}

export default LivingRoom;
