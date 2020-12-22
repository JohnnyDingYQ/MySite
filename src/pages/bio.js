import React from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/NavBar";

const Bio = () => {
  return (
    <main className="app">
      <Helmet>
        <title>Bio</title>
      </Helmet>
      <NavBar />
    </main>
  );
};

export default Bio;
