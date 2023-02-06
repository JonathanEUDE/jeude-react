import '../styles/Home.css';
import Accueil from '../components/Accueil';
import Services from '../components/Services';
import Projets from '../components/Projets';
import Parcours from '../components/Parcours';
import Tarifs from '../components/Tarifs';
import Contact from '../components/Contact';
import NewsletterModal from '../components/NewsletterModal';
import CookieConsent from 'react-cookie-consent';

function Home() {
  return (
    <main>
      <Accueil />
      <Services />
      <Projets />
      <Parcours />
      <Tarifs />
      <Contact />
      <NewsletterModal />

      <CookieConsent
        debug
        enableDeclineButton
        flipButtons
        buttonText="J'accepte"
        declineButtonText="Je refuse"
        onDecline={() => {
          const modalElement = document.getElementById('modal');
          if (modalElement) modalElement.remove();
        }}
      >
        Ce site utilise des cookies pour améliorer l'expérience utilisateur.
      </CookieConsent>
    </main>
  );
}

export default Home;
