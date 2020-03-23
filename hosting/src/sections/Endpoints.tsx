import React from "react";
import { Box, Heading, Paragraph } from "grommet";
import TryButton from "../components/TryButton";

interface EndpointSectionProps {
  method: string;
  path: string;
  description: string;
}

function Endpoint({
  method,
  path,
  description
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
    </Box>
  );
}

export default function Endpoints(): JSX.Element {
  return (
    <Box>
      <Heading level={2}>Endpoints</Heading>

      <Paragraph>
        <strong>Base URL:</strong> <a href="https://ncovph.com/api" target="_blank">https://ncovph.com/api</a>
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

      <Endpoint
        method="GET"
        path="/confirmed-cases"
        description="Returns a list of all confirmed cases in the Philippines."
      />
    </Box>
  );
}