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
        <span className="tarif tarif-eco white-title">
          <small>à partir de </small>
          <br />1 400€
        </span>
      </div>
      <div className="pack" id="pack-confort">
        <h5 className="white-title">
          Pack Confort <small>Expertise & Qualité en un pack !</small>
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
        <span className="tarif tarif-confort white-title">
          <small>à partir de </small>
          <br />2 500€
        </span>
      </div>
      <div className="pack" id="pack-serenite">
        <h5 className="white-title">
          Pack Sérénité <small>Tout inclus avec Sérénité !</small>
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
        <span className="tarif tarif-serenite white-title">
          <small>à partir de </small>
          <br />4 500€
        </span>
      </div>
      <div className="pack small-pack" id="pack-express">
        <h5 className="white-title">
          Pack Express <small>Développement en 48h !</small>
        </h5>
        <ul>
          <li>Analyse des besoins</li>
          <li>Développements</li>
          <li>Mise en service</li>
          <img
            src="/assets/images/quantite-limitee.png"
            alt="Quantité Limitée"
          />
        </ul>
        <span className="tarif tarif-express white-title">
          <small>à partir de </small>
          <br />
          600€
        </span>
      </div>
    </section>
  );
}

export default Tarifs;
