import React from "react";
import { Link } from "gatsby";
import s from "../style/dist/NavBar.module.css";

import site_logo from "../res/img/site_icon.png";

import link_data from "../res/data/nav_links.json";

/**
 * Navigation Bar component which stays at the top of the site
 *
 *
 * @param {*} props
 */
export default function NavBar(props) {
  const nav_links = link_data.map((link) => (
    <Link key={link.name} className={s.nav_link} to={link.path}>
      {link.name}
    </Link>
  ));

  return (
    <nav className={s.container}>
      <Link to="/">
        <img className={s.nav_logo} alt="site_logo" src={site_logo} />
      </Link>
      {nav_links}
    </nav>
  );
}
