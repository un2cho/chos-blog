import React from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import CenterWrap from '../components/center-wrap';

const PortfolioHeader = styled.header(({ theme }) => ({
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
const H4 = styled.h4(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
}));
const P = styled.p(({ theme }) => ({
  ...theme.centerPadding,
}));


export default () => (
  <Layout>
    <CenterWrap>
      <Helmet>
        <title>Cho& Game - Graphic work Portfolio</title>
      </Helmet>
      <H2>Graphic work Portfolio</H2>
      <PortfolioHeader>
        <H4>Neowiz &middot; Bless studio</H4>
        <h5>3d environment game-graphic designer</h5>
        <h5>May 2010 - April 2014</h5>
      </PortfolioHeader>
      <P>
        ![blassworld](./pf/blass/field_01.png)
      </P>
      <PortfolioHeader>
        <H4>LivePlex &middot; Dragona</H4>
        <h5>3d game-graphic designer</h5>
        <h5>January 2009 - April 2010</h5>
      </PortfolioHeader>
      <P>
        ![dragona](./pf/project_dr/001.jpg)
      </P>
      <PortfolioHeader>
        <H4>NCsoft &middot; L3, GA(aion support), HON</H4>
        <h5>3d game-graphic designer</h5>
        <h5>January 2007 - December 2008</h5>
      </PortfolioHeader>
      <P>
        ![aion](./pf/aion/aion_dark.jpg)
      </P>
    </CenterWrap>
  </Layout>
);
