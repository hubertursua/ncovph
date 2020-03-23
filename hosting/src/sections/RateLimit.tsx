import React from "react";
import { Box, Heading, Paragraph } from "grommet";

export default function RateLimit(): JSX.Element {
  return (
    <Box>
      <Heading level={2}>Rate Limit</Heading>
      <Paragraph>100 requests per 15 minutes</Paragraph>
    </Box>
  );
}
