import React from "react";
import styled from "styled-components";
import { FlexBox } from "../reusuable/styles";

const IntroContainer = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 40px;
  width: 620px;
  height: 420px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
  .me {
    width: 90%;
    height: 250px;
  }
  .job {
    color: #aaa;
    font-size: 20px;
    letter-spacing: 1.5px;
  }
  .name {
    font-size: 24px;
    font-weight: bold;
    margin-top: 5px;
    border-bottom: 0.5px solid black;
    padding-bottom: 10px;
    width: 80%;
  }
  .label {
    font-weight: bold;
    text-align: right;
  }
`;
const IconsBox = styld.div`
 position : absolute;
 bottom : 0;
height : 70px;
background-color: blue`;

function Intro() {
  return (
    <div>
      <IntroContainer>
        <FlexBox>
          {/* 3만큼 가져온다 */}
          <div className="flex-4" style={{ padding: "20px" }}>
            {/* <img className="me" src={"#"} /> */}
          </div>
          {/* 5만큼 가져온다 */}
          <div className="flex-6" style={{ padding: "30px" }}>
            <div className="job">직업</div>
            <div className="name">이름</div>
            <br />
            <FlexBox>
              <div className="flex-2 label">Label</div>
              <div className="flex-1">&nbsp;</div>
              <div className="flex-6">Data</div>
            </FlexBox>
            <FlexBox style={{ marginTop: "10px" }}>
              <div className="flex-2 label">phone</div>
              <div className="flex-1">&nbsp;</div>
              <div className="flex-6">Data</div>
            </FlexBox>
            <FlexBox style={{ marginTop: "10px" }}>
              <div className="flex-2 label">수상 경력</div>
              <div className="flex-1">&nbsp;</div>
              <div className="flex-6">Data</div>
            </FlexBox>
            <FlexBox style={{ marginTop: "10px" }}>
              <div className="flex-2 label"></div>
              <div className="flex-1">&nbsp;</div>
              <div className="flex-6">Data</div>
            </FlexBox>
            <FlexBox style={{ marginTop: "10px" }}>
              <div className="flex-2 label"></div>
              <div className="flex-1">&nbsp;</div>
              <div className="flex-6">Data</div>
            </FlexBox>
            <FlexBox style={{ marginTop: "10px" }}>
              <div className="flex-2 label"></div>
              <div className="flex-1">&nbsp;</div>
              <div className="flex-6">Data</div>
            </FlexBox>
            <FlexBox style={{ marginTop: "10px" }}>
              <div className="flex-2 label"></div>
              <div className="flex-1">&nbsp;</div>
              <div className="flex-6">Data</div>
            </FlexBox>
          </div>
        </FlexBox>
      </IntroContainer>
    </div>
  );
}

export default Intro;
