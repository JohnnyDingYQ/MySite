import React from "react";
import { Helmet } from "react-helmet";

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
        <h1>Blogs</h1>
        <Slider
          className={s.mobile_slider}
          blogTitles={sliderTitles}
          paths={sliderPaths}
        />
        {posts}
      </Container>
    </div>
  );
}
