import React from "react";

const SvgQuestionmark = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 30 30" {...props}>
    <path d="M15 30C6.716 30 0 23.284 0 15 0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15-.01 8.28-6.72 14.99-15 15zm0-27C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12c-.007-6.624-5.376-11.993-12-12zm1.5 21h-3v-3h3v3zm0-4.5h-3a5.374 5.374 0 012.655-4.767C17.145 13.974 18 13.318 18 12a3 3 0 00-6 0H9a6 6 0 1112 0 5.12 5.12 0 01-2.34 3.967A4.65 4.65 0 0016.5 19.5z" />
  </svg>
);

export default SvgQuestionmark;
