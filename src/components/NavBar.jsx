import '../styles/NavBar.css';

import * as React from 'react';

function NavBar() {
  React.useEffect(() => {
    handleScroll();
  }, []);

  const scrollToAnchor = (anchorName) => {
    const anchorElement = document.getElementById(anchorName);
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    const anchorName = event.currentTarget.getAttribute('href').substring(1);
    scrollToAnchor(anchorName);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const header = document.querySelector('header');
    if (scrollY > 50) {
      header.classList.add('nav-scroll');
    } else {
      header.classList.remove('nav-scroll');
    }

    const links = document.querySelectorAll('.link');
    const anchors = document.querySelectorAll('section');

    for (const anchor of anchors) {
      const anchorName = anchor.getAttribute('id');
      const anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        const top = anchorElement.getBoundingClientRect().top;
        const bottom = anchorElement.getBoundingClientRect().bottom;
        if (top <= 50 && bottom >= 50) {
          for (const link of links) {
            const href = link.getAttribute('href');
            if (`#${anchorName}` === href) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          }
        }
      }
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <header>
      <div className="navbar-container">
        <img
          src="/assets/images/Logo_Jonathan_EUDE_Consulting.png"
          alt="Logo Jonathan EUDE Consulting"
        />
        <nav>
          <a href="#accueil" className="link" onClick={handleClick}>
            Accueil
          </a>
          <a href="#services" className="link" onClick={handleClick}>
            Services
          </a>
          <a href="#projets" className="link" onClick={handleClick}>
            Projets
          </a>
          <a href="#parcours" className="link" onClick={handleClick}>
            Parcours
          </a>
          <a href="#tarifs" className="link">
            Tarifs
          </a>
          <a href="#contact" className="link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
