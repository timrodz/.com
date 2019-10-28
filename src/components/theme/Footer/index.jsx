import React from 'react';
import {Container, Social} from 'Common';
import {Wrapper, Flex, Details} from './styles';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Thank you for visiting!</h2>
        <span>
          Copyright &copy; {new Date().getFullYear()} Juan Alejandro Morais — Theme by{' '}
          <a
            href="https://smakosh.com/?ref=portfolio-dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            Smakosh
          </a>
        </span>
      </Details>
      <Social />
    </Flex>
  </Wrapper>
);
