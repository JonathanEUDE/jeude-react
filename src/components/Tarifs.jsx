import '../styles/Tarifs.css';

function Tarifs() {
  return (
    <section id="tarifs">
      <div className="pack" id="pack-eco">
        <h5 className="white-title">
          Pack ECO <small>Simplifiez votre quotidien !</small>
        </h5>
        <ul>
          <li>Analyse des besoins</li>
          <li>Développements</li>
          <li>Mise en service</li>
          <li>Formation</li>
          <small>(1 utilisateur)</small>
        </ul>
        <div className="tarif tarif-eco white-title">
          <div className="tarif-inner">
            <div className="tarif-front">
              <small>à partir de </small>
              <span>1 400€</span>
            </div>
            <div className="tarif-back">
              <a
                href="mailto:jonathan.eude@gmail.com?subject=Pack ECO - Demande de devis"
                target="_blank"
                rel="noreferrer"
              >
                Contactez-moi !
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pack" id="pack-confort">
        <h5 className="white-title">
          Pack Confort <small>Le luxe de la simplicité !</small>
        </h5>
        <ul>
          <li>Analyse des besoins</li>
          <li>Développements</li>
          <li>Mise en service</li>
          <li>Formation</li>
          <small>(1 à 3 utilisateurs)</small>
          <li>Documentation</li>
          <small>(Doc. utilisateur)</small>
          <li>Support & Hotline</li>
          <small>(2h d'assistance téléphonique)</small>
        </ul>
        <div className="tarif tarif-confort white-title">
          <div className="tarif-inner">
            <div className="tarif-front">
              <small>à partir de </small>
              <span>2 500€</span>
            </div>
            <div className="tarif-back">
              <a
                href="mailto:jonathan.eude@gmail.com?subject=Pack Confort - Demande de devis"
                target="_blank"
                rel="noreferrer"
              >
                Contactez-moi !
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pack" id="pack-serenite">
        <h5 className="white-title">
          Pack Sérénité{' '}
          <small>
            <p>Laissez-vous guider,</p>
            <p>restez serein !</p>
          </small>
        </h5>
        <ul>
          <li>Analyse des besoins</li>
          <li>Développements</li>
          <li>Mise en service</li>
          <li>Formation</li>
          <small>(1 à 6 utilisateurs)</small>
          <li>Documentation</li>
          <small>(Doc. utilisateur & administrateur)</small>
          <li>Support & Hotline</li>
          <small>(10h d'assistance téléphonique)</small>
          <li>Base de données</li>
          <li>Maintenance</li>
          <li>Mises à jour</li>
          <li>Sauvegardes</li>
          <li>Logs</li>
        </ul>
        <div className="tarif tarif-serenite white-title">
          <div className="tarif-inner">
            <div className="tarif-front">
              <small>à partir de </small>
              <span>4 500€</span>
            </div>
            <div className="tarif-back">
              <a
                href="mailto:jonathan.eude@gmail.com?subject=Pack Sérénité - Demande de devis"
                target="_blank"
                rel="noreferrer"
              >
                Contactez-moi !
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pack small-pack" id="pack-express">
        <h5 className="white-title">
          Pack Express <small>Développement en 48h !</small>
        </h5>
        <ul>
          <li>Analyse des besoins</li>
          <li>Développements</li>
          <li>Mise en service</li>
        </ul>
        <img src="/assets/images/quantite-limitee.png" alt="Quantité Limitée" />
        <div className="tarif tarif-express white-title">
          <div className="tarif-inner">
            <div className="tarif-front">
              <small>à partir de </small>
              <span>600€</span>
            </div>
            <div className="tarif-back">
              <a
                href="mailto:jonathan.eude@gmail.com?subject=Pack Express - Demande de devis"
                target="_blank"
                rel="noreferrer"
              >
                Contactez-moi !
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tarifs;
