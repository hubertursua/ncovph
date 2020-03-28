import React from "react";
import { Box, Paragraph } from "grommet";
import SectionTitle from "../components/SectionTitle";

export default function RateLimit(): JSX.Element {
  return (
    <Box>
      <SectionTitle title="Rate Limit" />
      <Paragraph>100 requests per 15 minutes</Paragraph>
    </Box>
  );
}
