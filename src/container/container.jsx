import React, { useRef, useState } from "react";
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
  const scrollToRef = (ref) => {
    scrollRef.current.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const getScrollPosition = () => {
    const scrollHeight = scrollRef.current.clientHeight/2;
    var scrollBottom = scrollRef.current.scrollTop + scrollHeight;
    Object.keys(sections).forEach((section) => {

      const top = sections[section].ref.current.offsetTop;
      const bottom = top + sections[section].ref.current.offsetHeight + 160;

      if((scrollBottom < bottom && section === "Skill Set") || (scrollBottom > top && scrollBottom < bottom)){
        const index = getSectionIndex(sections[section].linkText);
        updateActiveSection(index);
      }
    });
  };

  const getSectionIndex = (linkText) => {
    return Object.keys(sections).findIndex((section) => {
      return sections[section].linkText === linkText;
    });
  };

  Object.keys(sections).forEach((section) => {
    const index = getSectionIndex(sections[section].linkText);
    sections[section][`ref`] = useRef(null);
    sections[section][`scrollToRef`] = () => {
      updateActiveSection(index);
      scrollToRef(sections[section][`ref`]);
    };
  });

  const [activeSections] = useState(
    Object.keys(sections).map((section) => {
      return sections[section].linkText;
    })
  );

  const [activeSection, updateActiveSection] = useState(0);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Header
          photoUrl={header.photoUrl}
          title={header.title}
          sections={sections}
          activeSection={activeSections[activeSection]}
        />
      </HeaderWrapper>
      <BioWrapper>
        <Bio intro={bio.intro} blurb={bio.blurb} />
      </BioWrapper>
      <MainWrapper>
        <Main ref={scrollRef} getScrollPosition={getScrollPosition}>
          {renderSections(sections)}
        </Main>
      </MainWrapper>
    </Wrapper>
  );
};

export default Container;
