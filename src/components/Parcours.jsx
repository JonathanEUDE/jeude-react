import React from 'react';
import '../styles/Parcours.css';

function Parcours() {
  const [currentStep, setCurrentStep] = React.useState(-1);
  const [avancement, setAvancement] = React.useState(0);

  const scrollToStep = (stepName) => {
    const stepElement = document.getElementById(stepName);
    if (stepElement) {
      stepElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  React.useEffect(() => {
    let parcours = document.querySelector('#parcours');
    Array.from(parcours.querySelectorAll('.step')).forEach(
      (stepEl, stepIdx) => {
        if (stepIdx <= currentStep) {
          parcours
            .querySelector('.step-' + (stepIdx + 1))
            .classList.add('active');
        } else {
          parcours
            .querySelector('.step-' + (stepIdx + 1))
            .classList.remove('active');
        }
        for (let i = 0; i <= 100; i = i + 10) {
          if (stepIdx === currentStep && avancement >= i) {
            parcours
              .querySelector('.step-' + (stepIdx + 1))
              .classList.add('progress-' + i);
          }
          if (stepIdx === currentStep && avancement < i) {
            parcours
              .querySelector('.step-' + (stepIdx + 1))
              .classList.remove('progress-' + i);
          }
          if (stepIdx < currentStep) {
            parcours
              .querySelector('.step-' + (stepIdx + 1))
              .classList.add('progress-' + i);
          }
          if (stepIdx > currentStep) {
            parcours
              .querySelector('.step-' + (stepIdx + 1))
              .classList.remove('progress-' + i);
          }
        }
      }
    );
  }, [avancement, currentStep]);

  const handleClick = (event) => {
    event.preventDefault();
    const anchorName = event.currentTarget.getAttribute('href').substring(1);
    scrollToStep(anchorName);
  };

  window.addEventListener('scroll', () => {
    let parcours = document.querySelector('#parcours');
    let scrollY = window.scrollY;
    let topParcours = parcours.offsetTop;
    let bottomParcours = topParcours + parcours.offsetHeight;
    const filAriane = document.querySelector('.fil-ariane');
    if (topParcours < scrollY && scrollY < bottomParcours) {
      filAriane.classList.add('fix-fil-ariane');
      Array.from(parcours.querySelectorAll('.step-info')).forEach(function (
        el,
        idx
      ) {
        let topStep = topParcours + el.offsetTop - window.innerHeight / 1.5;
        let heightStep = el.offsetHeight;
        let bottomStep = topStep + heightStep;

        if (scrollY >= topStep && scrollY <= bottomStep) {
          el.classList.add('active');
          if (idx !== currentStep) setCurrentStep(idx);
          let avc = Math.floor((10 * (scrollY - topStep)) / heightStep) * 10;
          if (avc !== avancement) setAvancement(avc);
        } else {
          el.classList.remove('active');
        }
      });
    } else {
      if (topParcours > scrollY || bottomParcours < scrollY) {
        setAvancement(0);
        setCurrentStep(-1);
      }
      filAriane.classList.remove('fix-fil-ariane');
    }
  });

  return (
    <section id="parcours">
      <div className="steps-informations">
        <div className="step-info step-info-1" id="openclassrooms">
          <div className="step-info-left">
            <div className="step-info-left-top">
              <img
                src="assets/images/parcours/openclassrooms.png"
                alt="Logo OpenClassRooms"
                className="step-logo"
              />
              <h4 className="green-title">Formation D??veloppeur Web</h4>
              <span>6 mois - Juillet 2022 - D??cembre 2022</span>
              <br />
              <span>Formation ?? distance</span>
            </div>
            <div className="step-info-left-bottom">
              <p>
                A travers cette formation, je souhaitais me mettre ?? jour sur le
                plan technique.
              </p>
              <p>
                Suite ?? mon exp??rience de Consultant - Chef de Projet, je
                souhaitais m??ler mes connaissances fonctionnelles avec les
                nouvelles technologies.
              </p>
            </div>
          </div>
          <ul className="step-info-right">
            <li>
              D??couper, assembler et int??grer tous les ??l??ments d???une maquette
              graphique en HTML5 et CSS
            </li>
            <li>Ajouter du contenu audio et vid??o en HTML5</li>
            <li>Animer les pages web avec CSS3</li>
            <li>Appliquer les standards du web et les normes en vigueur </li>
            <li>
              Construire un site web fluide s???adaptant ?? tout type d?????cran (web,
              smartphone et tablette)
            </li>
            <li>
              Am??liorer le r??f??rencement naturel en utilisant les balises selon
              leur s??mantique
            </li>
            <li>
              Faire r??agir la page web en fonction des actions de l???utilisateur
              en JavaScript
            </li>
            <li>
              Se connecter ?? un service web pour exploiter des donn??es tierces
              (API)
            </li>
            <li>
              G??rer les comptes utilisateurs ; concevoir un site maintenable
              gr??ce ?? la gestion des erreurs et exceptions
            </li>
            <li>Cr??er, g??rer et afficher le contenu d???une base de donn??es.</li>
          </ul>
        </div>
        <div className="step-info step-info-2" id="sqi">
          <div className="step-info-left">
            <div className="step-info-left-top">
              <img
                src="assets/images/parcours/sqi.png"
                alt="Logo SQI IT Solutions"
                className="step-logo"
              />
              <h4 className="green-title">Consultant - Chef de projet</h4>
              <span>5 ans & 9 mois - Octobre 2016 - Juin 2022</span>
              <br />
              <span>Versailles (78) - T??l??travail</span>
            </div>
            <div className="step-info-left-bottom">
              <p>
                Consultant et chef de projet sur un ERP, Espace Affaires,
                d??velopp?? par SQI et int??gration de suites logicielles
                agr??mentant les fonctionnalit??s de l???ERP.
              </p>
            </div>
          </div>
          <ul className="step-info-right">
            <li>Analyse des besoins du client</li>
            <li> Mise en place de l'ERP Espace Affaires</li>
            <li>
              Int??gration de logiciels partenaires (YOOZ : D??mat??rialisation de
              factures fournisseurs / TWIMM : Plateforme de GMAO / Logiciels de
              comptabilit?? : SAGE / IRIS / QUADRA / PRISME / Quick Devis /
              MyReport)
            </li>
            <li> BI : Suite logicielle MyReport</li>
            <li>Logiciel de chiffrage et de devis : Quick-Devis</li>
            <li>Mise en place & r??alisation de formation</li>
            <li>Assistance Hotline</li>
            <li>
              Support Technique - SQL Server (Performance, Installation,
              Scripts)
            </li>
          </ul>
        </div>
        <div className="step-info step-info-3" id="bollore">
          <div className="step-info-left">
            <div className="step-info-left-top">
              <img
                src="assets/images/parcours/bollore_energy.png"
                alt="Logo Bollor?? ??nergy"
                className="step-logo"
              />
              <h4 className="green-title">Responsable d'application</h4>
              <p>3 ans et 9 mois - Juillet 2022 - D??cembre 2022</p>
              <p>Puteaux (92) / Luc?? (28)</p>
            </div>
            <div className="step-info-left-bottom">
              <p>
                Chef de projet et d??veloppeur sur une application critique de
                l???entreprise.
              </p>
              <p>
                Cet outil permet de g??rer l???approvisionnement des d??p??ts en
                produits p??troliers, g??n??rer et ajuster les prix de l???ensemble
                du r??seau (n??goce & d??tail) et suivre le risque sur les devises
                et sur le p??trole.
              </p>
            </div>
          </div>
          <ul className="step-info-right">
            <li> Suivi et am??lioration de l???application France</li>
            <li>
              Maitrise du contexte m??tier et appui quotidien des utilisateurs
            </li>
            <li>Cr??ation de l???application pour la filiale Suisse</li>
            <li>
              Optimisation des proc??dures stock??es et fonctions SQL Server
            </li>
            <li>Mise en place d'interface avec des outils AS400</li>
          </ul>
        </div>
        <div className="step-info step-info-4" id="fnac">
          <div className="step-info-left">
            <div className="step-info-left-top">
              <img
                src="assets/images/parcours/FNAC_COM.jpg"
                alt="Logo Fnac.com"
                className="step-logo"
              />
              <h4 className="green-title">Ing??nieur ??tudes & D??veloppement</h4>
              <span>3 ans - Janvier 2010 - D??cembre 2012</span>
              <br />
              <span>Ivry-Sur-Seine (94)</span>
            </div>
            <div className="step-info-left-bottom">
              <p>
                D??veloppeur sur des applications permettant la gestion des
                fiches articles du site Fnac.com au sein de l?????quipe
                Middle-Office.
              </p>
            </div>
          </div>
          <ul className="step-info-right">
            <li>
              Optimisation du processus num??risation mp3 (Fnac.com et magasins)
            </li>
            <li>?? Requ??teur ?? automatique de cat??gorisation des articles</li>
            <li>Optimisation du processus images du site</li>
            <li>Int??gration de la notion d?????uvre</li>
            <li>Ouverture du march?? B2B (Fnacpro.com)</li>
            <li>Gestion des changements de TVA Livres 7%</li>
            <li>Migration SQL Server 2005 vers 2008 R2</li>
            <li>
              Mise en place d???une base de donn??es d??di??e ?? la DGCCRF (Soldes)
            </li>
          </ul>
        </div>
        <div className="step-info step-info-5" id="tf1">
          <div className="step-info-left">
            <div className="step-info-left-top">
              <img
                src="assets/images/parcours/tf1-pub.jpg"
                alt="Logo TF1 Publicit??"
                className="step-logo"
              />
              <h4 className="green-title">Ing??nieur R&D</h4>
              <span>1 an et 2 mois - Octobre 2008 - D??cembre 2009</span>
              <br />
              <span>Boulogne-Billancourt (92)</span>
            </div>
            <div className="step-info-left-bottom">
              <p>
                Dans l'??quipe Architecture de la DSI, je travaille sur le
                framework interne et sur des probl??matiques SQL Server.
              </p>
              <p>
                En fin d'alternance, je reste 2 mois, en tant que d??veloppeur
                sur une application de gestion des publicit??s Internet & radios.
              </p>
              <br />
            </div>
          </div>
          <ul className="step-info-right">
            <li>Optimisation SQL de traitements lourds et quotidiens</li>
            <li>Modification d?????crans WinForm</li>
          </ul>
        </div>
        <div className="step-info step-info-6" id="etudes">
          <div className="step-info-left">
            <div className="step-info-left-top">
              <img
                src="assets/images/parcours/etudes.jpg"
                alt="Logo Etudes"
                className="step-logo"
              />
              <h4 className="green-title">Formation Universitaire</h4>
              <span>Septembre 2004 ?? Ao??t 2009</span>
              <br />
            </div>
            <div className="step-info-left-bottom">
              <p>
                Passionn?? par l'informatique, j'ai effectu?? un cursus MIAGE qui
                liait Informatique et Gestion d'entreprise.
              </p>
              <p>
                J'ai finalis?? mon cursus MIAGE ?? l'Universit?? Paris 1 Sorbonne /
                IAE Paris en obtenant mon Master 2 (Bac+5).
              </p>
            </div>
          </div>
          <ul className="step-info-right">
            <li>
              Master 2 MIAGE (Bac +5) IAE ??? Universit?? Sorbonne Paris 1 ???
              2008/2009 ??? Paris
            </li>
            <li>
              Master 1 MIAGE IUP ??? Universit?? Picardie Jules Verne ??? 2007/2008 ???
              Amiens
            </li>
            <li>
              Licence MIAGE IUP ??? Universit?? Picardie Jules Verne ??? 2006/2007 ???
              Amiens
            </li>
            <li>
              DUT Informatique IUT ??? Universit?? Picardie Jules Verne ??? 2004/2006
              ??? Amiens
            </li>
            <li>
              Baccalaur??at S ??? Lyc??e Pierre Mend??s France ??? 2004 ??? P??ronne
            </li>
          </ul>
        </div>
      </div>
      <div className="fil-ariane">
        <div className="steps">
          <div className="step step-1" id="step-1">
            <a href="#openclassrooms" onClick={handleClick}>
              <img
                src="assets/images/parcours/openclassrooms.png"
                alt="Logo OpenClassRooms"
              />
            </a>
          </div>
          <div className="step step-2" id="step-2">
            <a href="#sqi" onClick={handleClick}>
              <img
                src="assets/images/parcours/sqi.png"
                alt="Logo SQI IT Solutions"
              />
            </a>
          </div>
          <div className="step step-3" id="step-3">
            <a href="#bollore" onClick={handleClick}>
              <img
                src="assets/images/parcours/bollore_energy.png"
                alt="Logo Bollor?? ??nergy"
              />
            </a>
          </div>
          <div className="step step-4" id="step-4">
            <a href="#fnac" onClick={handleClick}>
              <img
                src="assets/images/parcours/FNAC_COM.jpg"
                alt="Logo Fnac.com"
              />
            </a>
          </div>
          <div className="step step-5" id="step-5">
            <a href="#tf1" onClick={handleClick}>
              <img
                src="assets/images/parcours/tf1-pub.jpg"
                alt="Logo TF1 Publicit??"
              />
            </a>
          </div>
          <div className="step step-6" id="step-6">
            <a href="#etudes" onClick={handleClick}>
              <img src="assets/images/parcours/etudes.jpg" alt="Logo Etudes" />
            </a>
          </div>
        </div>
        <div id="mon-cv">
          <a href="assets/images/parcours/CV_Jonathan_EUDE.pdf" target="_blank">
            <img
              src="assets/images/parcours/curriculum.png"
              alt="T??l??charger mon CV"
              id="cv"
            />
          </a>
          <span className="tooltiptext">T??l??charger CV</span>
        </div>
      </div>
    </section>
  );
}

export default Parcours;
