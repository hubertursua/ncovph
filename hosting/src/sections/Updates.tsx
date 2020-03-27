import React from "react";
import { Box, Heading, Paragraph } from "grommet";

function Update({
  date,
  text
}: {
  date: string;
  text: JSX.Element | string;
}): JSX.Element {
  return (
    <Paragraph>
      <strong>{date}</strong>
      <br />
      {text}
    </Paragraph>
  );
}

export default function Updates(): JSX.Element {
  return (
    <Box>
      <Heading level={2}>Updates</Heading>
      <Update
        date="March 27"
        text={
          <>
            {`The new backend is now up. The API will always fallback to a "last known good data"
            if in case the ArcGIS API cannot be contacted or the latest ArcGIS data cannot be parsed
            by the service.`}
            <br />
            <br />
            {`A separate health checking service is now running. It checks if the endpoints can be
            accessed by the public. These new changes will improve the uptime of the API.`}
          </>
        }
      />
      <Update
        date="March 26"
        text={
          <>
            {`Most of the work has been cleaning the city-province data of the new cases.
          If you encountered blank results when calling the /confirmed-cases, that was the cause.`}
            <br />
            <br />
            {`I'll be deploying later some backend changes so that the API saves a last known good data.
          This will prevent the system from crashing. More about this after the release.`}
          </>
        }
      />
      <Update
        date="March 24"
        text={
          <>
            {`Cruise ship now has its own field as metadata.cruise_ship. Read the
          notes of /confirmed-cases to know how this is now handled.`}
            <br />
            <br />
            {`Data for OFW cases is now available. An error reporting
          tool was added which will inform me if the API cannot get
          data from the ncovtracker. I'll be working on health facilities
          and PUI data.`}
            <br />
            <br />
            {`Relationship of patients have been deprioritized
          because DOH will have a hard time getting this data as more cases
          come in (PH204 was the latest to have relationship data).`}
          </>
        }
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
