import React, { useRef } from "react";
import styled from "styled-components";

import Header from "../components/header";
import Bio from "../components/bio";
import Main from "../components/main";

import renderSections from "../helpers";

const Wrapper = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
  grid-template-areas:
    "header header header header header header"
    "side main main main main main"
    "side main main main main main"
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

export const Container = ({ appConfig }) => {
  const { header, bio, sections } = appConfig;

  const scrollRef = useRef(null);
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const refFour = useRef(null);
  const refFive = useRef(null);
  const refSix = useRef(null);
  const scrollToRef = (ref) => {
    scrollRef.current.scrollTo(0, ref.current.offsetTop);
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Header photoUrl={header.photoUrl} title={header.title} />
        <button onClick={() => scrollToRef(refSix)}>Click to scroll </button>
      </HeaderWrapper>
      <BioWrapper>
        <Bio intro={bio.intro} blurb={bio.blurb} />
      </BioWrapper>
      <MainWrapper>
        <Main ref={scrollRef}>
          {renderSections(sections)}
          {/* <SkillsSection ref={refOne} />
          <PortfolioSection ref={refTwo} />
          <Section ref={refThree} />
          <Section ref={refFour} />
          <Section ref={refFive} />
          <Section ref={refSix} /> */}
        </Main>
      </MainWrapper>
    </Wrapper>
  );
};

export default Container;
