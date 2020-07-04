import { github, vsDark, shadesOfPurple } from "@code-surfer/themes"

export default {
  ...shadesOfPurple,

  styles: {
    li: {
      maxWidth: 960,
      py: 15,
      listStyle: "none",
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
  },
}
