import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className='button_theme_toggler' onClick={toggleTheme}>
      {theme === 'light' ? <FaMoon></FaMoon> : <FaSun></FaSun>}
    </button>
  );
};

export default ThemeToggleButton;