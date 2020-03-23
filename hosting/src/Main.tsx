import React from "react";
import { Box, Heading, Main as GMain, Paragraph } from "grommet";
import RateLimit from "./sections/RateLimit";
import Endpoints from "./sections/Endpoints";

function Main(): JSX.Element {
  return (
    <GMain pad="large">
      <Heading color="brand">ncovph (alpha)</Heading>
      <Paragraph>API for COVID-19 data (Philippines)</Paragraph>
      <Box flex>
        <RateLimit />
        <Endpoints />
      </Box>
    </GMain>
  );
}

export default Main;