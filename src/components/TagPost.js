import React from "react";
import s from "../style/dist/TagPost.module.css";

/**
 * Tag to label and catagorize blogs
 *
 * @param {*} props Includes: tag
 */
export default function TagPost(props) {
  return <div className={s.container}>{props.tagName}</div>;
}
