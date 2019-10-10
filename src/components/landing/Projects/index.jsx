import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {Container, Card, Item, ProjectGrid} from 'Common';
import starIcon from 'Static/icons/star.svg';
import forkIcon from 'Static/icons/fork.svg';
import {Wrapper, Content, Stats} from './styles';

export const Projects = () => {
  const {
    github: {
      repositoryOwner: {
        repositories: {edges},
      },
    },
  } = useStaticQuery(graphql`
    {
      github {
        repositoryOwner(login: "timrodz") {
          repositories(first: 6, orderBy: {field: STARGAZERS, direction: DESC}) {
            edges {
              node {
                id
                name
                url
                description
                stargazers {
                  totalCount
                }
                forkCount
                isFork
                parent {
                  nameWithOwner
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Wrapper as={Container} id="projects">
      <h2>Open Source Work</h2>
      <p>
        Collaboration is an important key to success — This is why I enjoy contributing to
        Open Source Software.
      </p>
      <ProjectGrid>
        {edges.map(({node: project}) => (
          <Item
            key={project.id}
            as="a"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <Content>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
              </Content>
              <Stats>
                {project.isFork ? (
                  <div>
                    <img src={forkIcon} alt="forks" />
                    <p>{project.parent.nameWithOwner}</p>
                  </div>
                ) : (
                  <React.Fragment>
                    <div>
                      <img src={starIcon} alt="stars" />
                      <span>{project.stargazers.totalCount}</span>
                    </div>
                    <div>
                      <img src={forkIcon} alt="forks" />
                      <span>{project.forkCount}</span>
                    </div>
                  </React.Fragment>
                )}
              </Stats>
            </Card>
          </Item>
        ))}
      </ProjectGrid>
    </Wrapper>
  );
};
