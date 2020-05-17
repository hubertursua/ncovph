import React, { useState } from "react";
import { Box, Paragraph, Collapsible, Button } from "grommet";
import SectionTitle from "../components/SectionTitle";
import ExternalLink from "../components/ExternalLink";

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
    key="May 17"
    date="May 17"
    text={
      <>
        {`Here's another set of new queries!`}
        <br /><br />
        {`Unique individuals tested now has its own cumulative and per-day queries. This should've been
        included in the first versions but I didn't notice it was missing.`}
        <br /><br />
        {`Running averages for almost all per-day numbers in both cases and testing queries. Because
        the data tends to fluctuate a lot due to external variables, we can use running averages to
        reduce the noise in the data.`}
        <br /><br />
        {`Finally, positivity rates! Wondering how many of those being tested turns out positive? This
        is the metric that you can explore. This  can be queried using per-day and per-day running average.`}
        <br /><br />
        {`Be sure to check out the May 16 updates below also. Lots of changes this weekend.`}
      </>
    }
  />,
  <Update
    key="May 16 (evening)"
    date="May 16 (evening)"
    text={
      <>
        {`The weekly reports and daily reports have now been added. Finally!
        You can query them using the "ppe" (for weekly reports) and
        "healthFacilityCapacity" (for daily reports). For now, only the latest data
        can be queried. But let me know if you need some aggregate queries for these
        data sets.`}
        <br /><br />
        {`I do not plan on exposing a query which dumps everything. These are very large
        data sets and those use cases do not align for the intended scope of this API.`}
        <br /><br />
        {`Be sure to check out the May 16 moring update below also.`}
      </>
    }
  />,
  <Update
    key="May 16"
    date="May 16"
    text={
      <>
        {`Latest data drop is now up.`}
        <br /><br />
        {`Two new fields have been added in Case Information. First is dateOnsetSymptoms.
        This is the date when the first COVID-19 symptoms of the patient manifested.
        The second is the isPregnant field which specifies if the patient is currently
        pregnant.`}
        <br /><br />
        {`I will be creating more aggregate queries based on these new fields next
        week if DOH decides to keep the fields permanently.`}
      </>
    }
  />,
  <Update
    key="May 14"
    date="May 14"
    text={
      <>
        {`No May 14 data drop. `}
        <ExternalLink label="All the files" href="https://drive.google.com/drive/folders/10VkiUA8x7TS2jkibhSZK1gmWxFM-EoZP" />
        {` except for the "READ ME" are missing.`}
      </>
    }
  />,
  <Update
    key="May 8"
    date="May 8"
    text={
      <>
        {`PSGC codes were removed again. Some names of cities / municipalities will change because of this.`}
        <br /><br />
        {`Testing Aggregates data was included in the data drop but there is no May 8 data included in the latest file.`}
      </>
    }
  />,
  <Update
    key="May 7"
    date="May 7"
    text={
      <>
        {`Short update. If you noticed for the past few days the data is updated late.
        The data drop is now being uploaded at a much later time (a bit random so can't really say when exactly).
        I check per hour starting around 6pm until it shows up on the DOH COVID-19 Google Drive. If
        for some reason they fail to upload it by 11pm, I'll check the next day.`}
      </>
    }
  />,
  <Update
    key="May 4"
    date="May 4"
    text={
      <>
        {`IMPORTANT: The old REST API (https://ncovph.com/api) is now discontinued. This was
        scheduled last April 30 as previously announced but gave a few more days extension.
        Current users are expected to migrate to the new GraphQL API.`}
        <br /><br />
        {`You can now filter using residence locations (i.e. region, province, city)
        for Case Information data.`}
      </>
    }
  />,
  <Update
    key="April 28"
    date="April 28"
    text={
      <>
        {`The PSGC codes in the residence data seems to be stable. I'll be using that
        to evaluate the name of a location. A separate library that I wrote, ph-locations,
        is used for this translation.`}
      </>
    }
  />,
  <Update
    key="April 27"
    date="April 27"
    text={
      <>
        {`There are inconsistencies with the residence data for the past 2-3 days. I am
        still verifying if these are corrections to old data or wrong changes. They have been
        experimenting in using PSGC recently but it seems it's spawned some new problems.`}
        <br /><br />
        {`In line with this, this will delay the usage of PSGC that I've been working on since
        we cannot trust the residence data to be correct.`}
      </>
    }
  />,
  <Update
    key="April 24"
    date="April 24"
    text={
      <>
        {`A new property "healthStatus" was added in cases.`}
        <br /><br />
        {`Coming up... There will be changes with the residence data. PSGC codes
        for residence properties (province, city) were added the other
        day and we will soon use that to translate the residence data. The current
        code uses ISO 3166 which has some differences with PSGC.`}
      </>
    }
  />,
  <Update
    key="April 22"
    date="April 22"
    text={
      <>
        {`Data from the Testing Aggregates is available in the latest version.`}
        <br /><br />
        {`All Case Information queries were moved to a cases query group. Following this, the Testing
        Aggregates queries are grouped under testing.`}
        <br /><br />
        {`IMPORTANT: The old REST API (https://ncovph.com/api) will be discontinued on
        April 30. Kindly migrate to the new GraphQL API before this. If you need help
        in migrating, just file an issue on GitHub.`}
      </>
    }
  />,
  <Update
    key="April 18"
    date="April 18"
    text={
      <>
        {`The new version of the API is now available. The API underwent a complete rewrite and is now
        using GraphQL.`}
        <br /><br />
        {`This first iteration comes with a collection of queries for the confirmed cases. The other data sets
        will be added a few days later.`}
        <br /><br />
        {`The current data source has a lot of new data and I'm now able to create different aggregated results
        from those. Some of the original data fields are no longer included like travel history and health
        facilities. Because of these changes, I could not do an exact replica of the original endpoints. A complete
        overhaul was required.`}
        <br /><br />
        {`Feel free to play around with the data and let me know if you have any comments.`}
      </>
    }
  />,
  <Update
    key="April 12"
    date="April 12"
    text={
      <>
        {`I will be deprecating ncovph. DOH's new dashboard uses a Tableau
        with closed data access.`}
        <br /><br />
        {`While it is possible to scrape the data from Tableau, that method of collecting data
        may have legal implications. I won't be supporting manual entry either. There's just too
        much data to input and that will be prone to human error. So unless DOH opens its Tableau
        permissions, there's no way for me to access the data and provide it in the API.`}
        <br /><br />
        {`If the situation does not change after a week, I will discontinue the project. The API
        service will be shutdown a few days after discontinuation. I advice users to copy any data
        that you need before the shutdown.`}
        <br /><br />
        {`Again, I'd like to thank everyone who supported and used this service.`}
        <br /><br />
      </>
    }
  />,
  <Update
    key="April 11"
    date="April 11"
    text={
      <>
        {`We're expecting the new ncovtracker.doh.gov.ph dashboard tomorrow. The changes
        are expected to be big. Be ready for a lot of break changes. I might have to restructure
        some of the endpoints depending on what data will be available.`}
      </>
    }
  />,
  <Update
    key="April 10"
    date="April 10"
    text={
      <>
        {`The parsing code was separated to a new GitHub repo hyubs/ncovph-parser.
        This will make updates easier to manage and for those who'd want to use the
        ArcGIS data but don't need the whole ncovph service, you can get that package
        instead.`}
        <br /><br />
        {`These changes are also in preparation for a major release that will soon be
        announced.`}
        <br /><br />
        {`No feature releases today and until ncovtracker.doh.gov.ph ArcGIS goes
        back online. We're not yet sure how major the changes will be. We might end
        up scrapping features if some of the data disappear or becomes difficult to
        calculate.`}
        <br /><br />
        {`And as a reminder, kindly check everyday for announcements here. I am constantly
        updating this project depending on the situation with the data source.`}
      </>
    }
  />,
  <Update
    key="April 8 - 1:32 PM"
    date="April 8 - 1:32 PM"
    text={
      <>
        {`The whole ncovtracker.doh.gov.ph is now under maintenance.
        The ArcGIS dashboard, including the API endpoints have been set to private.
        This means that this service can no longer gather data. I'll keep everyone
        posted if the situation changes.`}
      </>
    }
  />,
  <Update
    key="April 8"
    date="April 8"
    text={
      <>
        {`EDIT (7:30 AM): Temporary patch for confirmed cases is now up. It's currently
        referencing the April 6 version of PH_masterlist.`}
        <br />
        <br />
        {`As of April 8 06:39 AM, the details of ALL confirmed cases are missing.
        I think this started yesterday but I'll have to verify that. The list of cases
        are still up to PH3246 only.`}
        <br />
        <br />
        {`Number of PUIs and tests are also missing. Number of PUMs is still missing as well.`}
        <br />
        <br />
        {`I'm making a patch so that the cases looks at an older good copy of confirmed
        cases (PH_masterlist). I'll use that as a static data source for now while DOH
        is "Currently updating" ArcGIS.`}
        <br />
        <br />
        {`Hopefully, it doesn't stay that way. We've been getting lesser data everyday.`}
      </>
    }
  />,
  <Update
    key="April 7"
    date="April 7"
    text={
      <>
        {`As of April 7 9:52 AM, the details of confirmed cases ends with PH3246.
        In contrast, the total count is already updated to 3,660. ncovtracker.doh.gov.ph
        is displaying "Currently updating." We'll have to be patient while they update
        the data.`}
      </>
    }
  />,
  <Update
    key="April 6"
    date="April 6"
    text={
      <>
        {`PUI per Facility is now available! See the docs below. This took so long
        because I had to prioritize other tasks such as stability and data corrections.`}
        <br /><br />
        {`Trends was also rolled out yesterday. This is the first version of this endpoint.`}
        <br /><br />
        {`I've started archiving the ArcGIS data just so I have some kind of reference
        if in case the ArcGIS data is updated in a drastic way or if some data went missing.
        Unfortunately, I cannot give public access to this as it will cost a lot. You can
        always download the ArcGIS data yourself using the ArcGIS API.`}
        <br /><br />
        {`There are a few more endpoints in ArcGIS that I haven't converted. However, all of
        the data that you can see in ArcGIS can be computed using all the endpoints we have in
        ncovph. In essence, I'm done! 🎉`}
        <br /><br />
        {`I'll probably rollout some more endpoints later. But for now, I'll be taking a couple
        days break and think about what will be the Phase 2 of this API.`}
      </>
    }
  />,
  <Update
    key="April 4"
    date="April 4"
    text={
      <>
        {`DOH did not release the details of the recovered and deceased patients
        for April 2 and 3. The total counts (/counts) are still updated though.`}
        <br /><br />
        {`Total number of PUMs also went missing. I double checked in the ArcGIS
        dashboard and API and it is definitely missing (null).`}
        <br /><br />
        {`Most of the work done are backend changes. I'm improving the performance
        of the API to make it more accessible and reliable for everyone. This is also
        in preparation for the mass testing if ever there is an influx of data from DOH.`}
        <br /><br />
        {`As for the PUIs and PUMs per hospital, I will be releasing some time later
        endpoints for this. It won't be as clean as the other endpoints due to hospitals
        not matching the original list. I'll write more about this durig the release.`}
      </>
    }
  />,
  <Update
    key="April 2"
    date="April 2"
    text={
      <>
        {`A new endpoint for getting the totals for number of confirmed, recovered, deceased, PUIs, PUMs, and tests is now available. You can access it as GET /count`}
      </>
    }
  />,
  <Update
    key="April 1"
    date="April 1"
    text={
      <>
        {`The dates and status for recovered and deceased cases is now available. These will be updated
        at the end of each day; along with the date confirmed corrections.`}
        <br /><br />
        {`The list of cases will still automatically update every 15 minutes, as long as the new data
        doesn't break the service.`}
      </>
    }
  />,
  <Update
    key="March 31"
    date="March 31"
    text={
      <>
        {`Rate limit was changed from "100 requests per 15 minutes" to "18 requests per 3 minutes".
        This is to ensure that the service is available to more people. Avoid doing excessive calls
        to the API. You shouldn't need to since the data changes only once a day.`}
      </>
    }
  />,
  <Update
    key="March 30"
    date="March 30"
    text={
      <>
        {`Yesterday when ArcGIS was updated, the "confirmed" field's data went missing. 😬 I'll be doing
        manual inputs for this.`}
        <br />
        <br />
        {`For now, I'm basing the date confirmed to the date when DOH reported the case to the public. This is
        temporary for now and I may split date confirmed and date reported as two separate things if the former's
        data is restored in ArcGIS.`}
      </>
    }
  />,
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
