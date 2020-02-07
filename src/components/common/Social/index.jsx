import React from 'react';
import social from 'Data/social';
import {Wrapper, Image} from './styles';

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
          <Image
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
