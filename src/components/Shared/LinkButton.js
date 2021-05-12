import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)`
  width: 200px;
  height: 60px;
  margin: 1rem 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid ${({ theme, color }) => theme.color[color]};
  text-align: center;
  cursor: pointer;
  transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);

  &::after {
    width: 100%;
    height: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: ${({ theme, color }) => theme.color[color]};
    content: "";
    transition: inherit;
  }

  &:hover {
    box-shadow: 1px 1px 15px 2px rgba(0, 0, 0, 0.1);
    color: #ffffff;

    &::after {
      height: 100%;
      top: 0;
    }
  }
`;

function LinkButton({ path, title, color }) {
  return (
    <Button to={path} color={color}>
      {title}
    </Button>
  );
}

LinkButton.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default LinkButton;
