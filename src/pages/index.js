import React from 'react';
import {Layout, SEO} from 'Common';
import {ThemeProvider} from 'styled-components';
import {Intro, About, GithubProjects, Portfolio, Posts} from 'Components/landing';

const theme = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!../styles/variables.scss');

export default () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO />
      <Intro />
      <Portfolio />
      <About />
      <GithubProjects />
      <Posts />
    </Layout>
  </ThemeProvider>
);
