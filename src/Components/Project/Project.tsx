import { IoIosDocument } from "react-icons/io";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {ProjectModel} from '../../models'
import Tag from './Tag';
import { Link

 } from 'react-router-dom';
const Project: React.FC<ProjectModel> = (project) => {
    
        const date = project.date;
        const category = project.category;
        const languages = project.languages;
        const engine = project.engine;

        const tagsElements = {date, category, languages, engine};
        
    return (
        <div id='project'>
            <h4>{project.title}</h4>
            {project.quotes ?
                project.quotes?.map((quote, index) => {
                    return (
                        <p className='quote' key={index}>
                            "{quote}"
                        </p>
                    )
                })
                : <></>
            }
            <div className='tag_group'>
                {
                    Object.entries(tagsElements).map(([key, element], i) => (
                        <>
                        {Array.isArray(element) ? (
                            element.map((value, index) => (
                                <Tag key={key + index} title={key} content={value}/>
                            ))
                        ) : element && (
                            <Tag key={key} title={key} content={element}/>
                        )}
                        </>
                    ))
                }
            </div>
            <div className='icon_group'>
              { project.github_url      ?  <Link className="icon" to={project.github_url}><FaGithub></FaGithub></Link> : <></>}
              { project.doc_url         ?  <Link className="icon" to={project.doc_url}><IoIosDocument></IoIosDocument></Link> : <></>}
              { project.project_url     ?  <Link className="icon" to={project.project_url}><FaExternalLinkAlt></FaExternalLinkAlt></Link> : <></>}
            </div>
            <div className='project_description'>
                <p>
                    {project.description}
                </p>
            </div>
            {
                project.youtube_url &&
                    <div className='video_wrapper'>
                        <iframe title={project.title}   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                            src={`https://www.youtube.com/embed/${project.youtube_url.split("v=")[1]}`}
                        ></iframe>
                    </div>
            }
        </div>
    );
};
  
export default Project;