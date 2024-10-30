import React from 'react';
import SkillGroup from '../Components/SkillGroup';
import { skillsElements } from '../globalVariables';
const Skills: React.FC = () => {
  return (
    <div>
      <hr/>
      { skillsElements.map((element, index) => (
          <SkillGroup key={index} title={element.title} skills={element.skills}/>
        ))
      }
    </div>
  );
};

export default Skills;
