import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Container, Button} from 'Common';
import dev from 'Static/illustrations/skills.svg';
import {Wrapper, SkillsWrapper, Details, Thumbnail} from './styles';

const info = require('../../../../data/info');

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
      <Details>
        <h1>About me</h1>
        <p>{info.about}</p>
        <Button as={AnchorLink} href="#contact">
          Get in touch
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
