const EllipseSvg = () => {
  return (
    <svg
      width={568}
      height={479}
      viewBox="0 0 568 479"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_101_131)">
        <ellipse
          cx={283.618}
          cy={239.068}
          rx={198.714}
          ry={107.054}
          transform="rotate(150 283.618 239.068)"
          fill="#FF5555"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_101_131"
          x={0.192055}
          y={0.0192642}
          width={566.853}
          height={478.098}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={51.5773}
            result="effect1_foregroundBlur_101_131"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default EllipseSvg;
