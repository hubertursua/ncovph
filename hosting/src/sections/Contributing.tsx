import React from "react";
import { Box, Heading, Paragraph } from "grommet";

export default function Contributing(): JSX.Element {
  return (
    <Box>
      <Heading level={2}>Contributing</Heading>
      <Heading level={3} margin={{ bottom: "xsmall" }}>Code</Heading>
      <Paragraph>
        Create an issue if it's not yet reported. Do a pull request with your fixes.
      </Paragraph>
      <Heading level={3} margin={{ bottom: "xsmall" }}>Data Corrections</Heading>
      <Paragraph>
        <a href="https://github.com/hyubs/ncovph/issues/new?labels=data%20correction" target="_blank" rel="noopener noreferrer">Create a new issue</a> and add the label as <strong>data correction</strong>. Explain why the data is incorrect and provide the correct value if available.
      </Paragraph>
      <Heading level={3} margin={{ bottom: "xsmall" }}>Donate</Heading>
      <Paragraph>
        We need to support our frontliners and those that are deeply affected by the COVID-19 situation. If you can, donate regularly to the institutions organizing charities for these people.
      </Paragraph>
    </Box>
  );
}
