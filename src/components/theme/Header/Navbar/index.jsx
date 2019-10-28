import { Container } from 'Common';
import { Link } from 'gatsby';
import React from 'react';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const info = require('../../../../../data/info');

const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/">{info.name}</Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
