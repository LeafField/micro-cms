import React from "react";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Meta from "../../components/Meta";

const Brog = () => {
  return (
    <Container>
      <Meta pageTitle="ブログ" />
      <Hero title="Blog" subtitle="Recent Posts" />
    </Container>
  );
};

export default Brog;
