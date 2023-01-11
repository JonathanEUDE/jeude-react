import '../styles/Home.css';
import Accueil from '../components/Accueil';
import Services from '../components/Services';
import Projets from '../components/Projets';
import Parcours from '../components/Parcours';
import Tarifs from '../components/Tarifs';
import Contact from '../components/Contact';

function Home() {
  return (
    <main>
      <Accueil />
      <Services />
      <Projets />
      <Parcours />
      <Tarifs />
      <Contact />
    </main>
  );
}

export default Home;
