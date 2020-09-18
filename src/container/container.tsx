import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import Bio from "../components/bio";

const Wrapper = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
  grid-template-areas:
    "header header header header header header"
    "header header header header header header"
    "header header header header header header"
    "side main main main main main"
    "side main main main main main"
    "side main main main main main"
    "side main main main main main"
    "side main main main main main"
    "side main main main main main"
    "side main main main main main"
    "side main main main main main"
    "side main main main main main";
`;

const HeaderWrapper = styled.div`
  grid-area: header;
`;

const BioWrapper = styled.div`
  grid-area: side;
`;

//todo: style bio and setup container layout
export const Container = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <BioWrapper>
        <Bio />
      </BioWrapper>
    </Wrapper>
  );
};

export default Container;
