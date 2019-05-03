import React from "react";

const SvgOff = (props: React.SVGProps<SVGSVGElement>) => (
  <svg height="1em" viewBox="0 0 8 8" width="1em" {...props}>
    <path
      d="M4 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
      fill="#fff"
    />
  </svg>
);

export default SvgOff;
