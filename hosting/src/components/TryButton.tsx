import React from "react";
import { Button } from "grommet";

declare const analytics: any;

export default function TryButton({ path }: {
  path: string;
}): JSX.Element {
  return (
    <Button
      alignSelf="start"
      href={`https://ncovph.com/api${path}`}
      label="Try"
      size="small"
      target="_blank"
      onClick={() => analytics.logEvent('try', { path })}
    />
  );
}
