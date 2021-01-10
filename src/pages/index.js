import React from "react";
import Hero from "../components/Sections/Hero/Hero";
import Home from "../components/Sections/Home/Home";
// import ProjectsSection from "../components/Sections/Projects";
// import Contact from "../components/Sections/Contact";
// import Footer from "../components/Sections/Footer";
import Layout from "../components/Layouts/Layout";

const IndexPage = () => {
  return (
    <Layout title="FullStack Developer">
      <Home />
      <Hero />

      {/* <ProjectsSection /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </Layout>
  );
};

export default IndexPage;
