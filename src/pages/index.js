import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import s from "../style/dist/index.module.css";

import Container from "../components/Container";
import NavBar from "../components/NavBar";

import site_logo from "../res/img/site_icon.png";
import blog_art from "../res/img/blog_art.svg";
import bio_art from "../res/img/bio_art.svg";

export default function Index() {
  return (
    <div className="app">
      <Helmet>
        <title>Personal Site</title>
      </Helmet>
      <NavBar />
      <Container className={s.container}>
        <header>
          <img className={s.site_logo} src={site_logo} alt="site_logo" />
          <div className={s.header_text}>
            <h1>Johnny Ding</h1>
            <img
              className={s.site_logo_mobile}
              src={site_logo}
              alt="site_logo"
            />
            <h2>
              High School Student
              <br />
              Growing Web Dev
              <br />
              Fledgling Engineer
            </h2>
            <h2>
              Who wants to create
              <br />
              to make himself proud.
            </h2>
          </div>
        </header>
        <div className={s.card_row_one}>
          <Link className={s.blog_card} to="/blog">
            <p>Blog</p>
            <img src={blog_art} alt="blog_art"></img>
          </Link>
          <Link className={s.bio_card} d to="/gallery">
            <p>Gallery</p>
            <img src={bio_art} alt="bio_art"></img>
          </Link>
        </div>
      </Container>
    </div>
  );
}
