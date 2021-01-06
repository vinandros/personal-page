import React from "react";
import Home from "../components/Sections/Home/Home";
import Hero from "../components/Sections/Hero";
import ProjectsSection from "../components/Sections/Projects";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import Header from "../components/Sections/Header/Header";
import Layout from "../components/Layouts/Layout";

const IndexPage = () => {
  return (
    <Layout title="FullStack Developer">
      <Home />
      {/* <Header /> */}
      {/* <Hero /> */}
      {/* <ProjectsSection /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </Layout>
  );
};

export default IndexPage;
