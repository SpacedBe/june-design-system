import * as React from "react";

const SvgCalender = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 30 30" {...props}>
    <defs>
      <path
        d="M19.254 7.225V6.26a.86.86 0 1 1 1.72 0v.965h1.07a1.93 1.93 0 0 1 1.931 1.93V22.67a1.93 1.93 0 0 1-1.93 1.931H8.53A1.93 1.93 0 0 1 6.6 22.67V9.155a1.93 1.93 0 0 1 1.93-1.931h1.071V6.26a.86.86 0 0 1 1.72 0v.965h7.933zM8.531 12.911v9.758h13.513v-9.758H8.531zm0-1.72h13.513V9.157H8.531v2.036zm5.067 4.857a.86.86 0 1 1 0-1.72h3.861c.831 0 1.179 1.062.509 1.554-1.462 1.072-2.062 2.304-2.062 4.133a.86.86 0 0 1-1.72 0c0-1.566.374-2.862 1.18-3.967h-1.768z"
        id="calender_svg__a"
      />
    </defs>
    <use xlinkHref="#calender_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgCalender;
