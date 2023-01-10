import '../styles/SocialNetworkBar.css';

import * as React from 'react';

function SocialNetworkBar() {
  return (
    <div className="socialnetworkbar-container">
      <a
        href="https://www.linkedin.com/in/jonathaneude/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="lni lni-linkedin-original"></i>
      </a>
      <a
        href="https://github.com/JonathanEUDE"
        target="_blank"
        rel="noreferrer"
      >
        <i className="lni lni-github-original"></i>
      </a>
      <a href="https://twitter.com/yell0wwait" target="_blank" rel="noreferrer">
        <i className="lni lni-twitter-original"></i>
      </a>
      <a
        href="mailto:jonathan.eude@gmail.com?subject=Contact depuis JEUDE.FR"
        target="_blank"
        rel="noreferrer"
      >
        <i className="lni lni-envelope"></i>
      </a>
    </div>
  );
}

export default SocialNetworkBar;
