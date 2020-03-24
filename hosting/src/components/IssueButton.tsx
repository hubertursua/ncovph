import React from "react";
import GitHubButton from "react-github-btn";

export default function IssueButton() {
  return (
    <GitHubButton
      href="https://github.com/hyubs/ncovph/issues"
      data-size="large"
      data-show-count={true}
      aria-label="Issue hyubs/ncovph on GitHub"
    >
      Issue
    </GitHubButton>
  );
}
