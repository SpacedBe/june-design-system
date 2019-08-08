import React from "react";

const SvgTriangleDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 30 30" {...props}>
    <defs>
      <path
        d="M15.855 15l-3.623-4.46a.993.993 0 010-1.276.723.723 0 011.118 0l4.418 5.097c.31.354.31.925 0 1.277l-4.418 5.097a.722.722 0 01-1.118 0 .993.993 0 010-1.276L15.855 15z"
        id="triangleDown_svg__a"
      />
    </defs>
    <use transform="rotate(90 15 15)" xlinkHref="#triangleDown_svg__a" />
  </svg>
);

export default SvgTriangleDown;
