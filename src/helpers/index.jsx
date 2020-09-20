import React from "react";

import SkillsSection from "../components/sections/skills";
import PortfolioSection from "../components/sections/portfolio";

const renderSkills = (skills, key) => {
  return (
    <SkillsSection
      subSections={skills.subSections}
      key={key}
      ref={skills.ref}
    />
  );
};

const renderPortfolio = (portfolio, key) => {
  return (
    <PortfolioSection
      key={key}
      ref={portfolio.ref}
      title={portfolio.sectionTitle}
    />
  );
};

const renderExperience = (portfolio, key) => {
  return (
    <PortfolioSection
      key={key}
      ref={portfolio.ref}
      title={portfolio.sectionTitle}
    />
  );
};

const renderEducation = (portfolio, key) => {
  return (
    <PortfolioSection
      key={key}
      ref={portfolio.ref}
      title={portfolio.sectionTitle}
    />
  );
};

const renderMap = {
  skills: renderSkills,
  portfolio: renderPortfolio,
  experience: renderExperience,
  education: renderEducation,
};

const renderSections = (sections) => {
  const keys = Object.keys(sections);
  return keys.map((section) => {
    return renderMap[section](sections[section], section);
  });
};

export default renderSections;
