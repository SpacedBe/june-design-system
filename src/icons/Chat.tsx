import React from "react";

const SvgChat = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 30 30" {...props}>
    <defs>
      <path
        d="M15 7.8c-4.3 0-7.8 3.23-7.8 7.2s3.5 7.2 7.8 7.2a8.297 8.297 0 003.474-.754l2.044.667a1.764 1.764 0 001.775-.409 1.668 1.668 0 00.418-1.735l-.652-1.906c.487-.955.741-2 .741-3.063 0-3.97-3.5-7.2-7.8-7.2m0 1.8c3.313 0 6 2.418 6 5.4a4.989 4.989 0 01-.887 2.825L21 20.4l-2.721-.88c-.943.556-2.07.88-3.279.88-3.313 0-6-2.418-6-5.4s2.687-5.4 6-5.4"
        id="chat_svg__a"
      />
    </defs>
    <use xlinkHref="#chat_svg__a" />
  </svg>
);

export default SvgChat;
