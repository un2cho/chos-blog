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
          Protfolio
          {' '}
          &middot;
          {' '}
          {site.title}
        </title>
      </Helmet>
      <h2>Portfolio</h2>
      <p>
        test test test test test
      </p>
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
