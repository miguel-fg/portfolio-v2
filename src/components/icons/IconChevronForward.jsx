// icon:chevron-forward | Ionicons https://ionicons.com/ | Ionic Framework
import * as React from "react";

function IconChevronForward(props) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="#F1EFE7"
      {...props}
      className="w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16"
    >
      <path
        fill="none"
        stroke="#F1EFE7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
        d="M184 112l144 144-144 144"
      />
    </svg>
  );
}

export default IconChevronForward;
