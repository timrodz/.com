import {Button, Container, Social} from 'Common';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Header} from 'Theme';
import {Details, IntroWrapper, Wrapper} from './styles';

const info = require('Data/info');

export const Intro = () => (
  <>
    <Header />
    <Wrapper>
      <IntroWrapper as={Container}>
        <Details>
          <h1>{info.name}</h1>
          <h4>{info.title}</h4>
          <Social />
          <Button as={AnchorLink} href="#portfolio">
            See my work
          </Button>
        </Details>
      </IntroWrapper>
    </Wrapper>
  </>
);
