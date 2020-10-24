import React from "react";

import SkillsSection from "../components/sections/skills";
import PortfolioSection from "../components/sections/portfolio";
import EducationSection from "../components/sections/education";
import ExperienceSection from "../components/sections/experience";

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
    <ExperienceSection
      key={key}
      ref={portfolio.ref}
      title={portfolio.sectionTitle}
    />
  );
};

const renderEducation = (education, key) => {
  return (
    <EducationSection
      key={key}
      ref={education.ref}
      title={education.sectionTitle}
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
