import React from "react";
import { Box, Paragraph } from "grommet";
import SectionTitle from "../components/SectionTitle";
import ExternalLink from "../components/ExternalLink";

export default function DataSource(): JSX.Element {
  return (
    <Box>
      <SectionTitle title="Data Source" />
      <Paragraph>
        Data comes from the following official sources:
        <ul>
          <li>
            <ExternalLink
              href="https://ncovtracker.doh.gov.ph"
              label="ncovtracker.doh.gov.ph (ArcGIS)"
            />.
          </li>
          <li>
            <ExternalLink
              href="https://www.facebook.com/OfficialDOHgov"
              label="Department of Health (Philippines) (Facebook Page)"
            />.
          </li>
        </ul>
      </Paragraph>
      <Paragraph>
        I'm expecting the data to become more incomplete and inaccurate as confirmed cases increase. This is due to the fact that the number of cases will overwhelm the investigators of DOH.
      </Paragraph>
    </Box>
  );
}
