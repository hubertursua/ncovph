import React from "react";
import { Box, Heading, Main as GMain, Paragraph, Text } from "grommet";
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
      <Box round pad="small" background="light-2" elevation="small">
        <Text color="status-error">This project is now discontinued. Thank you for all your support. Read more in the Updates section below.</Text>
      </Box>
      <Heading color="brand">ncovph</Heading>
      <Paragraph>API for COVID-19 data (Philippines)</Paragraph>
      <Box flex direction="row" gap="small">
        <StarButton />
        <IssueButton />
      </Box>
      <Box flex>
        <Updates />
        <GraphQL />
        <DataSource />
        <RateLimit />
        <Contributing />
        <License />
      </Box>
    </StyledMain>
  );
}

export default Main;