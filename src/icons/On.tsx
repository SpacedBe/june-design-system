import * as React from "react";

const SvgOn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg height="1em" viewBox="0 0 1 8" width="1em" {...props}>
    <rect fill="#fff" fillRule="evenodd" height={8} rx={0.5} width={1} />
  </svg>
);

export default SvgOn;
