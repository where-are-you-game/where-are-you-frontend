import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import Kitchen from "./Room/Kitchen";
import Livingroom from "./Room/LivingRoom";

const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  position: absolute;
  top: 0;
  z-index: 1;
`;

function Room({ room }) {
  const renderRoom = (room) => {
    switch (room) {
      case "livingroom":
        return <Livingroom />;
      case "kitchen":
        return <Kitchen />;
      default:
        return <Livingroom />;
    }
  };

  return (
    <Wrapper>
      {renderRoom(room)}
    </Wrapper>
  );
}

Room.propTypes = {
  room: PropTypes.string.isRequired
};

export default Room;
