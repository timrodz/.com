import React from 'react';
import { Container, Card } from 'Common';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { Wrapper, Grid, Item, Content, Stats } from '../Projects/styles';

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
						title
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
			<Grid>
				{projects.map(({ node: project }) => {
					const { title, description } = project;
					const imageData = project.image.childImageSharp.fluid;
					return (
						<Item>
							<Card>
								<Content>
									<h3>{title}</h3>
									<p>{description}</p>
									<Image
										fluid={imageData}
										alt={description}
										style={imageStyle}
									/>
								</Content>
								<Stats>
									<p>More details</p>
								</Stats>
							</Card>
						</Item>
					);
				})}
			</Grid>
		</Wrapper>
	);
};
