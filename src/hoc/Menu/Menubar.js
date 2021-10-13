import React from "react";
import MenuButton from "./MenuButton";
import styled from "styled-components";

const Menu = styled.div`
  position: fixed; //스크롤을 내리든 올리든 위치고정
  display: flex; //그리들 쉽게 사용
  justify-content: space-between; // 떨어져있는게 일정할 수 있도록
  bottom: 0;
  width: 560px;
  background-color: #efefef;
  height: 120px;
  left: 50%;
  padding: 15px 30px;
  padding-bottom: 10px;
  transform: translateX(-50%);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;
function Menubar(props) {
  const menus = [
    {
      icon: "user",
      color: "black",
      text: "Intro",
    },
    {
      icon: "user",
      color: "#5CD3F3",
      text: "Intro",
    },
    {
      icon: "user",
      color: "#87BF00",
      text: "Intro",
    },
    {
      icon: "user",
      color: "#DE6800",
      text: "Intro",
    },
  ];

  const renderMenus = (arr) => {
    return arr.map((a, index) => {
      return (
        <MenuButton
          showPage={props.showPage}
          index={index}
          key={index}
          icon={a.icon}
          text={a.text}
          color={a.color}
        />
      );
    });
  };

  return (
    <div>
      <Menu>{renderMenus(menus)}</Menu>
    </div>
  );
}

export default Menubar;
