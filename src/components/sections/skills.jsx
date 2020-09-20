import React, { useRef } from "react";

import Section from "./section";
import Card from "./card";

const SkillsSection = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <Card>
        <h4>Languages, Libraries, Scripts, & Markups</h4>
        <b>Deep Knowldge</b>
        Javascript, React
        <br></br>
        <b>Broad Knowledge</b>
        Node.js, CSS, HTML
      </Card>
    </Section>
  );
});

export default SkillsSection;
