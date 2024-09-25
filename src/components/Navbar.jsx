import React, {useState} from "react";
import { menu, close } from "../assets";

const Navbar = () => {
  
  const [toggle, setToggle] = useState(false);
  
  const scrollOffsets = {
    work: 0,       // Offset for the "Arbeiten" section
    showreel: -230,  // Offset for the "Showreel" section
    contact: 0,      // No offset for "Kontakt"
    about: 50,       // Offset for the "Über mich" section
    impressum: 0,  // Offset for the "Impressum" section
    datenschutz: 0 // Offset for the "Datenschutz" section
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Get the element's position relative to the document
      const offset = scrollOffsets[id] || 0; // Get the offset or default to 0
      const offsetPosition = elementPosition + offset; // Adjust the position

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setToggle(false); // Close menu after clicking
    }
  };

 

  return (
    <nav className="navbar" >
      <div className='burger-menu'>
        <div className='b-icon-wrap'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='burger-icon'
            onClick={() => setToggle(!toggle)}
          />          
        </div>
        <div className={`${!toggle ? "hidden" : "flex"} menu-container`}>
            <ul className='menu-liste'>
              <li>
                <a
                  className='menu-text' 
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("work");
                  }}
                  >
                    Arbeiten</a>
              </li>
              <li>
                <a 
                  className='menu-text' 
                  href="#showreel"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("showreel");
                  }}>
                    Showreel</a>
              </li>
              <li>
                <a className='menu-text' 
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("contact");
                  }}>
                    Kontakt</a>
              </li>
              
              <li>
                <a className='menu-text' 
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("about");
                  }}>
                    Über mich</a>
              </li>
              <li>
                <a className='menu-text' 
                  href="#impressum"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("impressum");
                  }}>
                    Impressum</a>
              </li>
              <li>
                <a className='menu-text' 
                  href="#datenschutz"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("datenschutz");
                  }}>
                    Datenschutz</a>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;