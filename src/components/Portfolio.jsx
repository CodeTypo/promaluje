import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const PortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
      allFile(filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "static/images" } }) {
        nodes {
          name
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    console.log("Filenames found in the images folder:");
    data.allFile.nodes.forEach(node => {
      console.log(node.name);
    });
  }, [data]); // This useEffect hook will run whenever the data changes

  return (
    <PortfolioWrapper>
      {data.allFile.nodes.map((node, index) => (
        <Image key={index} fluid={node.childImageSharp.fluid} />
      ))}
    </PortfolioWrapper>
  );
};

export default Portfolio;
