import { graphql, useStaticQuery } from "gatsby";

export const DataEN = () => {
  const result = useStaticQuery(
    graphql`
      query {
        allDatoCmsHeroenglish {
          nodes {
            title
            titletwo
            titlethree
            personalquote
          }
        }
        allDatoCmsNavigationenglish(sort: { fields: id }) {
          nodes {
            title
            id
            slug
          }
        }
      }
    `
  );
  const HeroData = result.allDatoCmsHeroenglish.nodes[0];
  const NavigationData = result.allDatoCmsNavigationenglish.nodes;
  return { HeroData, NavigationData };
};
