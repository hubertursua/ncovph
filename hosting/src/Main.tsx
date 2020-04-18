import React from "react";
import { Box, Heading, Main as GMain, Paragraph } from "grommet";
import styled from "styled-components";
import DataSource from "./sections/DataSource";
import RateLimit from "./sections/RateLimit";
import Updates from "./sections/Updates";
import Contributing from "./sections/Contributing";
import License from "./sections/License";
import GraphQL from "./sections/GraphQL";
import IssueButton from "./components/IssueButton";
import StarButton from "./components/StarButton";

const StyledMain = styled(GMain)`
  {
    max-width: 720px;
    width: 100%;
  }
`

function Main(): JSX.Element {
  return (
    <StyledMain pad="large">
      <Heading color="brand">ncovph</Heading>
      <Paragraph>API for COVID-19 data (Philippines)</Paragraph>
      <Box flex direction="row" gap="small">
        <StarButton />
        <IssueButton />
      </Box>
      <Box flex>
        <GraphQL />
        <Updates />
        <DataSource />
        <RateLimit />
        <Contributing />
        <License />
      </Box>
    </StyledMain>
  );
}

export default Main;