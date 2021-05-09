import carpet from "../assets/kitchen/carpet.png";
import counter from "../assets/kitchen/counter.png";
import cuttingBoard from "../assets/kitchen/cutting_board.png";
import fridge from "../assets/kitchen/fridge.png";
import milk from "../assets/kitchen/milk.png";
import sandwich from "../assets/kitchen/sandwich.png";
import table from "../assets/kitchen/table.png";
import windowClose from "../assets/kitchen/window_close.png";
import windowOpen from "../assets/kitchen/window_open.png";

const KITCHEN_OBJECTS = [
  {
    object: "fridge",
    src: fridge,
    x: 40,
    y: 50,
    width: 184,
    height: 361,
    password: "password1",
    puzzle: "puzzle7"
  },
  {
    object: "window",
    src: windowClose,
    srcAfter: windowOpen,
    x: 500,
    y: 30,
    width: 237,
    height: 151,
    text: "커텐을 열었더니 거리를 지나다니는 사람들이 보인다."
  },
  {
    object: "counter",
    src: counter,
    x: 204,
    y: 124,
    width: 477,
    height: 287,
    puzzle: "puzzle6",
    overlayObjects: ["milk", "table", "sandwich", "cuttingBoard"]
  },
  {
    object: "cuttingBoard",
    src: cuttingBoard,
    x: 500,
    y: 190,
    width: 125,
    height: 38,
    puzzle: "puzzle5"
  },
  {
    object: "carpet",
    src: carpet,
    x: 20,
    y: 430,
    width: 379,
    height: 126,
    text: "소용돌이 모양 카펫이다. 오래 쳐다보면 어지럽다."
  },
  {
    object: "table",
    src: table,
    x: 375,
    y: 360,
    width: 418,
    height: 241,
    text: "파란색 냉장고와 노란색 식탁의 조합이라니. 누가 고른 색이더라?",
    overlayObjects: ["milk", "sandwich"]
  },
  {
    object: "milk",
    src: milk,
    x: 620,
    y: 270,
    width: 67,
    height: 147,
    text: "샌드위치랑 같이 먹으면 더 맛있는 우유. 하지만 초코 우유가 더 맛있다."
  },
  {
    object: "sandwich",
    src: sandwich,
    x: 430,
    y: 350,
    width: 170,
    height: 90,
    puzzle: "puzzle4"
  }
];

export default KITCHEN_OBJECTS;
