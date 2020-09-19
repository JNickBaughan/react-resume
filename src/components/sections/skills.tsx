import React, { useRef } from "react";

import Section from "./section";

const SkillsSection = ({ ref }) => {
  return (
    <Section ref={ref}>
      <h4>Languages, Libraries, Scripts, & Markups</h4>
      <b>Deep Knowldge</b>
      Javascript, React
      <br></br>
      <b>Broad Knowledge</b>
      Node.js, CSS, HTML
    </Section>
  );
};

export default SkillsSection;
