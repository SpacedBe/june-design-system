import * as React from "react";

const SvgQuestionmark = (props: React.SVGProps<SVGSVGElement>) => (
  <svg height="1em" viewBox="0 0 32 32" width="1em" {...props}>
    <path
      d="M15 25.75a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8zm1 14h-2v-2h2zm0-3h-2a3.583 3.583 0 0 1 1.77-3.178c.66-.506 1.23-.943 1.23-1.822a2 2 0 1 0-4 0h-2a4 4 0 1 1 8 0 3.413 3.413 0 0 1-1.56 2.645A3.1 3.1 0 0 0 16 18.75z"
      fill="#fff"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgQuestionmark;
