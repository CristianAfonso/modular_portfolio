import React, { useState } from 'react';
import { ProjectModel } from '../../models';
import { projects } from '../../globalVariables';
import Project from '../../Components/Project/Project';
import styles from './Projects.module.css'
const Projects: React.FC = () => {
  const [shownProject, setShownProject] = useState<ProjectModel | null>(null);

  const handleChangeSelectedProject = (project: ProjectModel) => {
    setShownProject(project);
    console.log(project);
  } 
 
  return (
    <>
      <hr/>
      <div>
         {projects.map((project) => (
            <button className={styles.project_button}
                    key={project.title.replace(/ /g,'').toLowerCase()} 
                    style={{backgroundImage: `url(${project.img_url})`}} 
                    onClick={() => {handleChangeSelectedProject(project)}}>
            </button>
         ))}
      </div>
      <hr/>
      { shownProject &&
        <Project key={shownProject.title.replace(/ /g,'').toLowerCase()} {...shownProject}/>
      }
      
    </>
  );
};

export default Projects;
