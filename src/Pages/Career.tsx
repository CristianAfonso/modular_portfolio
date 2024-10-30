import React, { useState } from 'react';
import { workElements, studyElements } from '../globalVariables';
import CareerElement from '../Components/CareerElement';
const Career: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('')
  return (
    <>
    <hr/>
    <div>
      <button onClick={() => {setSelectedTab("education")}}>Education</button>
      <button onClick={() => {setSelectedTab("work")}}>Work</button>
    </div>
    { selectedTab &&
      <>
        <hr/>
        <div>
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
      </>
    }
    </>
  );
};

export default Career;