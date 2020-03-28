import React from "react";
import { Heading } from "grommet";

export default function SectionTitle({ title }: { title: string; }) {
  return (
    <Heading level={2} color="neutral-2">
      {title}
    </Heading>
  );
}
