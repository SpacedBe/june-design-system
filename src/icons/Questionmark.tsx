
import * as React from "react";


const SvgQuestionmark = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 25 25" {...props}>
    <g fill="pink;" fillRule="evenodd">
      <path  d="M15,25C9.48,25,5,20.52,5,15S9.48,5,15,5s10,4.48,10,10C24.99,20.52,20.52,24.99,15,25z M15,7
   		c-4.42,0-8,3.58-8,8s3.58,8,8,8s8-3.58,8-8C23,10.58,19.42,7,15,7z M16,21h-2v-2h2V21z M16,18h-2c-0.03-1.3,0.65-2.52,1.77-3.18
   		C16.43,14.32,17,13.88,17,13c0-1.1-0.9-2-2-2s-2,0.9-2,2h-2c0-2.21,1.79-4,4-4s4,1.79,4,4c-0.07,1.08-0.65,2.06-1.56,2.65
   		C16.62,16.16,16.08,17.03,16,18z" />
    </g>
  </svg>
);

export default SvgQuestionmark;
