import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Page">This is a copy of <a href="https://impressionistarts.com" target="_blank" rel="noopener" style={{color: "white", textDecoration: "underline"}}>ImpressionistArts.com</a> solely for testing purposes.</Header>
    <Container center={center}>
      <h3>
        This is a blog site about the Impressionist artist.
      </h3>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
