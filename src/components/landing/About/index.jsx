import React from 'react';
import {Container, Button} from 'Common';
import about from 'Static/illustrations/about.svg';
import {Wrapper, AboutWrapper, Details, Thumbnail} from './styles';

const info = require('../../../../data/info');

export const About = () => (
  <Wrapper id="about">
    <AboutWrapper as={Container}>
      <Thumbnail>
        <img src={about} alt={info.about} />
      </Thumbnail>
      <Details>
        <h1>About me</h1>
        <p>{info.about}</p>
        <Button as="a" href="mailto:timrodz@icloud.com">
          Get in touch
        </Button>
      </Details>
    </AboutWrapper>
  </Wrapper>
);
