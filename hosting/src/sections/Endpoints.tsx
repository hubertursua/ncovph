import React from "react";
import { Box, Heading, Paragraph } from "grommet";
import TryButton from "../components/TryButton";

interface EndpointSectionProps {
  method: string;
  path: string;
  description: string;
  notes?: string[];
}

function Endpoint({
  method,
  path,
  description,
  notes = [],
}: EndpointSectionProps): JSX.Element {
  return (
    <Box
      flex
      pad={{ bottom: "medium" }}
      style={{ borderBottom: "1px solid #e6e6e6" }}
    >
      <Heading level={3} margin={{ bottom: "xsmall" }}>
        {method} {path}
      </Heading>
      <Paragraph>{description}</Paragraph>
      <Box direction="column">
        <TryButton path={path} />
      </Box>
      {(notes.length > 0) && (
        <Paragraph>
          <Heading level={4}>Notes</Heading>
          <ul>
            {notes.map((note) => (<li key={note}>{note}</li>))}
          </ul>
        </Paragraph>
      )}
    </Box>
  );
}

export default function Endpoints(): JSX.Element {
  return (
    <Box>
      <Heading level={2}>Endpoints</Heading>

      <Paragraph>
        <strong>Base URL:</strong>{" "}
        <a
          href="https://ncovph.com/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ncovph.com/api
        </a>
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
      />

      <Endpoint
        method="GET"
        path="/ofw-cases"
        description="Returns a list of all OFW cases."
        notes={[
          "For cases which involve cruise ships, see the metadata.cruise_ship field.",
          "Some cases will have a status, but most are marked as unspecified."
        ]}
      />

      <Endpoint
        method="GET"
        path="/foreign-national-cases"
        description="Returns a list of all foreign national cases."
      />

      <Endpoint
        method="GET"
        path="/hospitals"
        description="Returns a list of hospitals."
      />

      <Endpoint
        method="GET"
        path="/nationalities"
        description="Returns a list of nationalities."
      />

      <Endpoint
        method="GET"
        path="/countries"
        description="Returns a list of countries."
      />

      <Endpoint
        method="GET"
        path="/regions"
        description="Returns a list of regions in the Philippines."
      />

      <Endpoint
        method="GET"
        path="/provinces"
        description="Returns a list of provinces in the Philippines."
      />

      <Endpoint
        method="GET"
        path="/cities"
        description="Returns a list of cities and municipalities in the Philippines."
      />
    </Box>
  );
}