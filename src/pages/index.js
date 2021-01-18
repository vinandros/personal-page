import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layouts/Layout";
import { ProjectLink } from "../components/Links";
import { MainTitle, Dev, Subtitle, ProjectTitle } from "../components/Titles";
import { Quote, Blockquote, Tag, PText } from "../components/Quote";
import HeroWrapper from "../components/Hero";
import HeroImg from "../components/HeroImg";
import HeroDescription from "../components/HeroDescription";
import Paragraph, {
  ParagraphWrapper,
  SimpleText,
} from "../components/Paragraph";
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
import ListItemIcon from "../components/Icons/ListItemIcon";
import ListItem from "../components/ListItem";
import Ul from "../components/Ul";
import Main from "../components/Main";
import Section from "../components/Section";
import ImgProject from "../components/ImgProject";
import { ProjectsWrapper, CardProject } from "../components/Projects";
import {
  Form,
  FromGroup,
  Input,
  SubmitBottom,
  TextArea,
} from "../components/From";

export default function IndexPage({ data }) {
  // console.log(data);
  return (
    <Layout title="FullStack Web Development">
      <Main>
        <MainTitle>
          <sup>&lceil;</sup>Hi, I'm Kevin. <br />
          <Dev>&nbsp;&nbsp;FullStack Web Developer,</Dev> <br />
          &nbsp;&nbsp;Geek and Kind of Nerd.
          <sub>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&rfloor;</sub>
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
        {/* <HomeLink to="#about" href="#about">
          Go
        </HomeLink> */}
      </Main>
      <Section id="about">
        <HeroWrapper>
          <HeroImg fluid={data.profile.childImageSharp.fluid} alt="My face" />
          <HeroDescription>
            <Subtitle>Who I am?</Subtitle>
            <Paragraph>
              My name is Kevin Alvarado Varela, I'm from San Carlos, Costa Rica.
              I am a self-taught web developer with a strong eye on new
              technologies, looking for new opportunities to grow up and improve
              my skills.
            </Paragraph>
            <Paragraph>
              I started programming at the school, this caught my curiosity and
              my interesting for technology.
            </Paragraph>
            <Paragraph>
              Now I am a Computer Engineering graduated from Costa Rica
              Institute of Technology and my passion is web development.
            </Paragraph>
          </HeroDescription>
        </HeroWrapper>
      </Section>

      <Section id="skills">
        <Subtitle>My skills</Subtitle>
        <ParagraphWrapper>
          <Paragraph>
            Through my studies, I've gained a solid understanding of computer
            science, also I'm a self-taught web developer who have reach the
            enough knowledge to become a full Stack developer.
          </Paragraph>
        </ParagraphWrapper>

        <Ul>
          <ListItem>
            <ListItemIcon />
            <Html5 />
            <SimpleText>HTML</SimpleText>
          </ListItem>
          <ListItem>
            <ListItemIcon />
            <CSS3 />
            <SimpleText>CSS</SimpleText>
          </ListItem>

          <ListItem>
            <ListItemIcon />
            <ES6 />
            <SimpleText>JavaScript</SimpleText>
          </ListItem>
          <ListItem>
            <ListItemIcon />
            <Git />
            <SimpleText>Git</SimpleText>
          </ListItem>

          <ListItem>
            <ListItemIcon />
            <Bootstrap />
            <SimpleText>Bootstrap</SimpleText>
          </ListItem>
          <ListItem>
            <ListItemIcon />
            <Emotion />
            <SimpleText>Emotion</SimpleText>
          </ListItem>

          <ListItem>
            <ListItemIcon />
            <Reactjs />
            <SimpleText>React</SimpleText>
          </ListItem>
          <ListItem>
            <ListItemIcon />
            <Redux />
            <SimpleText>Redux</SimpleText>
          </ListItem>
          <ListItem>
            <ListItemIcon />
            <Next />
            <SimpleText>Next</SimpleText>
          </ListItem>
          <ListItem>
            <ListItemIcon />
            <Gatsbyjs />
            <SimpleText>Gatsby</SimpleText>
          </ListItem>
          <ListItem>
            <ListItemIcon />
            <Mongo />
            <SimpleText>Mongo</SimpleText>
          </ListItem>
          <ListItem>
            <ListItemIcon />
            <Node />
            <SimpleText>Node</SimpleText>
          </ListItem>
        </Ul>
      </Section>
      <Section id="projects">
        <Subtitle>What I've been working on </Subtitle>
        <ParagraphWrapper>
          <Paragraph>
            Following my curiosity I spend time learning new technologies and
            making examples projects by myself. Here are some of them.
          </Paragraph>
        </ParagraphWrapper>
        <ProjectsWrapper>
          <CardProject>
            <Link
              href="https://product-hunt-firebase.netlify.app"
              target="_blank"
              referrerpolicy="no-referrer"
            >
              <ImgProject
                fluid={data.phmain.childImageSharp.fluid}
                alt="Product hunt logo"
              />
            </Link>
            <ProjectTitle>Clone Page</ProjectTitle>
            <Paragraph>
              Following my curiosity I spend time learning new technologies and
              making examples
            </Paragraph>
            <ProjectLink
              href="https://product-hunt-firebase.netlify.app"
              target="_blank"
              referrerpolicy="no-referrer"
            >
              <p>View project</p>
            </ProjectLink>
          </CardProject>

          <CardProject>
            <Link
              href="https://redux-crud-va.netlify.app"
              target="_blank"
              referrerpolicy="no-referrer"
            >
              <ImgProject
                fluid={data.rcmain.childImageSharp.fluid}
                alt="Redux - crud home page"
              />
            </Link>
            <ProjectTitle>Redux CRUD</ProjectTitle>
            <Paragraph>
              Following my curiosity I spend time learning new technologies and
              making examples
            </Paragraph>
            <ProjectLink
              href="https://redux-crud-va.netlify.app"
              target="_blank"
              referrerpolicy="no-referrer"
            >
              <p>View project</p>
            </ProjectLink>
          </CardProject>
          <CardProject>
            <Link
              href="https://project-handler.netlify.app"
              target="_blank"
              referrerpolicy="no-referrer"
            >
              <ImgProject
                fluid={data.phhmain.childImageSharp.fluid}
                alt="Product handler home page"
              />
            </Link>
            <ProjectTitle>Project Handler</ProjectTitle>
            <Paragraph>
              Following my curiosity I spend time learning new technologies and
              making examples
            </Paragraph>
            <ProjectLink
              href="https://project-handler.netlify.app"
              target="_blank"
              referrerpolicy="no-referrer"
            >
              <p>View project</p>
            </ProjectLink>
          </CardProject>
        </ProjectsWrapper>
      </Section>
      <Section id="contact">
        <Subtitle>Contact Me</Subtitle>
        <Form
          id="ContactForm"
          name="ContactForm"
          method="POST"
          data-netlify="true"
        >
          <FromGroup>
            <Input
              type="text"
              required
              placeholder="Name"
              id="name"
              name="name"
            />
            <Input
              type="email"
              required
              placeholder="Email"
              id="email"
              name="email"
            />
          </FromGroup>
          <FromGroup></FromGroup>
          <Input
            type="text"
            placeholder="Subject"
            id="subject"
            name="subject"
            required
          />

          <TextArea />
          <SubmitBottom type="submit">Send</SubmitBottom>
        </Form>
      </Section>
    </Layout>
  );
}

export const query = graphql`
  {
    profile: file(relativePath: { eq: "profile2.png" }) {
      childImageSharp {
        fluid(maxWidth: 768, maxHeight: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    phmain: file(relativePath: { eq: "phMain.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
      relativePath
    }
    rcmain: file(relativePath: { eq: "rcMain.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
      relativePath
    }
    phhmain: file(relativePath: { eq: "phhMain.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
      relativePath
    }
  }
`;
