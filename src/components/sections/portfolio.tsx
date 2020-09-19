import React, { useRef } from "react";

import Section from "./section";

const PortfolioSection = ({ ref }) => {
  return (
    <Section ref={ref}>
      Parcel Viewers Click here to see examples of parcel viewers I've worked on
      Budget Calculator Click here This is an application I designed while
      learning ASP.net MVC and the Dojo library. Javascript Widget Click here
      This a javascript widget I designed using the Require.js module loader.
      React Widget Click here A work in constant progress... React Widgets I've
      been playing around with using Styled-Components and some CSS animations.
      Learning the inner workings of React Click here A project to better
      understand how React works under the hood. Based off of this article
    </Section>
  );
};

export default PortfolioSection;
