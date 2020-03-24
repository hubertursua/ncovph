import React from "react";
import { Box, Heading, Paragraph } from "grommet";

export default function SyncingCaching(): JSX.Element {
  return (
    <Box>
      <Heading level={2}>Syncing and Caching</Heading>
      <Paragraph>
        An updated copy of the data from ncovtracker is retrieved every <strong>5 minutes</strong>. Often, the press announcements come first; they update ncovtracker sometime after.
      </Paragraph>
      <Paragraph>
        The data is parsed and stored in cache for best performance and to not abuse API calls to ncovtracker (ArcGIS).
      </Paragraph>
    </Box>
  );
}
