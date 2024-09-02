// icon:chevron-back | Ionicons https://ionicons.com/ | Ionic Framework
import * as React from 'react';

function IconChevronBack(props) {
  return (
    <svg
      viewBox='0 0 512 512'
      fill='#0E1C36'
      height='4em'
      width='4em'
      {...props}
    >
      <path
        fill='none'
        stroke='#0E1C36'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={48}
        d='M328 112L184 256l144 144'
      />
    </svg>
  );
}

export default IconChevronBack;
