/* eslint-disable max-len, react/jsx-one-expression-per-line */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import siteShape from '../shapes/site';

const ghLink = <a href="https://github.com/un2cho">my GitHub</a>;

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
          &quot;10 years as a 3d environment game-graphic designer, 3 years as a leather craftsman, and now preparing a web front-end engineer.&quot;
        </P>
      </blockquote>
      <P>
        I am a software engineer living and working in Korean-Pangyo.
        I've been working as a 3d environment game-graphic designer for the last decade and now preparing a web front-end engineer.
        Take a look at {ghLink} to see my personal projects.
      </P>
      <P>
        Feel free to take a look around and contact me with any questions.
      </P>
      <H3>Résumé</H3>
      <H4>Languages</H4>
      <Ul>
        <li>JavaScript (TypeScript, React), HTML5, CSS3 (SCSS)</li>
      </Ul>
      <H4>Software</H4>
      <Ul>
        <li>Tools: WebStorm(VScode), Git, PhotoShop, 3D max, unreal engine</li>
        <li>Platforms: macOS, Microsoft Windows</li>
      </Ul>
      <H4>Experience</H4>
      <ResumeHeader>
        <h5>Neowiz &middot; Bless studio</h5>
        <h5>3d environment game-graphic designer</h5>
        <h5>May 2010 - April 2014</h5>
      </ResumeHeader>
      <Ul>
        <li>3d environment object modeling</li>
        <li>Used a Unreal to create terrains making and Configuration settings.</li>
      </Ul>
      <ResumeHeader>
        <h5>LivePlex &middot; Dragona</h5>
        <h5>3d game-graphic designer</h5>
        <h5>January 2009 - April 2010</h5>
      </ResumeHeader>
      <Ul>
        <li>3d environment object modeling and used a Unreal to create terrains making work.</li>
      </Ul>
      <ResumeHeader>
        <h5>NCsoft &middot; L3, GA(aion support), HON</h5>
        <h5>3d game-graphic designer</h5>
        <h5>January 2007 - December 2008</h5>
      </ResumeHeader>
      <Ul>
        <li>L3 ,GA(aion support) 3d environment object modeling work.</li>
        <li>3d environment object modeling work and used a gamebryo to create a fields in Smash-Star.</li>
      </Ul>
      <ResumeHeader>
        <h5>Gamasoft &middot; Monato Esprit</h5>
        <h5>3d game-graphic designer</h5>
        <h5>March 2006 - October 2006</h5>
      </ResumeHeader>
      <Ul>
        <li>3d environment object modeling.</li>
      </Ul>
      <ResumeHeader>
        <h5>Move games &middot; Digimon RPG, Woongjin E&G</h5>
        <h5>2d & 3d game-graphic designer</h5>
        <h5>June 2004 - February 2006</h5>
      </ResumeHeader>
      <Ul>
        <li>Woongjin E&G UI work,  2D background graphics making.</li>
        <li>Digimon RPG 3D Character modeling.</li>
      </Ul>
      <H3>Education</H3>
      <ResumeHeader>
        <h4>Hanyang Women's University &middot; Korea Seoul </h4>
        <h5>March 2000 - February 2002</h5>
      </ResumeHeader>
      <Ul>
        <li>Department of Computer Information &middot; Internet Information.</li>
      </Ul>
      <H3>Certificate</H3>
      <ResumeHeader>
        <h4>Craftsman Computer Graphics Operation </h4>
        <h5>Human Resources Development Service of Korea &middot; 2001. 04. 16</h5>
      </ResumeHeader>
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
