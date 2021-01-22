import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layouts/Layout";
import { ProjectsLink } from "../components/Links";
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
  FormGroup,
  Input,
  SubmitBottom,
  TextArea,
  FormWrapper,
  TextContact,
  Label,
} from "../components/Form";
import Project from "../components/projects/Project";
import Webpack from "../components/Icons/Webpack";

export default function IndexPage({ data }) {
  return (
    <Layout
      title="FullStack Web Development"
      content="main page personal portfolio site"
    >
      <Main id="main">
        <MainTitle>
          <sup>&lceil;</sup>
          <span>Hi, I'm Kevin. </span>
          <br />
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
            <Webpack />
            <SimpleText>Webpack</SimpleText>
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
          <Project
            project={{
              id: 1,
              title: "Clone Page",
              tecnologies: [
                { id: 1, tecnology: "next" },
                { id: 2, tecnology: "react" },
                { id: 3, tecnology: "emotion" },
                { id: 4, tecnology: "git" },
              ],
              description:
                "A clone page of Product Hunt Website, using React and Nextjs for Frontend and Firebase for Backend.",
              imgName: "phProject.png",
              altImg: "Product Hunt home Image",
              githubUrl: "https://github.com/vinandros/nextapp",
              siteUrl: "https://product-hunt-firebase.netlify.app",
            }}
          />
          <Project
            project={{
              id: 2,
              title: "Redux - CRUD",
              tecnologies: [
                { id: 1, tecnology: "react" },
                { id: 2, tecnology: "redux" },
                { id: 3, tecnology: "git" },
              ],
              description:
                "Product CRUD using Redux and React Hooks, also using json-server package to Fake a REST API.",
              imgName: "rcProject.png",
              altImg: "Redux-CRUD home section",
              githubUrl: "https://github.com/vinandros/redux-crud",
              siteUrl: "https://redux-crud-va.netlify.app/",
            }}
          />
          <Project
            project={{
              id: 3,
              title: "Project Handler",
              tecnologies: [
                { id: 1, tecnology: "react" },
                { id: 2, tecnology: "mongo" },
                { id: 3, tecnology: "node" },
                { id: 4, tecnology: "git" },
              ],
              description:
                "An specific project to practice React Hooks and JWT-Authentication with Nodejs and MongoDB.",
              imgName: "phhProject.png",
              altImg: "Project handler home Image",
              githubUrl:
                "https://github.com/vinandros/mern-projects-tasks-frontend",
              siteUrl: "https://project-handler.netlify.app/",
            }}
          />
          <CardProject>
            <ProjectsLink
              to="/projects"
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              aria-label="Projects"
            >
              <ImgProject
                fluid={data.allprojects.childImageSharp.fluid}
                alt="All projects home page"
              />
            </ProjectsLink>
            <ProjectTitle>Others projects</ProjectTitle>
            <Paragraph>
              I had build differents projects to practice others tecnologies,
              like Webpack, Bootstrap and D3js. Check out all my work.
            </Paragraph>
            <ProjectsLink
              to="/projects"
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
            >
              <p>
                Go to projects <span>{">"}</span>
              </p>
            </ProjectsLink>
          </CardProject>
        </ProjectsWrapper>
      </Section>
      <Section id="contact">
        <Subtitle>Let's Build Something Together</Subtitle>
        <FormWrapper>
          <TextContact>
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect. <br /> <br />
            <strong>Have a nice day!</strong>
          </TextContact>
          <Form
            id="ContactForm"
            name="ContactForm"
            method="POST"
            data-netlify="true"
            action="/"
          >
            <Label htmlFor="ContactForm">Netlify</Label>
            <input
              aria-label="netlify"
              type="hidden"
              name="ContactForm"
              value="ContactForm"
            />

            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                required
                placeholder="Name"
                id="name"
                name="name"
                aria-label="name"
              />

              <Label htmlFor="email">email</Label>
              <Input
                type="email"
                required
                placeholder="Email"
                id="email"
                name="email"
                aria-label="email"
              />
            </FormGroup>
            <Label htmlFor="subject">subject</Label>
            <Input
              type="text"
              placeholder="Subject"
              id="subject"
              name="subject"
              required
              aria-label="subject"
            />

            <Label htmlFor="message">message</Label>
            <TextArea
              aria-label="message"
              id="message"
              name="message"
              message="text"
              required
            />

            <SubmitBottom type="submit">Send</SubmitBottom>
          </Form>
        </FormWrapper>
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
    }
    rcmain: file(relativePath: { eq: "rcMain.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    phhmain: file(relativePath: { eq: "phhMain.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allprojects: file(relativePath: { eq: "allprojects.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
