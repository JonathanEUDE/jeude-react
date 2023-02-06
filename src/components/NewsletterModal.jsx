import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/NewsletterModal.css';

function NewsletterModal() {
  const [showModal, setShowModal] = useState(!Cookies.get('subscribed'));
  const [mailData, setMailData] = useState({
    name: 'JEUDE.FR MODAL',
    email: '',
    subject: 'INSCRIPTION JEUDE.FR',
    message: 'INSCRIPTION JEUDE.FR',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMailData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch('https://jeude.fr/api/message', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        Origin: 'https://jeude.fr/',
        //'Content-Type': 'application/x-www-form-urlencoded',
      },
      //redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(mailData), // body data type must match "Content-Type" header
    })
      .then((data) => data.json())
      .then((d) => {
        notify('Merci pour votre inscription ! A bientôt 😉');
      });
    handleCloseModal();
    setMailData({
      name: 'JEUDE.FR MODAL',
      email: '',
      subject: 'INSCRIPTION JEUDE.FR',
      message: 'INSCRIPTION JEUDE.FR',
    });
  };

  const handleCloseModal = () => {
    Cookies.set('subscribed', false, { expires: 60 });
    setShowModal(false);
  };

  const notify = (text) =>
    toast.success('✉️ ' + text, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

  return (
    showModal && (
      <div className="modal-wrapper" id="modal">
        <div className="modal">
          <h2 className="green-title">L' Après, c'est Maintenant !</h2>
          <p>
            Vous avez suivi mes posts{' '}
            <a
              href="https://www.linkedin.com/in/jonathaneude/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{' '}
            ?
          </p>
          <p>
            Vous m'avez soutenu pendant <strong>l'Avent ?</strong>
          </p>
          <p>
            Soutenez-moi pour <strong>l'Après !</strong>
          </p>
          <p className="beta">
            <strong>👇 Devenez Bêta-Testeur de mes futurs projets ! 👇</strong>
          </p>
          <p>
            Soyez parmi les premiers à découvrir ce qui arrive prochainement.
          </p>
          <form className="modal-form">
            <input
              name="email"
              type="email"
              placeholder="Adresse e-mail"
              onChange={handleChange}
              className="form-input"
            />
            <button onClick={handleSubmit} className="form-button">
              S'inscrire
            </button>
          </form>
          <button onClick={handleCloseModal} className="close-button">
            X
          </button>
        </div>
      </div>
    )
  );
}

export default NewsletterModal;
