import React from "react";

const SvgAdd = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 30 30" {...props}>
    <defs>
      <path
        id="add_svg__a"
        d="M23 16.143h-6.857V23h-2.286v-6.857H7v-2.286h6.857V7h2.286v6.857H23z"
      />
    </defs>
    <use xlinkHref="#add_svg__a" />
  </svg>
);

export default SvgAdd;
