import carpet from "../assets/livingroom/carpet.png";
import detailPlant from "../assets/livingroom/detail01.png";
import detailCarpet from "../assets/livingroom/detail02.png";
import door from "../assets/livingroom/door.png";
import frames from "../assets/livingroom/frames.png";
import letter from "../assets/livingroom/letter.png";
import plant from "../assets/livingroom/plant.png";
import sofa from "../assets/livingroom/sofa.png";
import table from "../assets/livingroom/table.png";

const LIVIGNROOM_OBJECTS = [
  {
    object: "carpet",
    src: carpet,
    x: 40,
    y: 450,
    width: 480,
    height: 89,
    detailImage: detailCarpet,
    text: "줄무늬 카펫이다. 가끔씩 먼지가 날린다."
  },
  {
    object: "door",
    src: door,
    x: 560,
    y: 50,
    width: 170,
    height: 309,
    password: "password5"
  },
  {
    object: "frames",
    src: frames,
    x: 60,
    y: 20,
    width: 400,
    height: 213,
    puzzle: "puzzle3"
  },
  {
    object: "letter",
    src: letter,
    x: 160,
    y: 390,
    width: 150,
    height: 39,
    puzzle: "puzzle1"
  },
  {
    object: "plant",
    src: plant,
    x: 470,
    y: 200,
    width: 60,
    height: 183,
    detailImage: detailPlant,
    text: "빨간색 산세베리아. 산세베리아 중에 빨간색이 원래 있었나?"
  },
  {
    object: "sofa",
    src: sofa,
    x: 50,
    y: 250,
    width: 400,
    height: 150,
    puzzle: "puzzle2"
  },
  {
    object: "table",
    src: table,
    x: 50,
    y: 382,
    width: 400,
    height: 125,
    text: "원형 테이블이다."
  }
];

export default LIVIGNROOM_OBJECTS;
