import React from "react";
import styled from "styled-components";

import Header from "../components/header";
import Bio from "../components/bio";
import Main from "../components/main";

import { Data } from "../data";

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

const MainWrapper = styled.div`
  grid-area: main;
`;

//todo: style bio and setup container layout
export const Container = ({ data }: { data: Data }) => {
  const { header, bio } = data;
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header photoUrl={header.photoUrl} title={header.title} />
      </HeaderWrapper>
      <BioWrapper>
        <Bio intro={bio.intro} blurb={bio.blurb} />
      </BioWrapper>
      <MainWrapper>
        <Main />
      </MainWrapper>
    </Wrapper>
  );
};

export default Container;
