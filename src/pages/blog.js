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
          blogTitles={["Test1", "Test2"]}
          urls={["url1", "url2"]}
        />
        {posts}
      </Container>
    </div>
  );
}
