import * as React from "react";

const SvgRemove = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 30 30" {...props}>
    <defs>
      <path id="remove_svg__a" d="M23 16.143H7v-2.286h16z" />
    </defs>
    <use xlinkHref="#remove_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgRemove;
