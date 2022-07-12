import { FC } from "react";

export const Icon: FC<any> = (props) => {
  const { color, width, height, name, stroke } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Home"
      className="_ab6-"
      fill={color}
      stroke={stroke}
      height={height || 30}
      role="img"
      viewBox="0 0 24 24"
      width={width || 30}
    >
      {name === "Home" && (
        <path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z" />
      )}
      {name === "Location" && (
        <>
          <line
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            x1="22"
            x2="9.218"
            y1="3"
            y2="10.083"
          />
          <polygon
            fill="none"
            points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </>
      )}
      {name === "Discover" && (
        <>
          <circle
            cx="12.001"
            cy="12.005"
            fill={color || "white"}
            r="10.5"
            stroke={stroke || "currentColor"}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <polygon
            fill={color !== "black" ? "white" : "black"}
            points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
            stroke={color === "black" ? "white" : "currentColor"}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <polygon
            fill-rule="evenodd"
            fill={color === "black" ? "white" : "black"}
            points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
          />
        </>
      )}
      {name === "ContentCreate" && (
        <>
          <path
            d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <line
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="6.545"
            x2="17.455"
            y1="12.001"
            y2="12.001"
          />
          <line
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="12.003"
            x2="12.003"
            y1="6.545"
            y2="17.455"
          />
        </>
      )}
      {name === "Like" && (
        <>
          <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z" />
        </>
      )}
      {name === "Search" && (
        <>
          <path
            fill="none"
            d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
            stroke={stroke || "currentColor"}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <line
            fill="none"
            stroke={stroke || "currentColor"}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="16.511"
            x2="22"
            y1="16.511"
            y2="22"
          />
        </>
      )}
      {name === "Close" && (
        <>
          <polyline
            fill="none"
            points="20.643 3.357 12 12 3.353 20.647"
            stroke={stroke || "currentColor"}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
          <line
            fill="none"
            stroke={stroke || "currentColor"}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            x1="20.649"
            x2="3.354"
            y1="20.649"
            y2="3.354"
          />
        </>
      )}
      {name === "Bookmark" && (
        <>
          <polygon
            fill="none"
            points="20 21 12 13.44 4 21 4 3 20 3 20 21"
            stroke={stroke || "currentColor"}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </>
      )}
      {name === "Comment" && (
        <>
          <path
            d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
            fill="none"
            stroke={stroke || "currentColor"}
            stroke-linejoin="round"
            stroke-width="2"
          />
        </>
      )}
      {name === "Emoji" && (
        <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z" />
      )}
      {name === "Dots" && (
        <>
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="6" cy="12" r="1.5" />
          <circle cx="18" cy="12" r="1.5" />
        </>
      )}
    </svg>
  );
};
