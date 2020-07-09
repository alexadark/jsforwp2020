/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React from "react"

export const TeamMember = ({ src, name, url }) => (
  <Flex sx={{ flexDirection: "column" }}>
    <div>
      <img src={src} sx={{ borderRadius: "100%" }} />
    </div>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        textAlign: "center",
        color: "text",
        fontSize: 24,
        transition: "all .4s ease-in-out",
        "&:hover": {
          color: "#4CD190",
        },
      }}
    >
      {name}
    </a>
  </Flex>
)
