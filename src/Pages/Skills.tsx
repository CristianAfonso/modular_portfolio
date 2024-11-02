import React from 'react';
import SkillGroup from '../Components/SkillGroup';
import { skillsElements } from '../globalVariables';
const Skills: React.FC = () => {
  return (
    <>
      { skillsElements.map((element, index) => (
          <SkillGroup key={index} title={element.title} skills={element.skills}/>
        ))
      }
    </>
  );
};

export default Skills;
