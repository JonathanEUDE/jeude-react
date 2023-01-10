import '../styles/SocialNetworkBar.css';

import * as React from 'react';
import { NavLink } from 'react-router-dom';

function SocialNetworkBar() {
  return (
    <div className="socialnetworkbar-container">
      <a
        href="https://www.linkedin.com/in/jonathaneude/"
        target="_blank"
        rel="noreferrer"
      >
        <i class="lni lni-linkedin-original"></i>
      </a>
      <a
        href="https://github.com/JonathanEUDE"
        target="_blank"
        rel="noreferrer"
      >
        <i class="lni lni-github-original"></i>
      </a>
      <a href="https://twitter.com/yell0wwait" target="_blank" rel="noreferrer">
        <i class="lni lni-twitter-original"></i>
      </a>
      <a
        href="mailto:jonathan.eude@gmail.com?subject=Contact depuis JEUDE.FR"
        target="_blank"
        rel="noreferrer"
      >
        <i class="lni lni-envelope"></i>
      </a>
    </div>
  );
}

export default SocialNetworkBar;
