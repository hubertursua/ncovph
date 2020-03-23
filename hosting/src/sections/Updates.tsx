import React from "react";
import { Box, Heading, Paragraph } from "grommet";

function Update({
  date,
  text,
}: {
  date: string,
  text: JSX.Element | string,
}): JSX.Element {
  return (
    <Paragraph>
      <strong>{date}</strong><br />
      {text}
    </Paragraph>
  );
}

export default function Updates(): JSX.Element {
  return (
    <Box>
      <Heading level={2}>Updates</Heading>
      <Update
        date="March 23"
        text={`
          Beta version of the API is now up! Endpoint for
          confirmed cases is now available along with some
          constant data (e.g. provinces, cities). I'll be
          working on parsing the relationship of each patients
          (e.g. PH5 is the husband of PH6) for the next release.
        `}
      />
    </Box>
  );
}
