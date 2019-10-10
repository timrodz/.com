import React from 'react';
import {Container, Card, ProjectGrid, Item} from 'Common';
import {graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';
import {Wrapper, Content} from './styles';

// TODO: Change this to use className - Works for now
const imageStyle = {
  marginLeft: '-1em',
  marginRight: '-1em',
};

export const Portfolio = () => {
  const data = useStaticQuery(graphql`
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

  const projects = data.allProjectsJson.edges;

  return (
    <Wrapper as={Container} id="portfolio">
      <h2>Portfolio</h2>
      <p>
        My work shows I'm always up for the challenge — I solve them independent of the
        stack.
      </p>
      <ProjectGrid>
        {projects.map(({node: project}) => {
          const imageData = project.image.childImageSharp.fluid;
          return (
            <Item
              key={project.id}
              as="a"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card>
                <Content>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <Image fluid={imageData} alt={project.description} style={imageStyle} />
                </Content>
              </Card>
            </Item>
          );
        })}
      </ProjectGrid>
    </Wrapper>
  );
};
