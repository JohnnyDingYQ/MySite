import React from "react";
import { Link } from "gatsby";
import s from "../style/dist/CardPost.module.css";

import TagPost from "./TagPost";

/**
 * Card for blog posts
 *
 * @param {*} props Includes: title, desc, tags, path
 */
export default function CardPost(props) {
  const tagNames = props.tags;
  const tags = tagNames.map((tag) => <TagPost key={tag} tagName={tag} />);

  return (
    <Link className={`${s.container} ${props.className}`} to={props.path}>
      <p className={s.blog_title}>{props.title}</p>
      <p className={s.blog_desc}>{props.desc}</p>
      <div className={s.tags}>{tags}</div>
    </Link>
  );
}
