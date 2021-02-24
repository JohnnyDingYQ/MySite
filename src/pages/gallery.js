import React from "react";
import { Helmet } from "react-helmet";
import Scrollspy from "react-scrollspy";
import { useStaticQuery, graphql } from "gatsby";

import s from "../style/dist/gallery.module.css";

import Container from "../components/Container";
import NavBar from "../components/NavBar";

export default function Gallery() {
  const data = useStaticQuery(graphql`
    query CloudinaryImages {
      allCloudinaryMedia {
        edges {
          node {
            secure_url
            public_id
          }
        }
      }
    }
  `);
  const clImages = data.allCloudinaryMedia.edges;
  const genImgTagBy = (images, path) => {
    return images
      .filter(function (i) {
        if (i.node.public_id.includes(path)) {
          return i;
        }
      })
      .map((image, index) => (
        <img
          alt={image.node.public_id}
          key={`${index}-cl`}
          src={image.node.secure_url}
        />
      ));
  };
  return (
    <main className="app">
      <Helmet>
        <title>Gallery</title>
      </Helmet>
      <NavBar />
      <Container className={s.container}>
        <Scrollspy
          className={s.scroll_spy}
          items={["sport", "life", "video_gaming"]}
          currentClassName="is-current"
        >
          <p>Navigation</p>
          <li>
            <a href="#sport">Sport</a>
          </li>
          <li>
            <a href="#life">Life</a>
          </li>
          <li>
            <a href="#video_gaming">Video Gaming</a>
          </li>
        </Scrollspy>
        <section id="sport">
          <h2>Sport</h2>
          {genImgTagBy(clImages, "My Site/Sport")}
        </section>
        <section id="life">
          <h2>Life</h2>
          {genImgTagBy(clImages, "My Site/Life")}
        </section>
        <section id="video_gaming">
          <h2>Video Gaming</h2>
          {genImgTagBy(clImages, "My Site/Video Gaming")}
        </section>
      </Container>
    </main>
  );
}
