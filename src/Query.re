module ImageFluidA = Query_Frag_A.ImageFluidA;
module ImageFluidB = Query_Frag_B;

[%graphql
  {|
query {
  placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
    childImageSharp {
      a: fluid(maxWidth: 300) {
        ...ImageFluidA
      }
      b: fluid(maxWidth: 300) {
        ...ImageFluidB
      }
    }
  }
}
|};
  {inline: true}
];
