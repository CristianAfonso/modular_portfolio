import React, { useState } from 'react';
import { workElements, studyElements } from '../globalVariables';
import CareerElement from '../Components/CareerElement';
const Career: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('')
  return (
    <>
    <div className='button_group'>
      <a onClick={() => {setSelectedTab("education")}}>Education</a>
      <a onClick={() => {setSelectedTab("work")}}>Work</a>
    </div>
    { selectedTab &&
        <div className='career_wrapper'>
          {
            selectedTab === 'education' ?
              studyElements.map((element, index) => (
                <CareerElement key={index} {...element}/>
              ))
            :
              workElements.map((element, index) => (
                <CareerElement key={index} {...element}/>
              ))
          }
        </div>
    }
    </>
  );
};

export default Career;