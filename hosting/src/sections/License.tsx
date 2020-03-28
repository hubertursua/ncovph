import React from "react";
import { Box, Paragraph } from "grommet";
import SectionTitle from "../components/SectionTitle";

export default function License(): JSX.Element {
  return (
    <Box>
      <SectionTitle title="License" />
      <Paragraph>
        {`The source code of this project is under `}
        <a
          href="https://opensource.org/licenses/ISC"
          target="_blank"
          rel="noopener noreferrer"
        >
          ISC license
        </a>
        {`.`}
      </Paragraph>
      <Paragraph>
        Data coming from the sources listed above are not owned by this project
        or its contributors.
      </Paragraph>
    </Box>
  );
}
