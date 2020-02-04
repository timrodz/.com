import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Wrapper} from './styles';

const NavbarLinks = ({desktop}) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#portfolio">Portfolio</AnchorLink>
    <AnchorLink href="#about">About</AnchorLink>
    <AnchorLink href="#projects">Projects</AnchorLink>
    <AnchorLink href="#posts">Posts</AnchorLink>
  </Wrapper>
);

export default NavbarLinks;
