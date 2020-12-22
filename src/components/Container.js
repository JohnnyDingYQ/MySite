import React from "react";

import s from "../style/dist/Container.module.css";

/**
 *
 * @param {*} props Includes: locally scoped container className
 */
export default function Container(props) {
  return (
    <main className={`container ${s.container} ${props.className}`}>
      {props.children}
    </main>
  );
}
