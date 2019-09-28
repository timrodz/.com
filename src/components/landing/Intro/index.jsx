import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'Theme';
import { Container, Button } from 'Common';
import dev from 'Static/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

const info = require('../../../../data/info');

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hi There!</h1>
				<h4>{info.description}</h4>
				<Button as={AnchorLink} href="#projects">
					See my work
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt={info.description} />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
);
