/** @jsx jsx */
import { jsx, Grid, Container } from "theme-ui"
import React from "react"
import { ColumnStyles } from "../Styles"

export const TwoCols = () => {
  return (
    <Container sx={{ maxWidth: 1200 }}>
      <Grid
        columns={2}
        gap={40}
        sx={{
          ...ColumnStyles,
        }}
      >
        <ul>
          <li>
            Starters are a way to quickly create Gatsby sites with similar
            functionality.
          </li>
          <li>
            You download the entire prebuilt gatsby site and customize from
            there
          </li>
        </ul>
        <ul>
          <li>you can update themes</li>
        </ul>
      </Grid>
    </Container>
  )
}
