[%graphql
  {|
query {
  placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
    childImageSharp {
      a: fluid(maxWidth: 300) {
        ...Query_Frag_A.ImageFluidA
      }
      b: fluid(maxWidth: 300) {
        ...Query_Frag_B
      }
    }
  }
}
|};
  {inline: true}
];
