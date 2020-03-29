import React, { useState } from "react";
import { Box, Paragraph, Collapsible, Button } from "grommet";
import SectionTitle from "../components/SectionTitle";

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

const updates = [
  <Update
    key="March 28"
    date="March 28"
    text={
      <>
        {`We've got a couple of new endpoints today.`}
        <br />
        <br />
        {`First, we now have an endpoint to get the list of hospitals. Note that this may not be the latest
          list of hospitals in the Philippines. The ArcGIS datasets were named as hosplevel12018, hosplevel22018, and
          hosplevel32018, implying that the data is dated 2018.`}
        <br />
        <br />
        {`Foreign national cases are now available. It hasn't been updated recently but I'm putting this out just in case
          someone needs the data.`}
        <br />
        <br />
        {`And as you may have noticed, the documentation was cleaned up a bit.`}
        <br />
        <br />
        {`Number of confirmed cases and PUI's per hospital is now being developed. The challenge is matching the hospital names
          with the one in /hospitals.`}
      </>
    }
  />,
  <Update
    key="March 27"
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
  />,
  <Update
    key="March 26"
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
  />,
  <Update
    key="March 24"
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
  />,
  <Update
    key="March 23"
    date="March 23"
    text={`
        Beta version of the API is now up! Endpoint for
        confirmed cases is now available along with some
        constant data (e.g. provinces, cities). I'll be
        working on parsing the relationship of each patients
        (e.g. PH5 is the husband of PH6) for the next release.
      `}
  />
];

export default function Updates(): JSX.Element {
  const [open, setOpen] = useState(false);

  function onToggle() {
    setOpen(!open);
  }

  return (
    <Box>
      <SectionTitle title="Updates" />
      {updates[0]}
      <Collapsible open={open}>
        {updates.map((update, i) => (i === 0 ? null : update))}
      </Collapsible>
      <Box direction="row">
        <Button
          label={open ? "Hide Updates" : "More Updates"}
          onClick={onToggle}
          size="small"
        />
      </Box>
    </Box>
  );
}
