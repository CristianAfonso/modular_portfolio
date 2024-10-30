import { IoIosDocument } from "react-icons/io";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {ProjectModel} from '../../models'
import styles from './Project.module.css'
import Tag from './Tag/Tag';
import { Link

 } from 'react-router-dom';
const Project: React.FC<ProjectModel> = (project) => {
    
        const date = project.date;
        const categories = project.categories;
        const languages = project.languages;
        const engine = project.engine;

        const tagsElements = {date, categories, languages, engine};
    return (
        <div className={styles.project_container}>
            <h4>{project.title}</h4>
            {project.quotes ?
                project.quotes?.map((quote, index) => {
                    return (
                        <p className={styles.quote_text} key={index}>
                            {quote}
                        </p>
                    )
                })
                : <></>
            }
            <div className={styles.tags_container}>
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
              { project.github_url      ?  <Link className="icon_link" to={project.github_url}><FaGithub></FaGithub></Link> : <></>}
              { project.doc_url         ?  <Link className="icon_link" to={project.doc_url}><IoIosDocument></IoIosDocument></Link> : <></>}
              { project.project_url     ?  <Link className="icon_link" to={project.project_url}><FaExternalLinkAlt></FaExternalLinkAlt></Link> : <></>}
            </div>
            <div className={styles.description_container}>
                <p>
                    {project.description}
                </p>
            </div>
            {
                project.youtube_url &&
                    <div className={styles.video_wrapper}>
                        <iframe title={project.title}
                            src={project.youtube_url}
                        ></iframe>
                    </div>
            }
        </div>
    );
};
  
export default Project;