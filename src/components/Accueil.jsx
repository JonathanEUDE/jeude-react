import '../styles/Accueil.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Accueil() {
  return (
    <section className="accueil-background" id="accueil">
      <div className="accueil-container">
        <span className="green-title">Hello, je suis</span>{' '}
        <h1>Jonathan EUDE</h1>
        <h2>Consultant / Chef de projet / Développeur</h2>
        <p>
          Comprendre <strong>les besoins métiers</strong> d’une entreprise et
          répondre par <strong>des solutions sur mesure</strong>, c’est le chef
          de projet que je suis.
        </p>
        <p>
          Je suis un <strong>hybride</strong>, entre le{' '}
          <strong>fonctionnel</strong> et la <strong>technique</strong>.
        </p>
        <a
          href="mailto:jonathan.eude@gmail.com?subject=Contact depuis JEUDE.FR"
          target="_blank"
          rel="noreferrer"
        >
          Contactez-moi !
        </a>
      </div>
      <img
        id="photoprofil"
        src="/assets/images/Jonathan_EUDE_Photo_Profil.png"
        alt="Jonathan EUDE, Consultant / Chef de Projet / Développeur Freelance"
      />
      <figure
        className="softskills-container"
        aria-label="Force de proposition, Détermination, Sens du Service, Engagement"
      >
        <blockquote aria-hidden>
          <p className="colored-text">
            <span>Force de proposition</span>
          </p>

          <div className="cut-text-container">
            <p className="cut-text">
              <span>Sens du Service</span>
              <span>Détermination</span>
            </p>
          </div>

          <p className="colored-text second">
            <span>Engagement</span>
          </p>
        </blockquote>
      </figure>
    </section>
  );
}

export default Accueil;
