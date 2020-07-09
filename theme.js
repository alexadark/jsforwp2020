import { github, vsDark, shadesOfPurple } from "@code-surfer/themes"
import { themes } from "mdx-deck"
import check from "./images/check.svg"

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
    lighBlue: "#9EFFFF",
  },

  styles: {
    h1: {
      color: "#6AD798",
    },
    h2: {
      color: "#6AD798",
    },
    h3: {
      color: "#6AD798",
    },
    li: {
      maxWidth: 960,
      py: 12,
      listStyle: "none",
      color: "#fff",
      textAlign: "left",
      fontSize: 25,
      position: "relative",
      pl: 35,
      "&:before": {
        content: "''",
        backgroundImage: `url(${check})`,
        width: 24,
        height: 24,
        position: "absolute",
        left: 0,
        top: 20,
      },
    },
    a: {
      transition: "all .4s easeinout",
      color: "#9EFFFF",
      textAlign: "left",
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
