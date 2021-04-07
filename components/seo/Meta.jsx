import React from "react";
import Head from "next/head";
import GoogleTags from "./Google";
// import Scripts from "./prov"
import Scripts from "./scripts";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <GoogleTags />
      <meta
        name="facebook-domain-verification"
        content="u78132bwyfei3esu519vivrgnbmill"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <script src="https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/8.1.2/firebase-storage.js"></script>

      <title>Contemplato</title>
      <Scripts />
    </Head>
  );
};

export default Meta;
