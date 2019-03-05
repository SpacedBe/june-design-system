import * as React from "react";

const SvgClose = (props: React.SVGProps<SVGSVGElement>) => (
  <svg height="1em" viewBox="0 0 32 32" width="1em" {...props}>
    <path d="M31.213 31.213a2.691 2.691 0 0 1-3.803 0L15.999 19.802 4.588 31.213a2.691 2.691 0 0 1-3.803 0 2.691 2.691 0 0 1 0-3.803l11.411-11.411L.785 4.588a2.691 2.691 0 0 1 0-3.803 2.691 2.691 0 0 1 3.803 0l11.411 11.411L27.41.785a2.691 2.691 0 0 1 3.803 0 2.691 2.691 0 0 1 0 3.803L19.802 15.999 31.213 27.41a2.691 2.691 0 0 1 0 3.803z" />
  </svg>
);

export default SvgClose;
