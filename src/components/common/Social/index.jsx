import social from 'Data/social';
import React from 'react';
import {Image, Wrapper} from './styles';

export const Social = () => (
  <Wrapper>
    {social.map(({id, name, link, icon}) => {
      return (
        <a
          key={id}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Connect with me on ${name}`}
        >
          <img
            loading="lazy"
            width="30"
            height="30"
            src={icon}
            alt={`Connect with me on ${name}`}
          />
        </a>
      );
    })}
  </Wrapper>
);
