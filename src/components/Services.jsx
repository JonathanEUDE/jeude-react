import '../styles/Services.css';

function Services() {
  return (
    <section id="services">
      <div className="img-container">
        <img
          src="/assets/images/laptop-coffee.jpg"
          alt="Vue sur la montagne et la forêt, avec un ordinateur portable et un café"
        />
      </div>
      <div className="text-container">
        <h2 className="green-title">Consultant / Chef de projet</h2>
        <p>
          Analyser vos besoins et comprendre vos problématiques. <br />
          Proposer des solutions et vous accompagner dans la mise en place.
          <br />
          Suivre et animer vos équipes de développeurs.
        </p>
        <h2 className="green-title">Développeur Web Full Stack</h2>
        <h3>Intégration Web / Frontend</h3>
        <p>
          Une maquette à intégrer ? Un site web à développer ?<br />
          Je peux lui donner vie sur tous les types d’écrans (Desktop, Tablette
          & Mobile)
        </p>
        <h3>API / Backend</h3>
        <p>
          L’intelligence de votre application à définir, à développer et à
          mettre en place, je peux développer votre API.
        </p>
        <h3>Référencement SEO</h3>
        <p>
          Je peux vous accompagner sur le référencement naturel de votre site.
        </p>
        <h2 className="green-title">Développements Spécifiques</h2>
        <h3>Des outils et logiciels métiers sur mesure !</h3>
        <p>
          Analyse, conception, mise en place, support, je vous accompagne sur
          l’intégralité du projet.
        </p>
      </div>
    </section>
  );
}

export default Services;
