/* eslint-disable max-len, react/jsx-one-expression-per-line */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import siteShape from '../shapes/site';

const ghLink = <a href="https://github.com/knpwrs">my GitHub</a>;
const patsLink = <a href="http://www.patriots.com/">New England Patriots</a>;

const ResumeHeader = styled.header(({ theme }) => ({
  ...theme.centerPadding,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  '> h5': {
    margin: 0,
  },
}));

const H2 = styled.h2(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
}));
const H3 = styled.h3(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
}));
const H4 = styled.h4(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
}));
const P = styled.p(({ theme }) => ({
  ...theme.centerPadding,
}));
const Ul = styled.ul(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
  marginLeft: `${theme.spacingPx * 4}px`,
}));

const About = ({ data: { site: { siteMetadata: site } } }) => (
  <Layout>
    <main>
      <Helmet>
        <title>
          About
          {' '}
          &middot;
          {' '}
          {site.title}
        </title>
      </Helmet>
      <H2>About</H2>
      <blockquote>
        <P>
          &quot;But the Holy Spirit produces this kind of fruit in our lives:
          love, joy, peace, patience, kindness, goodness, faithfulness,
          gentleness, and self-control. There is no law against these
          things!&quot; - The Apostle Paul, to the Galatians
        </P>
      </blockquote>
      <P>
        I am a software engineer living and working in Massachusetts. I work
        extensively in Universal JavaScript and HTML5 and have experience in many
        other technologies. Take a look at {ghLink} to see my personal projects.
      </P>
      <P>
        I also enjoy music, play drums and bass guitar, and am a big time fan of
        the {patsLink}. Feel free to take a look around and contact me with any
        questions.
      </P>
      <H3>Résumé</H3>
      <H4>Languages</H4>
      <Ul>
        <li>Proficient in: JavaScript (TypeScript, React), HTML5, CSS3 (SCSS)</li>
      </Ul>
      <H4>Software</H4>
      <Ul>
        <li>Tools: WebStorm(VScode), Git, PhotoShop, 3D max, unreal engine</li>
        <li>Platforms: macOS, Microsoft Windows</li>
      </Ul>
      <H4>Experience</H4>
      <ResumeHeader>
        <h5>Signal Messenger &middot; Desktop Developer &middot; Remote</h5>
        <h5>April 2019 - Present</h5>
      </ResumeHeader>
      <Ul>
        <li>Progressively ported features from Backbone and JavaScript to React/Redux and TypeScript.</li>
        <li>Implemented virtualized, fuzzy-searchable emoji picker.</li>
        <li>Implemented inline emoji typeahead with fuzzy search.</li>
      </Ul>
      <H4>Education</H4>
      <ResumeHeader>
        <h5>University of Massachusetts Amherst &middot; Amherst, MA &middot; 3.7 GPA</h5>
        <h5>2011 - 2013</h5>
      </ResumeHeader>
      <Ul>
        <li>Received Bachelor’s of Science in Computer Science.</li>
      </Ul>
    </main>
  </Layout>
);

About.propTypes = {
  data: PropTypes.shape({
    site: siteShape,
  }).isRequired,
};

export default About;

export const aboutPageQuery = graphql`
  query AboutPageSiteMetadata {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
