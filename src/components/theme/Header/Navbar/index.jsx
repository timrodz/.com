import {Container} from 'Common';
import {Link} from 'gatsby';
import React from 'react';
import NavbarLinks from '../NavbarLinks';
import {Wrapper} from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/">timrodz</Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
