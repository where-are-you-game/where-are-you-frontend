import bathroomItems from "./bathroom";
import bedroomItems from "./bedroom";
import catroomItems from "./catroom";
import kitchenItems from "./kitchen";
import livingroomItems from "./livingroom";

const ROOMS = {
  livingroom: {
    items: livingroomItems,
    leftButton: {
      path: "/game/room/kitchen",
      text: "부엌"
    },
    rightButton: {
      path: "/game/room/bedroom",
      text: "방"
    }
  },
  kitchen: {
    items: kitchenItems,
    leftButton: null,
    rightButton: {
      path: "/game/room/livingroom",
      text: "거실"
    }
  },
  bedroom: {
    items: bedroomItems,
    leftButton: {
      path: "/game/room/livingroom",
      text: "거실"
    },
    rightButton: {
      path: "/game/room/catroom",
      text: "고양이방"
    }
  },
  catroom: {
    items: catroomItems,
    leftButton: {
      path: "/game/room/bedroom",
      text: "방"
    },
    rightButton: {
      path: "/game/room/bathroom",
      text: "화장실"
    }
  },
  bathroom: {
    items: bathroomItems,
    leftButton: {
      path: "/game/room/catroom",
      text: "고양이방"
    },
    rightButton: null
  }
};

export default ROOMS;
