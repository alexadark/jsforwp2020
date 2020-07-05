import { github, vsDark, shadesOfPurple } from "@code-surfer/themes"
import { themes } from "mdx-deck"

export default {
  ...themes.condensed,

  fonts: {
    body: "Coda, cursive",
    heading: '"Coda Caption", sans-serif',
  },
  colors: {
    text: "#FAD000",
    background: "#27264A",
    link: "#fff",
    pre: "#fff",
    preBackground: "#051626",
    code: "#fff",
  },

  styles: {
    h1: { color: "#6AD798" },
    li: {
      maxWidth: 960,
      py: 10,
      listStyle: "none",
      color: "#fff",
      textAlign: "left",
    },
    a: {
      transition: "all .4s easeinout",
      color: "#9EFFFF",
      "&:hover": {
        color: "#FCBBCC",
      },
    },
    Footer: {
      p: {
        display: "flex",
        justifyContent: " space-between",
      },
      a: { color: "white", cursor: "pointer" },
      //   bg: "red",
    },
    Header: {
      textAlign: "center",
    },
    Slide: {
      maxWidth: 1200,
      mx: "auto",
      px: 30,
      textAlign: "center",
    },
  },
}
