import * as React from "react";

const SvgPhone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 30 30" {...props}>
    <defs>
      <path
        d="M18.505 5.4a3.035 3.035 0 0 1 3.032 3.032v13.136a3.035 3.035 0 0 1-3.032 3.032h-7.073A3.035 3.035 0 0 1 8.4 21.568V8.432A3.035 3.035 0 0 1 11.432 5.4h7.073zm0 2.021h-7.073a1.01 1.01 0 0 0-1.01 1.01v13.137c0 .558.452 1.01 1.01 1.01h7.073a1.01 1.01 0 0 0 1.01-1.01V8.432a1.01 1.01 0 0 0-1.01-1.01zm-3.537 12.126a1.01 1.01 0 1 1 0 2.022 1.01 1.01 0 0 1 0-2.022zm1.01-9.6h-2.02a.505.505 0 0 1-.505-.505v-.505c0-.28.226-.505.505-.505h2.02c.28 0 .506.226.506.505v.505a.505.505 0 0 1-.505.505z"
        id="phone_svg__a"
      />
    </defs>
    <use fill="#46ACA6" xlinkHref="#phone_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgPhone;
