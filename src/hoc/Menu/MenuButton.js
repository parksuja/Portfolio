import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const ButtonStyle = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  transition: all 0.3s;
  position: relative;
  border: 2px solid ${(props) => props.color};
  color: black;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  span {
    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

function MenuButton(props) {
  return (
    <ButtonStyle
      onMouseOver={() => props.showPage(props.index)}
      color={props.color}
    >
      <Icon
        name={props.icon}
        style={{
          fontSize: "50px",
          transform: "translateY(30%)",
          color: props.color,
        }}
      />
      <span>{props.text}</span>
    </ButtonStyle>
  );
}

export default MenuButton;
