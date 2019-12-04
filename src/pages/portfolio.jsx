import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import siteShape from '../shapes/site';

const Portfolio = ({ data: { site: { siteMetadata: site } } }) => (
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
      <h2>About</h2>
    </main>
  </Layout>
);

Portfolio.propTypes = {
  data: PropTypes.shape({
    site: siteShape,
  }).isRequired,
};

export default Portfolio;

export const portfolioPageQuery = graphql`
  query PortfolioPageSiteMetadata {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
