import { graphql, useStaticQuery } from "gatsby";

export const DataES = () => {
  const result = useStaticQuery(
    graphql`
      query {
        allDatoCmsHerospanish {
          nodes {
            title
            titletwo
            titlethree
            personalquote
            about
            abouttwo
          }
        }
        allDatoCmsNavigationspanish(sort: { fields: id }) {
          nodes {
            title
            id
            slug
          }
        }
      }
    `
  );
  const HeroData = result.allDatoCmsHerospanish.nodes[0];
  const NavigationData = result.allDatoCmsNavigationspanish.nodes;
  return { HeroData, NavigationData };
};
