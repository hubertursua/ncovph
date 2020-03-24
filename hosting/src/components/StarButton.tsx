import React from "react";
import GitHubButton from "react-github-btn";

export default function StarButton() {
  return (
    <GitHubButton
      href="https://github.com/hyubs/ncovph"
      data-size="large"
      data-show-count={true}
      aria-label="Star hyubs/ncovph on GitHub"
    >
      Star
    </GitHubButton>
  );
}
