import React from "react";

export default function ExternalLink({ href, label }: { href: string, label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}
