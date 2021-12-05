import { Container, Item, ProjectGrid } from 'Common';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
import { Card, Wrapper, Content } from './styles';

const info = require('Data/info');

const imageStyle = {
  marginLeft: '-1em',
  marginRight: '-1em',
};

const getProjects = () => (
  {
    allProjectsJson: { edges },
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
  `)
)

const getGames = () => (
  {
    allGamesJson: { edges },
  } = useStaticQuery(graphql`
    {
      allGamesJson {
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
  `)
)

export const Portfolio = () => {
  const renderPortfolio = (edges) => {
    if (!edges || edges.length === 0) return null;

    return edges.map(({ node: project }) => {
      const { id, url, title, description, image } = project;
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

  return (
    <Wrapper as={Container} id="portfolio">
      <h2>Portfolio</h2>
      <p>{info.portfolio}</p>
      <h3>Projects</h3>
      <ProjectGrid>{renderPortfolio(getProjects())}</ProjectGrid>
      <h3>Games</h3>
      <ProjectGrid>{renderPortfolio(getGames())}</ProjectGrid>
    </Wrapper>
  );
};
