import {Container, Item, ProjectGrid} from 'Common';
import {graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
import {Card, Wrapper, Content} from './styles';

// TODO: Change this to use className - Works for now
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
      <p>
        My background as a game developer has empowered my programming career — I am
        always up for a challenge, no matter the stack.
      </p>
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
