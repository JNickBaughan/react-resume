import React, { FunctionComponent } from "react";
import styled from "styled-components";

// get our fontawesome imports
import {
  faEnvelope,
  faCodeBranch,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Bio = () => {
  return (
    <div>
      <h3>
        Nick here. Front end developer working with Costar Group in Richmond, Va
      </h3>
      <span>Well versed in Javascript. Working with React daily.</span>

      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faCodeBranch} />
      <FontAwesomeIcon icon={faLink} />
    </div>
  );
};

export default Bio;
