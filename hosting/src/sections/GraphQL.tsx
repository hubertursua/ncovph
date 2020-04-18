import React from "react";
import { Box, Heading, Paragraph } from "grommet";
import SectionTitle from "../components/SectionTitle";
import ExternalLink from "../components/ExternalLink";
import CodeBlockJson from "../components/CodeBlockJson";

export default function GraphQL(): JSX.Element {
  return (
    <Box>
      <SectionTitle title="GraphQL" />
      <Paragraph>
        The new version of the API now uses GraphQL.
      </Paragraph>
      <Heading level={3} margin={{ bottom: "xsmall" }}>Endpoint and Playground</Heading>
      <Paragraph>
        <ExternalLink href="https://ncovph.com/graphql" label="https://ncovph.com/graphql" />
      </Paragraph>
      <Heading level={3} margin={{ bottom: "xsmall" }}>Documentation</Heading>
      <Paragraph>Open the GraphQL Playground and click the Docs or Schema found at the right side of the screen.</Paragraph>
      <Heading level={3} margin={{ bottom: "xsmall" }}>Queries</Heading>
      <Paragraph>
        {`Send a POST request to `}
        <ExternalLink href="https://ncovph.com/graphql" label="https://ncovph.com/graphql" />
        {` with your GraphQL query as a binary data.`}
        <CodeBlockJson code={`
{
  query {
    countConfirmedCases,
    countAdmitted,
    countRecoveries,
    countDeaths
  }
}
        `} />
      </Paragraph>
      <Paragraph>
        {`You can also use any of the `}
        <ExternalLink href="https://graphql.org/code/#graphql-clients" label="GraphQL clients" />
        {` available in multiple programming languages.`}
      </Paragraph>
    </Box>
  );
}
