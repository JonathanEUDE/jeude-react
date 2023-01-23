import '../styles/NotFound.css';

function Home() {
  return (
    <div className="notfound-container">
      <div className="notfound-informations">
        <img
          src="assets/images/Logo_Jonathan_EUDE_Consulting.png"
          alt="Logo Jonathan EUDE Consulting"
        />
        <div>
          <span>404</span>
          <img
            src="assets/images/Jonathan_EUDE_Photo_Profil.png"
            alt="Jonathan EUDE, Consultant / Chef de Projet / Développeur Freelance"
          />
        </div>
        <span>Oups! La page que vous demandez n'existe pas.</span>
      </div>
      <a href="/">Retourner sur la page d'accueil</a>
    </div>
  );
}

export default Home;
