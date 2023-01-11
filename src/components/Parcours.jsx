import { useEffect } from 'react';
import '../styles/Parcours.css';

function Parcours() {
  window.addEventListener('scroll', () => {
    let parcours = document.querySelector('#parcours');
    let scrollY = window.scrollY;
    let topParcours = parcours.offsetTop;
    let heightParcours = parcours.offsetHeight;
    let bottomParcours = topParcours + heightParcours;
    /*console.log(
      topParcours,
      heightParcours,
      bottomParcours,
      scrollY,
      topParcours < scrollY,
      scrollY < bottomParcours
    );*/
    const filAriane = document.querySelector('.fil-ariane');
    if (topParcours < scrollY + 20 && scrollY < bottomParcours) {
      filAriane.classList.add('fix-fil-ariane');
      let calcul = (scrollY - topParcours + 200) / 700;
      let calculatedStep = Math.ceil(calcul);
      let percentageStep = (1 - (calculatedStep - calcul)) * 100;

      calculatedStep = calculatedStep ? calculatedStep : 0;

      Array.from(document.querySelectorAll('.step-info')).forEach(function (
        el,
        idx
      ) {
        if (idx + 1 !== calculatedStep) el.classList.remove('active');
      });
      let calculatedStepInfoElement = document.querySelector(
        '.step-info-' + calculatedStep
      );
      if (calculatedStepInfoElement)
        calculatedStepInfoElement.classList.add('active');

      Array.from(document.querySelectorAll('.step')).forEach(function (
        el,
        idx
      ) {
        if (calculatedStep < idx + 1) {
          el.classList.remove('progress');
          el.classList.remove('active');
        } else {
          el.classList.add('active');
          if (percentageStep > 50) {
            el.classList.add('progress');
          }
          if (calculatedStep === idx + 1) {
            if (percentageStep < 50) {
              el.classList.remove('progress');
            }
          }
        }
      });
    } else {
      Array.from(document.querySelectorAll('.step')).forEach(function (
        el,
        idx
      ) {
        el.classList.remove('progress');
        el.classList.remove('active');
      });
      filAriane.classList.remove('fix-fil-ariane');
    }
  });

  return (
    <section id="parcours">
      <div className="fil-ariane">
        <div>
          <div className="step step-1">
            <img
              src="assets/images/parcours/openclassrooms.png"
              alt="Logo OpenClassRooms"
            />
          </div>
          <div className="step step-2">
            <img
              src="assets/images/parcours/sqi.png"
              alt="Logo SQI IT Solutions"
            />
          </div>
          <div className="step step-3">
            <img
              src="assets/images/parcours/bolloré_energy.png"
              alt="Logo Bolloré Énergy"
            />
          </div>
          <div className="step step-4">
            <img
              src="assets/images/parcours/FNAC_COM.jpg"
              alt="Logo Fnac.com"
            />
          </div>
          <div className="step step-5">
            <img
              src="assets/images/parcours/tf1-pub.jpg"
              alt="Logo TF1 Publicité"
            />
          </div>
          <div className="step step-6">
            <img src="assets/images/parcours/etudes.jpg" alt="Logo Etudes" />
          </div>
        </div>
      </div>

      <div className="steps-informations">
        <div className="step-info step-info-1">
          <div className="step-info-left">
            <div className="step-info-left-top">
              <img
                src="assets/images/parcours/openclassrooms.png"
                alt="Logo OpenClassRooms"
                className="step-logo"
              />
              <h4 className="green-title">Formation Développeur Web</h4>
              <small>6 mois - Juillet 2022 - Décembre 2022</small>
              <br />
              <small> Formation à distance</small>
            </div>
            <div className="step-info-left-bottom">
              A travers cette formation, je souhaitais me mettre à jour sur le
              plan technique.
              <br /> Mon expérience de Consultant - Chef de Projet, je
              souhaitais mêler mes connaissances fonctionnelles avec les
              nouvelles technologies.
            </div>
          </div>
          <ul className="step-info-right">
            <li>
              Découper, assembler et intégrer tous les éléments d’une maquette
              graphique en HTML5 et CSS
            </li>
            <li>Ajouter du contenu audio et vidéo en HTML5</li>
            <li>Animer les pages web avec CSS3</li>
            <li>Appliquer les standards du web et les normes en vigueur </li>
            <li>
              Construire un site web fluide s’adaptant à tout type d’écran (web,
              smartphone et tablette)
            </li>
            <li>
              Améliorer le référencement naturel en utilisant les balises selon
              leur sémantique
            </li>
            <li>
              Faire réagir la page web en fonction des actions de l’utilisateur
              en JavaScript
            </li>
            <li>
              Se connecter à un service web pour exploiter des données tierces
              (API)
            </li>
            <li>
              Gérer les comptes utilisateurs ; concevoir un site maintenable
              grâce à la gestion des erreurs et exceptions
            </li>
            <li>Créer, gérer et afficher le contenu d’une base de données.</li>
          </ul>
        </div>
        <div class="step-info step-info-2">
          <div className="step-info-left">
            <div className="step-info-left-top">
              <img
                src="assets/images/parcours/sqi.png"
                alt="Logo SQI IT Solutions"
                className="step-logo"
              />
              <h4 className="green-title">Formation Développeur Web</h4>
              <small>6mois - Juillet 2022 - Décembre 2022</small>
              <br />
              <small> Formation à distance</small>
            </div>
            <div className="step-info-left-bottom">
              A travers cette formation, je souhaitais me mettre à jour sur le
              plan technique.
              <br /> Mon expérience de Consultant - Chef de Projet, je
              souhaitais mêler mes connaissances fonctionnelles avec les
              nouvelles technologies.
            </div>
          </div>
          <ul className="step-info-right">
            <li>
              Découper, assembler et intégrer tous les éléments d’une maquette
              graphique en HTML5 et CSS
            </li>
            <li>Ajouter du contenu audio et vidéo en HTML5</li>
            <li>Animer les pages web avec CSS3</li>
            <li>Appliquer les standards du web et les normes en vigueur </li>
            <li>
              Construire un site web fluide s’adaptant à tout type d’écran (web,
              smartphone et tablette)
            </li>
            <li>
              Améliorer le référencement naturel en utilisant les balises selon
              leur sémantique
            </li>
            <li>
              Faire réagir la page web en fonction des actions de l’utilisateur
              en JavaScript
            </li>
            <li>
              Se connecter à un service web pour exploiter des données tierces
              (API)
            </li>
            <li>
              Gérer les comptes utilisateurs ; concevoir un site maintenable
              grâce à la gestion des erreurs et exceptions
            </li>
            <li>Créer, gérer et afficher le contenu d’une base de données.</li>
          </ul>
        </div>
        <div class="step-info step-info-3">
          <div className="step-info-left">
            <div className="step-info-left-top">
              <img
                src="assets/images/parcours/bolloré_energy.png"
                alt="Logo Bolloré Énergy"
                className="step-logo"
              />
              <h4 className="green-title">Formation Développeur Web</h4>
              <small>6mois - Juillet 2022 - Décembre 2022</small>
              <br />
              <small> Formation à distance</small>
            </div>
            <div className="step-info-left-bottom">
              A travers cette formation, je souhaitais me mettre à jour sur le
              plan technique.
              <br /> Mon expérience de Consultant - Chef de Projet, je
              souhaitais mêler mes connaissances fonctionnelles avec les
              nouvelles technologies.
            </div>
          </div>
          <ul className="step-info-right">
            <li>
              Découper, assembler et intégrer tous les éléments d’une maquette
              graphique en HTML5 et CSS
            </li>
            <li>Ajouter du contenu audio et vidéo en HTML5</li>
            <li>Animer les pages web avec CSS3</li>
            <li>Appliquer les standards du web et les normes en vigueur </li>
            <li>
              Construire un site web fluide s’adaptant à tout type d’écran (web,
              smartphone et tablette)
            </li>
            <li>
              Améliorer le référencement naturel en utilisant les balises selon
              leur sémantique
            </li>
            <li>
              Faire réagir la page web en fonction des actions de l’utilisateur
              en JavaScript
            </li>
            <li>
              Se connecter à un service web pour exploiter des données tierces
              (API)
            </li>
            <li>
              Gérer les comptes utilisateurs ; concevoir un site maintenable
              grâce à la gestion des erreurs et exceptions
            </li>
            <li>Créer, gérer et afficher le contenu d’une base de données.</li>
          </ul>
        </div>
        <div class="step-info step-info-4">
          <div className="step-info-left">
            <div className="step-info-left-top">
              <img
                src="assets/images/parcours/FNAC_COM.jpg"
                alt="Logo Fnac.com"
                className="step-logo"
              />
              <h4 className="green-title">Formation Développeur Web</h4>
              <small>6mois - Juillet 2022 - Décembre 2022</small>
              <br />
              <small> Formation à distance</small>
            </div>
            <div className="step-info-left-bottom">
              A travers cette formation, je souhaitais me mettre à jour sur le
              plan technique.
              <br /> Mon expérience de Consultant - Chef de Projet, je
              souhaitais mêler mes connaissances fonctionnelles avec les
              nouvelles technologies.
            </div>
          </div>
          <ul className="step-info-right">
            <li>
              Découper, assembler et intégrer tous les éléments d’une maquette
              graphique en HTML5 et CSS
            </li>
            <li>Ajouter du contenu audio et vidéo en HTML5</li>
            <li>Animer les pages web avec CSS3</li>
            <li>Appliquer les standards du web et les normes en vigueur </li>
            <li>
              Construire un site web fluide s’adaptant à tout type d’écran (web,
              smartphone et tablette)
            </li>
            <li>
              Améliorer le référencement naturel en utilisant les balises selon
              leur sémantique
            </li>
            <li>
              Faire réagir la page web en fonction des actions de l’utilisateur
              en JavaScript
            </li>
            <li>
              Se connecter à un service web pour exploiter des données tierces
              (API)
            </li>
            <li>
              Gérer les comptes utilisateurs ; concevoir un site maintenable
              grâce à la gestion des erreurs et exceptions
            </li>
            <li>Créer, gérer et afficher le contenu d’une base de données.</li>
          </ul>
        </div>
        <div class="step-info step-info-5">
          <div className="step-info-left">
            <div className="step-info-left-top">
              <img
                src="assets/images/parcours/tf1-pub.jpg"
                alt="Logo TF1 Publicité"
                className="step-logo"
              />
              <h4 className="green-title">Formation Développeur Web</h4>
              <small>6mois - Juillet 2022 - Décembre 2022</small>
              <br />
              <small> Formation à distance</small>
            </div>
            <div className="step-info-left-bottom">
              A travers cette formation, je souhaitais me mettre à jour sur le
              plan technique.
              <br /> Mon expérience de Consultant - Chef de Projet, je
              souhaitais mêler mes connaissances fonctionnelles avec les
              nouvelles technologies.
            </div>
          </div>
          <ul className="step-info-right">
            <li>
              Découper, assembler et intégrer tous les éléments d’une maquette
              graphique en HTML5 et CSS
            </li>
            <li>Ajouter du contenu audio et vidéo en HTML5</li>
            <li>Animer les pages web avec CSS3</li>
            <li>Appliquer les standards du web et les normes en vigueur </li>
            <li>
              Construire un site web fluide s’adaptant à tout type d’écran (web,
              smartphone et tablette)
            </li>
            <li>
              Améliorer le référencement naturel en utilisant les balises selon
              leur sémantique
            </li>
            <li>
              Faire réagir la page web en fonction des actions de l’utilisateur
              en JavaScript
            </li>
            <li>
              Se connecter à un service web pour exploiter des données tierces
              (API)
            </li>
            <li>
              Gérer les comptes utilisateurs ; concevoir un site maintenable
              grâce à la gestion des erreurs et exceptions
            </li>
            <li>Créer, gérer et afficher le contenu d’une base de données.</li>
          </ul>
        </div>
        <div class="step-info step-info-6">
          <div className="step-info-left">
            <div className="step-info-left-top">
              <img
                src="assets/images/parcours/etudes.jpg"
                alt="Logo Etudes"
                className="step-logo"
              />
              <h4 className="green-title">Formation Développeur Web</h4>
              <small>6mois - Juillet 2022 - Décembre 2022</small>
              <br />
              <small> Formation à distance</small>
            </div>
            <div className="step-info-left-bottom">
              A travers cette formation, je souhaitais me mettre à jour sur le
              plan technique.
              <br /> Mon expérience de Consultant - Chef de Projet, je
              souhaitais mêler mes connaissances fonctionnelles avec les
              nouvelles technologies.
            </div>
          </div>
          <ul className="step-info-right">
            <li>
              Découper, assembler et intégrer tous les éléments d’une maquette
              graphique en HTML5 et CSS
            </li>
            <li>Ajouter du contenu audio et vidéo en HTML5</li>
            <li>Animer les pages web avec CSS3</li>
            <li>Appliquer les standards du web et les normes en vigueur </li>
            <li>
              Construire un site web fluide s’adaptant à tout type d’écran (web,
              smartphone et tablette)
            </li>
            <li>
              Améliorer le référencement naturel en utilisant les balises selon
              leur sémantique
            </li>
            <li>
              Faire réagir la page web en fonction des actions de l’utilisateur
              en JavaScript
            </li>
            <li>
              Se connecter à un service web pour exploiter des données tierces
              (API)
            </li>
            <li>
              Gérer les comptes utilisateurs ; concevoir un site maintenable
              grâce à la gestion des erreurs et exceptions
            </li>
            <li>Créer, gérer et afficher le contenu d’une base de données.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Parcours;
