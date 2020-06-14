// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Query_Frag_A$GatsbyStarterDefault from "./Query_Frag_A.bs.js";
import * as Query_Frag_B$GatsbyStarterDefault from "./Query_Frag_B.bs.js";

var Raw = { };

let { graphql } = require("gatsby")
;

var query = (graphql`
  query   {
  placeholderImage: file(relativePath: {eq: "gatsby-astronaut.png"})  {
    childImageSharp  {
      a: fluid(maxWidth: 300)  {
        ...ImageFluidA
      }
      b: fluid(maxWidth: 300)  {
        ...Query_Frag_B
      }
    }
  }
}
`);

function parse(value) {
  var value$1 = value.placeholderImage;
  var tmp;
  if (value$1 == null) {
    tmp = undefined;
  } else {
    var value$2 = value$1.childImageSharp;
    var tmp$1;
    if (value$2 == null) {
      tmp$1 = undefined;
    } else {
      var value$3 = value$2.a;
      var value$4 = value$2.b;
      tmp$1 = {
        a: !(value$3 == null) ? Query_Frag_A$GatsbyStarterDefault.ImageFluidA.verifyArgsAndParse(value$3) : undefined,
        b: !(value$4 == null) ? Query_Frag_B$GatsbyStarterDefault.verifyArgsAndParse(value$4) : undefined
      };
    }
    tmp = {
      childImageSharp: tmp$1
    };
  }
  return {
          placeholderImage: tmp
        };
}

function serialize(value) {
  var value$1 = value.placeholderImage;
  var placeholderImage;
  if (value$1 !== undefined) {
    var value$2 = value$1.childImageSharp;
    var childImageSharp;
    if (value$2 !== undefined) {
      var value$3 = value$2.b;
      var b = value$3 !== undefined ? Query_Frag_B$GatsbyStarterDefault.serialize(value$3) : null;
      var value$4 = value$2.a;
      var a = value$4 !== undefined ? Query_Frag_A$GatsbyStarterDefault.ImageFluidA.serialize(value$4) : null;
      childImageSharp = {
        a: a,
        b: b
      };
    } else {
      childImageSharp = null;
    }
    placeholderImage = {
      childImageSharp: childImageSharp
    };
  } else {
    placeholderImage = null;
  }
  return {
          placeholderImage: placeholderImage
        };
}

function makeVariables(param) {
  
}

function makeDefaultVariables(param) {
  
}

var Z__INTERNAL = {
  graphql_module: 0
};

export {
  Raw ,
  query ,
  parse ,
  serialize ,
  makeVariables ,
  makeDefaultVariables ,
  Z__INTERNAL ,
  
}
/*  Not a pure module */
