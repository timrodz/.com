import { Container, Item, ProjectGrid } from 'Common';
import Image from 'gatsby-image';
import React from 'react';
import { Projects } from './projects';
import { Games } from './games';
import { Card, Content, Wrapper } from './styles';

const info = require('Data/info');

const imageStyle = {
  marginLeft: '-1em',
  marginRight: '-1em',
};

export const Portfolio = () => {
  return (
    <Wrapper as={Container} id="portfolio">
      <h2>Portfolio</h2>
      <p>{info.portfolio}</p>
      <h3>Projects</h3>
      <ProjectGrid>{<Projects/>}</ProjectGrid>
      <br/>
      <h3>Games</h3>
      <ProjectGrid>{<Games/>}</ProjectGrid>
    </Wrapper>
  );
};

export const renderPortfolio = (edges) => {
  if (!edges || edges.length === 0) return null;

  return edges.map(({node: project}) => {
    const {id, url, title, description, image} = project;
    const imageData = image.childImageSharp.fluid;
    console.log(`Portfolio: ${JSON.stringify(imageData)}`);

    return (
      <Item key={id} as="a" href={url} target="_blank" rel="noopener noreferrer">
        <Card>
          <Content>
            <Image
              loading="lazy"
              fluid={imageData}
              alt={`${title}: ${description}`}
              style={imageStyle}
            />
            <h4>{title}</h4>
            <p>{description}</p>
          </Content>
        </Card>
      </Item>
    );
  });
};