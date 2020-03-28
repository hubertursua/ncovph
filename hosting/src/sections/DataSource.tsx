import React from "react";
import { Box, Paragraph } from "grommet";
import SectionTitle from "../components/SectionTitle";

export default function DataSource(): JSX.Element {
  return (
    <Box>
      <SectionTitle title="Data Source" />
      <Paragraph>
        Data comes from <a href="https://ncovtracker.doh.gov.ph" target="_blank" rel="noopener noreferrer">ncovtracker.doh.gov.ph</a>.
      </Paragraph>
      <Paragraph>
        I'm expecting the data to become more incomplete and inaccurate as confirmed cases increase. This is due to the fact that the number of cases will overwhelm the investigators of DOH.
      </Paragraph>
    </Box>
  );
}
