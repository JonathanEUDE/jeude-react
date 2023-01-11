import '../styles/Contact.css';

import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact">
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <p className="green-title">
            Vous souhaitez me contacter ? <br />
            N’hésitez pas à m’envoyer un message :
          </p>
          <label>
            <div className="form-label">Prénom - Nom :</div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />
          <br />
          <label>
            <div className="form-label">Adresse e-mail :</div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />
          <label>
            <div className="form-label">Sujet :</div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />
          <label>
            <div className="form-label">Message :</div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-input"
              rows="10"
            />
          </label>
          <br />
          <button className="form-button" type="submit">
            Envoyer
          </button>
        </div>
      </form>
      <div id="social-links">
        <a
          href="https://www.linkedin.com/in/jonathaneude/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/images/linkedin.png" alt="logo linkedin" />
          <span className="green-title">@jonathaneude</span>
        </a>
        <a
          href="https://github.com/JonathanEUDE"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/images/github.png" alt="logo linkedin" />
          <span className="green-title">@JonathanEUDE</span>
        </a>
        <a
          href="https://twitter.com/yell0wwait"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/images/twitter.png" alt="logo linkedin" />
          <span className="green-title">@yell0wwait</span>
        </a>
        <a
          href="mailto:jonathan.eude@gmail.com?subject=Contact depuis JEUDE.FR"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/images/email.png" alt="logo linkedin" />
          <span className="green-title">@jonathan.eude</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
