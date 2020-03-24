import React from "react";
import { Box, Heading, Main as GMain, Paragraph } from "grommet";
import DataSource from "./sections/DataSource";
import Endpoints from "./sections/Endpoints";
import RateLimit from "./sections/RateLimit";
import SyncingCaching from "./sections/SyncingCaching";
import Updates from "./sections/Updates";
import IssueButton from "./components/IssueButton";
import StarButton from "./components/StarButton";

function Main(): JSX.Element {
  return (
    <GMain pad="large">
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
      </Box>
    </GMain>
  );
}

export default Main;