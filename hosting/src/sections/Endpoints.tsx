import React from "react";
import { Box, Heading, Paragraph, Text } from "grommet";
import TryButton from "../components/TryButton";
import CodeBlockJson from "../components/CodeBlockJson";
import SectionTitle from "../components/SectionTitle";
import ExternalLink from "../components/ExternalLink";

interface EndpointSectionProps {
  method: string;
  path: string;
  description: string;
  response?: JSX.Element | null;
  notes?: string[] | null;
}

function Endpoint({
  method,
  path,
  description,
  response = null,
  notes = [],
}: EndpointSectionProps): JSX.Element {
  return (
    <Box
      flex
      pad={{ bottom: "medium" }}
      // style={{ borderBottom: "1px solid #e6e6e6" }}
    >
      <Heading level={3} margin={{ bottom: "xsmall" }}>
        <Text size="medium" color="neutral-1">{method}</Text>
        {` ${path}`}
      </Heading>
      <Paragraph>{description}</Paragraph>
      <Box direction="column">
        <TryButton path={path} />
      </Box>
      {response && (
        <Box>
          <Heading level={4} margin={{ bottom: "xsmall" }}>
            Response
          </Heading>
          {response}
        </Box>
      )}
      {notes && notes.length > 0 && (
        <Paragraph>
          <Heading level={4}>Notes</Heading>
          <ul>
            {notes.map(note => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </Paragraph>
      )}
    </Box>
  );
}

export default function Endpoints(): JSX.Element {
  return (
    <Box>
      <SectionTitle title="Endpoints" />

      <Paragraph>
        <strong>Base URL:</strong>{" "}
        <ExternalLink href="https://ncovph.com/api" label="https://ncovph.com/api" />
        <br />
        <strong>Format:</strong>{" All responses are in JSON format."}
      </Paragraph>

      <Endpoint
        method="GET"
        path="/"
        description="Returns the name of the API."
      />

      <Endpoint
        method="GET"
        path="/health"
        description="Check the health of the API."
        response={
          <CodeBlockJson
            code={`
{
  uptime: 8108.361
}
          `}
          />
        }
      />

      <Endpoint
        method="GET"
        path="/confirmed-cases"
        description="Returns a list of all confirmed cases in the Philippines."
        notes={[
          "For residence, up to province-level is guaranteed. City/municipality is often unspecified.",
          "For travel history, this is strictly a country. Cruise ships have been translated to their respective countries (e.g. Diamond Princess = Japan). A field metadata.cruise_ship will show the name of the ship.",
          "Symptoms is currently blank in ncovtracker. I might remove this later on.",
          "Status is currently blank in ncovtracker."
        ]}
        response={
          <CodeBlockJson
            code={`
[
  ...,
  {
    caseID: "PH9999",
    age: 47,
    sex: "Male",
    date_confirmed: "2020-03-06T00:00:00.000Z",
    coordinates: {
      lat: 14.409523,
      lng: 121.037122
    },
    status: "Unspecified",
    nationality: "Filipino",
    residence: {
      region: "REGION_IV_A",
      province: "Rizal",
      city: "Cainta"
    },
    travel_history: ["Japan"],
    symptoms: [ ],
    facility: "Research Institute for Tropical Medicine",
    metadata: {
      cruise_ship: null,
      field_status: {
        residence: "Confirmed",
        travel_history: "Confirmed"
      },
      raw_data: {
        residence: "Cainta, Rizal",
        travel_history: "Japan",
        symptoms: " "
      }
    }
  },
  ...
]
          `}
          />
        }
      />

      <Endpoint
        method="GET"
        path="/ofw-cases"
        description="Returns a list of all OFW cases."
        notes={[
          "For cases which involve cruise ships, see the metadata.cruise_ship field.",
          "Some cases will have a status, but most are marked as unspecified."
        ]}
        response={
          <CodeBlockJson
            code={`
[
  ...,
  {
    caseID: "OF8888",
    age: 43,
    sex: "Female",
    country: "Japan",
    coordinates: {
      lat: 36.672541,
      lng: 139.514218
    },
    date_reported: "2020-02-19T00:00:00.000Z",
    date_confirmed: "2020-02-15T00:00:00.000Z",
    status: "Unspecified",
    remarks: null,
    metadata: {
      cruise_ship: "M/V Diamond Princess",
      field_status: { },
      raw_data: {
        country: "Japan (M/V Diamond Princess)",
        date_reported: "2/19/2020",
        date_confirmed: "Feb. 15, 2020",
        status: "Repatriated on Mar. 5, 2020"
      }
    }
  },
  ...
]
          `}
          />
        }
      />

      <Endpoint
        method="GET"
        path="/foreign-national-cases"
        description="Returns a list of all foreign national cases."
        response={
          <CodeBlockJson
            code={`
[
  ...,
  {
    caseID: "FN7777",
    age: 42,
    sex: "Female",
    nationality: "Taiwanese",
    travel_date: {
      arrival: "2001-02-23T00:00:00.000Z",
      departure: "2020-02-28T00:00:00.000Z"
    },
    travel_history: [
      "Taiwan",
      "Japan",
      "Philippines"
    ],
    date_confirmed: "2020-03-04T00:00:00.000Z",
    where_now: "Taiwan",
    coordinates: {
      lat: 23.87385,
      lng: 120.997154
    },
    status: "Unspecified"
  },
  ...
]
          `}
          />
        }
      />

      <Endpoint
        method="GET"
        path="/hospitals"
        description="Returns a list of hospitals."
        response={
          <CodeBlockJson
            code={`
[
  ...,
  {
    name: "Camp General Artemio Ricarte Station Hospital",
    level: "Level 1",
    location: {
      region: "REGION_IV_B",
      province: "Palawan",
      city: "Puerto Princesa City"
    },
    address: "Wescom Road, San Miguel, Puerto Princesa City, Palawan",
    coordinates: {
      lat: 9.746667,
      lng: 118.770841
    },
    onwer: "Government",
    sub: "AFP",
    class: "General",
    service: "Level 1"
  },
  ...
]
          `}
          />
        }
      />

      <Endpoint
        method="GET"
        path="/nationalities"
        description="Returns a list of nationalities."
        response={
          <CodeBlockJson
            code={`
[
  ...,
  "Peruvian",
  "Filipino",
  "Pitcairn",
  "Polish",
  ...
]
          `}
          />
        }
      />

      <Endpoint
        method="GET"
        path="/countries"
        description="Returns a list of countries."
        response={
          <CodeBlockJson
            code={`
[
  ...,
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  ...
]
          `}
          />
        }
      />

      <Endpoint
        method="GET"
        path="/regions"
        description="Returns a list of regions in the Philippines."
        response={
          <CodeBlockJson
            code={`
[
  ...,
  "Region IX",
  "Region V",
  "Region VI",
  "Region VII",
  ...
]
          `}
          />
        }
      />

      <Endpoint
        method="GET"
        path="/provinces"
        description="Returns a list of provinces in the Philippines."
        response={
          <CodeBlockJson
            code={`
[
  ...,
  {
    name: "Catanduanes",
    region: "REGION_V"
  },
  {
    name: "Cavite",
    region: "REGION_IV_A"
  },
  {
    name: "Cebu",
    region: "REGION_VII"
  },
  ...
]
          `}
          />
        }
      />

      <Endpoint
        method="GET"
        path="/cities"
        description="Returns a list of cities and municipalities in the Philippines."
        response={
          <CodeBlockJson
            code={`
[
  ...,
  {
    name: "Makati City",
    province: "Metro Manila"
  },
  {
    name: "Malabon City",
    province: "Metro Manila"
  },
  {
    name: "Mandaluyong City",
    province: "Metro Manila"
  },
  ...
]
          `}
          />
        }
      />
    </Box>
  );
}