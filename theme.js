import { github, vsDark, shadesOfPurple } from "@code-surfer/themes"

export default {
  ...shadesOfPurple,
  styles: {
    Footer: {
      p: {
        display: "flex",
        justifyContent: " space-between",
      },
      a: { color: "white" },
      //   bg: "red",
    },
    Header: {
      textAlign: "center",
    },
  },
}
