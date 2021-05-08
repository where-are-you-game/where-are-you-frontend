import carpet from "../assets/kitchen/carpet.png";
import counter from "../assets/kitchen/counter.png";
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
    text: "냉장고."
  },
  {
    object: "window",
    src: windowClose,
    srcAfter: windowOpen,
    x: 500,
    y: 30,
    width: 237,
    height: 151,
    text: "창문"
  },
  {
    object: "counter",
    src: counter,
    x: 204,
    y: 124,
    width: 477,
    height: 287,
    text: "카운터",
    overlayObjects: ["milk", "table", "sandwich"]
  },
  {
    object: "carpet",
    src: carpet,
    x: 20,
    y: 430,
    width: 379,
    height: 126,
    text: "카펫"
  },
  {
    object: "table",
    src: table,
    x: 375,
    y: 360,
    width: 418,
    height: 241,
    text: "테이블",
    overlayObjects: ["milk", "sandwich"]
  },
  {
    object: "milk",
    src: milk,
    x: 620,
    y: 270,
    width: 67,
    height: 147,
    text: "우유"
  },
  {
    object: "sandwich",
    src: sandwich,
    x: 430,
    y: 350,
    width: 170,
    height: 90,
    text: "샌드위치"
  }
];

export default KITCHEN_OBJECTS;
