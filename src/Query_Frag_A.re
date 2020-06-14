[%graphql {|
fragment ImageFluidA on ImageSharpFluid {
  srcSet
  src
  sizes
  aspectRatio
}
|}]

let query = ImageFluidA.query;
