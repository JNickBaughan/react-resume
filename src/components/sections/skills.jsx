import React, { useRef } from "react";

import Card from "./card";

const SkillsSection = ({ ref }) => {
  return (
    <Card ref={ref}>
      <h4>Languages, Libraries, Scripts, & Markups</h4>
      <b>Deep Knowldge</b>
      Javascript, React
      <br></br>
      <b>Broad Knowledge</b>
      Node.js, CSS, HTML
    </Card>
  );
};

export default SkillsSection;
