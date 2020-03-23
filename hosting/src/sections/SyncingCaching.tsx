import React from "react";
import { Box, Heading, Paragraph } from "grommet";

export default function RateLimit(): JSX.Element {
  return (
    <Box>
      <Heading level={2}>Syncing and Caching</Heading>
      <Paragraph>
        An updated copy of the data from ncovtracker.doh.gov.ph is retrieved every <strong>5 minutes</strong>.
      </Paragraph>
      <Paragraph>
        The data is parsed and stored in cache for best performance and to not abuse API calls to ArcGIS.
      </Paragraph>
    </Box>
  );
}
