import React from "react";
import { Button } from "grommet";

export default function TryButton({ query }: {
  query: string;
}): JSX.Element {
  return (
    <Button
      alignSelf="start"
      href={`https://ncovph.com/graphql?query=${encodeURIComponent(query)}`}
      label="Try on the Playground"
      primary={true}
      size="small"
      target="_blank"
    />
  );
}
