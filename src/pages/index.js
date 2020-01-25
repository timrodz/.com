import React from 'react';
import {Layout, SEO} from 'Common';
import {ThemeProvider} from 'styled-components';
import {Intro, About, Projects, Portfolio, Posts} from 'Components/landing';

const theme = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!../styles/variables.scss');

export default () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO />
      <Intro />
      <Portfolio />
      <Projects />
      <Posts />
      <About />
    </Layout>
  </ThemeProvider>
);
