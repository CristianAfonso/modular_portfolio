import React, { useState } from 'react';
import { ProjectModel } from '../models';
import { projects } from '../globalVariables';
import Project from '../Components/Project/Project';
const Projects: React.FC = () => {
  const [shownProject, setShownProject] = useState<ProjectModel | null>(null);

  const handleChangeSelectedProject = async (project: ProjectModel) => {
    setShownProject(project);
    await new Promise(resolve => setTimeout(resolve, 10));
    const outletElement = document.getElementById('project');
    outletElement?.scrollIntoView({ behavior: 'smooth' });
  } 
  return (
    <>
    <div className='projects_container'>
      <div className='projects_wrapper' >
         {projects.map((project) => (
            <button className='project_button'
                    key={project.title.replace(/ /g,'').toLowerCase()} 
                    style={{backgroundImage: `url(${project.img_url})`}} 
                    onClick={() => {handleChangeSelectedProject(project)}}>
            </button>
         ))}
      </div>
    </div>
      { shownProject &&
        <Project key={shownProject.title.replace(/ /g,'').toLowerCase()} {...shownProject}/>
      }
    </>
  );
};

export default Projects;
