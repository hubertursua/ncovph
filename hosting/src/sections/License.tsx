import React from "react";
import { Box, Paragraph } from "grommet";
import SectionTitle from "../components/SectionTitle";
import ExternalLink from "../components/ExternalLink";

export default function License(): JSX.Element {
  return (
    <Box>
      <SectionTitle title="License" />
      <Paragraph>
        {`All code except for the data under `}
        <code className="inline-code">functions/src/data</code>
        {` are under `}
        <ExternalLink href="https://github.com/hyubs/ncovph/blob/master/LICENSE" label="ISC license" />
        {`.`}
        All code except for the data under `functions/src/data` are under ISC license.
      </Paragraph>
      <Paragraph>
        {`Data in `}
        <code className="inline-code">functions/src/data</code>
        {` and everything that is outputted by the API is governed by the `}
        <ExternalLink href="https://drive.google.com/open?id=1jlzCrN0l0uBj096XvkLCimBgJ30Qrp8l" label="Privacy and Confidentiality Statement" />
        {` of the Republic of the Philippines Department of Health.`}
      </Paragraph>
    </Box>
  );
}
