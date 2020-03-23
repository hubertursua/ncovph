import React from "react";
import { Box, Heading, Paragraph } from "grommet";

export default function SyncingCaching(): JSX.Element {
  return (
    <Box>
      <Heading level={2}>Syncing and Caching</Heading>
      <Paragraph>
        An updated copy of the data from ncovtracker.doh.gov.ph is retrieved every <strong>5 minutes</strong>. Often, the press announcements come first; they update ncovtracker.doh.gov.ph sometime after.
      </Paragraph>
      <Paragraph>
        The data is parsed and stored in cache for best performance and to not abuse API calls to ArcGIS.
      </Paragraph>
    </Box>
  );
}
