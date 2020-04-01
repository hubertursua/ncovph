import React from "react";
import { Box, Paragraph } from "grommet";
import SectionTitle from "../components/SectionTitle";

export default function ManualCorrections(): JSX.Element {
  return (
    <Box>
      <SectionTitle title="Manual Corrections" />
      <Paragraph>
        The following data are inputted manually:
         <ul>
            <li>Date confirmed</li>
            <li>Date recovered</li>
            <li>Date deceased</li>
            <li>Status (recovered and deceased only)</li>
         </ul>
      </Paragraph>
      <Paragraph>
        Data inputted comes from the data sources listed above.
      </Paragraph>
    </Box>
  );
}
