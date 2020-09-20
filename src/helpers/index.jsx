import React from "react";

import SkillsSection from "../components/sections/skills";
import PortfolioSection from "../components/sections/portfolio";

const renderSkills = (skills, key) => {
  return <SkillsSection subSections={skills.subSections} key={key} />;
};

const renderPortfolio = (portfolio, key) => {
  return <PortfolioSection key={key} />;
};

const renderMap = {
  skills: renderSkills,
  portfolio: renderPortfolio,
};

const renderSections = (sections) => {
  const keys = Object.keys(sections);
  return keys.map((section) => {
    return renderMap[section](sections[section], section);
  });
};

export default renderSections;
