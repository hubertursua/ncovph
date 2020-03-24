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
        date="March 24"
        text={<>
          {`Data for OFW cases is now available. An error reporting
          tool was added which will inform me if the API cannot
          data from the ncovtracker. I'll be working on health facilities
          and PUI data.`}
          <br />
          <br />
          {`Relationship of patients have been deprioritized
          because DOH will have a hard time getting this data as more cases
          come in (PH204 was the latest to have relationship data).`}
        </>}
      />
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
