import React from 'react';
import { Layout, SEO } from 'Common';
import { ThemeProvider } from 'styled-components';
import {
  Intro,
  Skills,
  Projects,
  Portfolio,
} from 'Components/landing';

const theme = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!../styles/variables.scss');

export default () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO />
      <Intro />
      <Portfolio />
      <Projects />
      <Skills />
    </Layout>
  </ThemeProvider>
);
