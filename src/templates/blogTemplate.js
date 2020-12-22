import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Container from "../components/Container";
import NavBar from "../components/NavBar";

import s from "../style/dist/blogTemplate.module.css";

export default function blogTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div className="app">
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <NavBar />
      <Container className={s.container}>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className={s.blog_content}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </Container>
    </div>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
