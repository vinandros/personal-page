import React from "react";
import Layout from "../components/Layouts/Layout";
import Home, { HomeLink } from "../components/Home";
import { MainTitle, TitleStyle, Dev, Subtitle } from "../components/Titles";
import { Quote, Blockquote, Tag, PText } from "../components/Quote";
import Hero, { HeroWrapper } from "../components/Hero";
import { graphql } from "gatsby";
import HeroImg from "../components/HeroImg";
import HeroDescription from "../components/HeroDescription";
import Paragraph from "../components/Paragraph";
import Skills from "../components/Skills";
import Bootstrap from "../components/Icons/Bootstrap";
import CSS3 from "../components/Icons/CSS3";
import Emotion from "../components/Icons/Emotion";
import Git from "../components/Icons/Git";
import Html5 from "../components/Icons/Html5";
import ES6 from "../components/Icons/ES6";
import Mongo from "../components/Icons/Mongo";
import Next from "../components/Icons/Next";
import Node from "../components/Icons/Node";
import Reactjs from "../components/Icons/Reactjs";
import Redux from "../components/Icons/Redux";
import Gatsbyjs from "../components/Icons/Gatsbyjs";

export default function IndexPage({ data }) {
  // console.log(data);
  return (
    <Layout title="FullStack Web Development">
      <Home>
        <MainTitle>
          <sup>&lceil;</sup>Hi, I'm Kevin. <br />
          <Dev>&nbsp;&nbsp;FullStack Web Developer,</Dev> <br />
          &nbsp;&nbsp;Geek and Kind of Nerd.
          <sub>&nbsp;&nbsp;&nbsp;&rfloor;</sub>
        </MainTitle>
        <Quote>
          <Blockquote>&lt;blockquote&gt;</Blockquote>
          <Tag>&lt;p&gt;</Tag>
          <PText>
            “Try to figure out what you’re most passionate about in life, what
            you’re good at, and the mixture between those two. And then you
            should Give It Your All, all the time.”
          </PText>
          <Tag>&lt;/p&gt;</Tag>
          <cite>
            <Tag>&lt;cite&gt; </Tag>
            <PText>Avicii(Tim Bergling)</PText>
            <Tag> &lt;/cite&gt;</Tag>
          </cite>

          <Blockquote>&lt;/blockquote&gt;</Blockquote>
        </Quote>
        <HomeLink to="#about" href="#about">
          Go
        </HomeLink>
      </Home>
      <Hero id="about">
        <Subtitle>Who I am?</Subtitle>
        <HeroWrapper>
          <HeroImg fluid={data.file.childImageSharp.fluid} />
          <HeroDescription>
            <Paragraph>
              I am a self-taught web developer with a strong eye on new
              technologies, looking for new opportunities to grow up and improve
              my skills.
            </Paragraph>
            <Paragraph>
              I started programming at the school, this caught my curiosity and
              interesting for technology.
            </Paragraph>
            <Paragraph>
              Now I am a Computer Engineering graduated from Costa Rica
              Institute of Technology and my passion is web development.
            </Paragraph>
          </HeroDescription>
        </HeroWrapper>
      </Hero>

      <Skills id="skills">
        <Subtitle>My skills</Subtitle>
        <Paragraph>
          Aute magna aute ad dolore officia dolore pariatur. Laborum ullamco
          commodo cillum duis velit velit. Ad amet anim aute mollit sint ex amet
          velit sunt cillum anim pariatur non occaecat. Mollit amet et aliqua
          incididunt excepteur ut magna adipisicing ea.
        </Paragraph>
        <ul>
          <li>
            <CSS3 />
          </li>
          <li>
            <Html5 />
          </li>
          <li>
            <ES6 />
          </li>
          <li>
            <Bootstrap />
          </li>
          <li>
            <Git />
          </li>
          <li>
            <Next />
          </li>
          <li>
            <Mongo />
          </li>
          <li>
            <Node />
          </li>
          <li>
            <Reactjs />
          </li>
          <li>
            <Redux />
          </li>
          <li>
            <Emotion />
          </li>
          <li>
            <Gatsbyjs />
          </li>
        </ul>
      </Skills>
    </Layout>
  );
}

export const query = graphql`
  {
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
