import {Container, Item, ProjectGrid} from 'Common';
import {graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
import {Card, Wrapper, Content} from './styles';

const info = require('../../../../data/info');

const imageStyle = {
  marginLeft: '-1em',
  marginRight: '-1em',
};

export const Portfolio = () => {
  const {
    allProjectsJson: {edges},
  } = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            title
            url
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Wrapper as={Container} id="portfolio">
      <h2>Portfolio</h2>
      <p>{info.portfolio}</p>
      <ProjectGrid>
        {edges.map(({node: project}) => {
          const {id, url, title, description, image} = project;
          const imageData = image.childImageSharp.fluid;
          return (
            <Item key={id} as="a" href={url} target="_blank" rel="noopener noreferrer">
              <Card>
                <Content>
                  <Image
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
        })}
      </ProjectGrid>
    </Wrapper>
  );
};
