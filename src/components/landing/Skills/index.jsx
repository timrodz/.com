import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'Common';
import dev from 'Static/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
      <Details>
        <h1>Who is Juan?</h1>
        <p>
          I have a passion for game &amp; data development. My mission is to
          bring agile processes to Data Engineering and Game Development
          pipelines.
        </p>
        <Button as={AnchorLink} href="#contact">
          Get in touch
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
