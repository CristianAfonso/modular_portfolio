import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { globalVariables } from './globalVariables';
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Layout: React.FC = () => {
  return (
    <>
        <h1>{globalVariables.name}</h1>
        <img className="avatar_photo" alt="Nombre" src={`${process.env.PUBLIC_URL}/default_avatar.jpg`}/>
        <div className='icon_group'>
          { globalVariables.url_github    !== '' ?    <Link className="icon_link" to={globalVariables.url_github}><FaGithub></FaGithub></Link> : <></>}
          { globalVariables.url_youtube   !== '' ?    <Link className="icon_link" to={globalVariables.url_youtube}><FaYoutube></FaYoutube></Link> : <></>}
          { globalVariables.url_linkedin  !== '' ?    <Link className="icon_link" to={globalVariables.url_linkedin}><FaLinkedin></FaLinkedin></Link> : <></>}
          { globalVariables.url_mailto    !== '' ?    <Link className="icon_link" to={globalVariables.url_mailto}><IoIosMail></IoIosMail></Link> : <></>}
        </div>
        <hr/>
        <p>{globalVariables.my_description}</p>
        <hr/>
        <div className='button_group'>
          <Link to="/projects">Projects</Link>
          <Link to="/career">Career</Link>
          <Link to="/skills">Skills</Link>
        </div>
        <Outlet />
    </>
  );
};

export default Layout;