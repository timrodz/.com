import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import {renderPortfolio} from '.';

export const Games = () => {
  const {
    allGamesJson: {edges},
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
  `);

  return <>{renderPortfolio(edges)}</>;
};

