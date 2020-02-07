import React from 'react';
import {Container, Button} from 'Common';
import {Wrapper, AboutWrapper, Details, Thumbnail} from './styles';

const info = require('../../../../data/info');
const me = require('../../../../data/images/me.png');
const info = require('Data/info');

export const About = () => (
  <Wrapper id="about">
    <AboutWrapper as={Container}>
      <Thumbnail>
        <a
          href="https://www.linkedin.com/in/timrodz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img loading="lazy" src={me} alt={info.about} />
        </a>
      </Thumbnail>
      <Details>
        <h1>About me</h1>
        <p>{info.about}</p>
        <Button secondary as="a" href="mailto:timrodz@icloud.com">
          Let's work together!
        </Button>
      </Details>
    </AboutWrapper>
  </Wrapper>
);
