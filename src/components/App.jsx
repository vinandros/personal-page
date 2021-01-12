import React from "react";
import { LangProvider } from "../context/langContext";
import { ThemeProvider } from "../context/themeContext";
import Layout from "./Layouts/Layout";
import Hero from "./Sections/Hero/Hero";
import Home from "./Sections/Home/Home";

const App = () => {
  return (
    <LangProvider>
      <ThemeProvider>
        <Layout title="FullStack Developer">
          <Home />
          <Hero />

          {/* <ProjectsSection /> */}
          {/* <Contact /> */}
          {/* <Footer /> */}
        </Layout>
      </ThemeProvider>
    </LangProvider>
  );
};

export default App;
