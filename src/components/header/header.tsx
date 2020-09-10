import React, { FunctionComponent } from "react";
import styled from "styled-components";

//red
//D35B3F

//yellow
//DED797

//lite green
//B0C38D

//green
//718C6A

//blue
// 31595E

//grey
// #352d31;

const HeaderContainer = styled.header`
  z-index: 1000;
  background: #31595e;
  border-radius: 5px;
  height: 60px;
  margin-right: 2%;
  margin-left: 2%;
  position: fixed;
  width: 95%;
  top: 20px;
`;

const Title = styled.h2`
  font-family: proxima-nova, Helvetica, Arial, sans-serif;
  color: #fff;
  padding: 0 0 10px 174px;
`;

const Photo = styled.div`
  border-radius: 50%;
  display: inline-block;
  width: 160px;
  height: 160px;
  background: url("/profileImageDeskTop.png");
  border: 2px solid #777;
  float: left;
  position: absolute;
  top: 8px;
  left: 10px;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Photo />
      <Title>[ J. Nick Baughan ]</Title>
    </HeaderContainer>
  );
};

export default Header;
