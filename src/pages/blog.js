import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, Link } from "gatsby";

import s from "../style/dist/blog.module.css";

import Container from "../components/Container";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import CardPost from "../components/CardPost";

export default function Blog() {
  return (
    <div className="app">
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <NavBar />
      <Container className={s.container}>
        <h1>Blog</h1>
        <Slider
          className={s.mobile_slider}
          blogTitles={["Hello World"]}
          paths={["/blog/hello_world"]}
        />
        <section className={s.gallery}>
          <Link className={s.gray}>Hello World</Link>
          <div className={s.blue_white}>
            <Link className={s.blue}>Technology of this site</Link>
            <Link className={s.white}>Thinking</Link>
          </div>
          <Link className={s.orange}>A Topic</Link>
        </section>
        <StaticQuery
          query={graphql`
            query Query {
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
              ) {
                edges {
                  node {
                    frontmatter {
                      slug
                      date(formatString: "MMMM DD, YYYY")
                      title
                      desc
                      tags
                    }
                  }
                }
              }
            }
          `}
          render={(data) => {
            const posts = data.allMarkdownRemark.edges.map(({ node }) => (
              <CardPost
                className={s.card_post}
                key={node.frontmatter.title}
                title={node.frontmatter.title}
                desc={node.frontmatter.desc}
                tags={node.frontmatter.tags}
                path={node.frontmatter.slug}
                date={node.frontmatter.date}
              ></CardPost>
            ));
            return posts;
          }}
        />
        {/* {posts} */}
        {/* This is a hidden post to fix last row alignment of flex box */}
        <CardPost
          className={`${s.dummy_post} ${s.card_post}`}
          key={"dummy"}
          title={"dummy"}
          desc={"dummy"}
          tags={["dummy"]}
          path={"dummy"}
          date={"dummy"}
        ></CardPost>
      </Container>
    </div>
  );
}
