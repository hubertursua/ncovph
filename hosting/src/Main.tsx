import React from "react";
import { Box, Heading, Main as GMain, Paragraph } from "grommet";
import styled from "styled-components";
import DataSource from "./sections/DataSource";
import Endpoints from "./sections/Endpoints";
import RateLimit from "./sections/RateLimit";
import SyncingCaching from "./sections/SyncingCaching";
import Updates from "./sections/Updates";
import Contributing from "./sections/Contributing";
import License from "./sections/License";
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
      <Heading color="brand">ncovph (beta)</Heading>
      <Paragraph>API for COVID-19 data (Philippines)</Paragraph>
      <Box flex direction="row" gap="small">
        <StarButton />
        <IssueButton />
      </Box>
      <Box flex>
        <Updates />
        <DataSource />
        <SyncingCaching />
        <RateLimit />
        <Endpoints />
        <Contributing />
        <License />
      </Box>
    </StyledMain>
  );
}

export default Main;