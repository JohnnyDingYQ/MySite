import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import s from "../style/dist/blog.module.css";

import Container from "../components/Container";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import CardPost from "../components/CardPost";

import blog_data from "../res/data/blogs.json";

export default function Blog() {
  const posts = blog_data.map((blog) => (
    <CardPost
      className={s.card_post}
      key={blog.title}
      title={blog.title}
      desc={blog.desc}
      tags={blog.tags}
      path={blog.path}
      date={blog.date}
    ></CardPost>
  ));
  const sliderTitles = blog_data.map((blog) => blog.title);
  const sliderPaths = blog_data.map((blog) => blog.path);

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
          blogTitles={sliderTitles}
          paths={sliderPaths}
        />
        <section className={s.gallery}>
          <Link className={s.gray}>Hello World</Link>
          <div className={s.blue_white}>
            <Link className={s.blue}>Technology of this site</Link>
            <Link className={s.white}>Thinking</Link>
          </div>
          <Link className={s.orange}>A Topic</Link>
        </section>
        {posts}
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
