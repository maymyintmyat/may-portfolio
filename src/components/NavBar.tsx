import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const navbarClasses = `navbar ${isMenuActive ? "active" : ""} ${
    isScrolled ? "scrolled" : ""
  }`;

  return (
    <header className={`header ${isMenuActive ? "cloud-active" : ""}`}>
      <nav
        className={`navbar ${isMenuActive ? "active" : ""} ${
          isScrolled ? "scrolled" : ""
        }`}>
        <a href="http://" className="nav-logo">
          maymyintmyat.com
        </a>
        <ul className={isMenuActive ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="http://" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="http://" className="nav-link">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="http://" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="http://" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <div
          className={isMenuActive ? "hamburger active" : "hamburger"}
          onClick={handleToggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
