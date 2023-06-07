import React from "react";

export const Logo = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // xml:space="preserve"
      width="100%"
      height="100%"
      version="1.1"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
      image-rendering="optimizeQuality"
      fill-rule="evenodd"
      clip-rule="evenodd"
      viewBox="0 0 784.37 1277.39"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      // xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
      {...props}
    >
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer" />
        <g id="_1421394342400">
          <g>
            <polygon
              fill="#343434"
              fill-rule="nonzero"
              points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "
            />
            <polygon
              fill="#8C8C8C"
              fill-rule="nonzero"
              points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "
            />
            <polygon
              fill="#3C3C3B"
              fill-rule="nonzero"
              points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "
            />
            <polygon
              fill="#8C8C8C"
              fill-rule="nonzero"
              points="392.07,1277.38 392.07,956.52 -0,724.89 "
            />
            <polygon
              fill="#141414"
              fill-rule="nonzero"
              points="392.07,882.29 784.13,650.54 392.07,472.33 "
            />
            <polygon
              fill="#393939"
              fill-rule="nonzero"
              points="0,650.54 392.07,882.29 392.07,472.33 "
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const Light = (props: any) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      ></path>
    </svg>
  );
};

export const Dark = (props: any) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      ></path>
    </svg>
  );
};
