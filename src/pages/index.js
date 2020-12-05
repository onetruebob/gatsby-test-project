import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "components/Layout";
import Container from "components/Container";

import img_gatsby from "assets/images/gatsby-astronaut.png";

const IndexPage = () => {
  const { graphCmsPage = {} } = useStaticQuery(
    graphql`
      query PageQuery {
        graphCmsPage(id: { eq: "Page:ckic4d7ns1gtg0c30rx31lg8c" }) {
          tagline
          headline
          id
        }
      }
    `
  );
  const { tagline, headline } = graphCmsPage;

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
        <p className="gatsby-astronaut">
          <img src={img_gatsby} alt="Build with Gatsby!" />
        </p>
        <h1>{headline}</h1>
        <p>{tagline}</p>
      </Container>
    </Layout>
  );
};

export default IndexPage;
