import React from "react";
import { Box, Heading, Paragraph } from "grommet";
import SectionTitle from "../components/SectionTitle";
import ExternalLink from "../components/ExternalLink";

export default function Contributing(): JSX.Element {
  return (
    <Box>
      <SectionTitle title="Contributing" />
      <Heading level={3} margin={{ bottom: "xsmall" }}>Code</Heading>
      <Paragraph>
        Create an issue if it's not yet reported. Do a pull request with your fixes.
      </Paragraph>
      <Heading level={3} margin={{ bottom: "xsmall" }}>Data Corrections</Heading>
      <Paragraph>
        <ExternalLink href="https://github.com/hyubs/ncovph/issues/new?labels=data%20correction" label="Create a new issue" /> and add the label as <strong>data correction</strong>. Explain why the data is incorrect and provide the correct value if available.
      </Paragraph>
      <Heading level={3} margin={{ bottom: "xsmall" }}>Donate</Heading>
      <Paragraph>
        We need to support our frontliners and those that are deeply affected by the COVID-19 situation. If you can, donate regularly to the institutions organizing charities for these people.
      </Paragraph>
    </Box>
  );
}
