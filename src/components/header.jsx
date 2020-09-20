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
  background: #352d31;
  border-radius: 5px;
  height: 60px;
  margin-right: 2%;
  margin-left: 2%;
  position: fixed;
  width: 95%;
  top: 20px;
  display: grid;
  grid-template-columns: 1% 25% 45% 30%;
  grid-template-areas: "photo title blank links";
`;

const Title = styled.h2`
  font-family: proxima-nova, Helvetica, Arial, sans-serif;
  color: #fff;
  padding: 0 0 10px 174px;
  grid-area: title;
`;

const Photo = styled.div`
  border-radius: 50%;
  display: inline-block;
  width: 160px;
  height: 160px;
  background: url(${(props) => props.photoUrl});
  border: 2px solid #777;
  float: left;
  position: absolute;
  top: 8px;
  left: 10px;
  grid-area: photo;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  grid-area: links;
`;

const Link = styled.div`
  font-family: proxima-nova, Helvetica, Arial, sans-serif;
  margin-top: 10px;
  padding: 10px;
  color: #fff;
  font-size: large;
  font-weight: bold;
`;

export const Header = ({ photoUrl, title, sections }) => {
  return (
    <div>
      <HeaderContainer>
        <Photo photoUrl={photoUrl} />
        <Title>{title}</Title>
        <LinkContainer>
          {Object.keys(sections).map((section) => {
            return (
              <Link>
                <a onClick={sections[section].scrollToRef}>
                  {sections[section].linkText}
                </a>
              </Link>
            );
          })}
        </LinkContainer>
      </HeaderContainer>
    </div>
  );
};

export default Header;
