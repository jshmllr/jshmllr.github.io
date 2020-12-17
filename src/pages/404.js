import React from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";

function NotFoundPage() {
  return (
    <Layout>
      <SEO />
      <Section>
        <div style={{ marginTop: "100px" }}>
          <Headings.h1>The page you tried to access cannot be found. </Headings.h1>
          <p>Maybe try going <a href="https://www.jshmllr.com">home</a> or <a href="https://jshmllr.com/authors/josh-miller">get in touch</a> with me.</p>
        </div>
      </Section>
    </Layout>
  );
}

export default NotFoundPage;
