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

export const Bio = ({ intro, blurb }: BioProps) => {
  return (
    <div>
      <h3>{intro}</h3>
      <span>{blurb}</span>

      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faCodeBranch} />
      <FontAwesomeIcon icon={faLink} />
    </div>
  );
};

export default Bio;
