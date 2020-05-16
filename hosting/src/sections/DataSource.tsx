import React from "react";
import { Box, Paragraph } from "grommet";
import SectionTitle from "../components/SectionTitle";
import ExternalLink from "../components/ExternalLink";

export default function DataSource(): JSX.Element {
  return (
    <Box>
      <SectionTitle title="Data Source" />
      <Paragraph>
        The data is uploaded manually from official sources daily as early as 5pm (sometimes late). Data comes from the following official sources:
        <ul>
          <li>
            <ExternalLink
              href="https://drive.google.com/drive/folders/10VkiUA8x7TS2jkibhSZK1gmWxFM-EoZP"
              label="DOH COVID-19 Data Drop"
            />
          </li>
        </ul>
      </Paragraph>
    </Box>
  );
}
