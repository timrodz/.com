import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import {renderPortfolio} from '.';

export const Projects = () => {
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

  return <>{renderPortfolio(edges)}</>;
};

