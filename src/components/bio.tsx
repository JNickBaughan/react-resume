import React, { FunctionComponent } from "react";
import styled from "styled-components";

// get our fontawesome imports
import {
  faEnvelope,
  faCodeBranch,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type BioProps = {
  intro: string;
  blurb: string;
};

const StyledBio = styled.div`
  margin: 135px 25px;
  padding: 5px;
  font-family: proxima-nova, Helvetica, Arial, sans-serif;
  border-top: solid;
`;

export const Bio = ({ intro, blurb }: BioProps) => {
  return (
    <StyledBio>
      <h4>{intro}</h4>
      <span>{blurb}</span>

      {/* <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faCodeBranch} />
      <FontAwesomeIcon icon={faLink} /> */}
    </StyledBio>
  );
};

export default Bio;
