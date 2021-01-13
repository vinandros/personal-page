import React from "react";
import Layout from "../components/Layouts/Layout";
import Home, { HomeLink } from "../components/Home";
import { MainTitle, Dev } from "../components/Titles";
import { Quote, Blockquote, Tag, PText } from "../components/Quote";

export default function IndexPage() {
  return (
    <Layout title="FullStack Web Development">
      <Home>
        <MainTitle>
          Hi, I'm Vin Andros. <br />
          <Dev>FullStack Web Developer,</Dev> <br />
          Geek and Kind of Nerd.
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
    </Layout>
  );
}
