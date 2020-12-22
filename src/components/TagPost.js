import React from "react";
import { Link } from "gatsby";
import s from "../style/dist/TagPost.module.css";

/**
 * Tag to label and catogarize blogs
 *
 * @param {*} props Includes: tag
 */
export default function TagPost(props) {
  return <Link className={s.container}>{props.tagName}</Link>;
}
