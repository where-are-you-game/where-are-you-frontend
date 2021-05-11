import React from "react";

import styled from "styled-components";

const List = styled.ul`
  width: 20px;
  height: 100%;
  margin: 0;
  padding: 3px;
  position: absolute;
  background: #dddddd;

  li {
    padding: 0 0 9px 0;
    color: ${({ theme }) => theme.color.black};
    font-size: 0.6rem;
    text-align: right;
  }
`;

function Numbers() {
  return (
    <List>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </List>
  );
}

export default Numbers;
