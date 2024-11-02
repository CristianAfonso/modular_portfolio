import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { globalVariables } from './globalVariables';
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import ThemeToggleButton from './Components/ThemeTogglerButton';


const Layout: React.FC = () => {
  
  const handleUseLink = async() => {
    
      const outletElement = document.getElementById('outlet');
      if (outletElement) {
        await new Promise(resolve => setTimeout(resolve, 10)); //Espera al cambio en la navegación
        outletElement.scrollIntoView({ behavior: 'smooth' });
      }
  }
  return (
    <>
        <ThemeToggleButton/>
        <section id="hero">
          <h1>{globalVariables.name}</h1>
          <img alt="avatar" src={`${process.env.PUBLIC_URL}/${globalVariables.my_photo}`}/>
          <div className='icon_group'>
            { globalVariables.url_github   && <a className="icon" target="_blank" rel="noreferrer" href={'http://' + globalVariables.url_github}><FaGithub></FaGithub></a> }
            { globalVariables.url_youtube  && <a className="icon" target="_blank" rel="noreferrer" href={'http://' + globalVariables.url_youtube}><FaYoutube></FaYoutube></a> }
            { globalVariables.url_linkedin && <a className="icon" target="_blank" rel="noreferrer" href={'http://' + globalVariables.url_linkedin}><FaLinkedin></FaLinkedin></a> }
            { globalVariables.url_mailto   && <a className="icon" target="_blank" rel="noreferrer" href={'http://' + globalVariables.url_mailto}><IoIosMail></IoIosMail></a> }
          </div>
        </section>
        <section>
          <p>{globalVariables.my_description}</p>
        </section>
        <section>
          <div className='button_group'>
            <Link to="/projects#outlet" onClick={() => {handleUseLink()}}><span>Projects</span></Link>
            <Link to="/career#outlet"   onClick={() => {handleUseLink()}}><span>Career</span></Link>
            <Link to="/skills#outlet"   onClick={() => {handleUseLink()}}><span>Skills</span></Link>
          </div>
        </section>
        <section id='outlet'>
          <Outlet />
        </section>
    </>
  );
};

export default Layout;