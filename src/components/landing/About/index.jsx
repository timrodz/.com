import {Button, Container} from 'Common';
import {graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
import {Details, ImageContainer, ImageCenterer, Wrapper} from './styles';

const info = require('Data/info');

export const About = () => {
  const {
    allImageSharp: {edges},
  } = useStaticQuery(graphql`
    {
      allImageSharp(filter: {original: {src: {regex: "/(static/me)/"}}}) {
        edges {
          node {
            id
            original {
              src
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const Img = () => {
    return edges.map(({node: image}) => {
      const id = image.id;
      const fluid = image.fluid;
      return <Image loading="eager" key={id} fluid={fluid} />;
    });
  };

  return (
    <Wrapper id="about" as={Container}>
      <ImageContainer>
        <ImageCenterer>
          <a
            href="https://www.linkedin.com/in/timrodz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {Img()}
          </a>
        </ImageCenterer>
      </ImageContainer>
      <Details>
        <h1>About me</h1>
        <p>{info.about}</p>
        <Button secondary as="a" href="mailto:timrodz@icloud.com">
          Let's work together!
        </Button>
      </Details>
    </Wrapper>
  );
};
