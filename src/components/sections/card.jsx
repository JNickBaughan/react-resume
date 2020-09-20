import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  margin-top: 60px;
  margin-bottom: 20px;
  box-shadow: 4px 4px 2px #888888;
  padding: 40px;
`;

export const Section = React.forwardRef((props, ref) => {
  return <StyledSection ref={ref}>{props.children}</StyledSection>;
});

export default Section;
