const CircleSvg = () => {
  return (
    <svg
      // width={517}
      // height={430}
      viewBox="0 0 517 430"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_101_132)">
        <ellipse cx={245} cy={253.5} rx={145} ry={76.5} fill="#FDE598" />
      </g>
      <g filter="url(#filter1_f_101_132)">
        <ellipse cx={275} cy={176.5} rx={142} ry={76.5} fill="#FF5555" />
      </g>
      <defs>
        <filter
          id="filter0_f_101_132"
          x={0}
          y={77}
          width={490}
          height={353}
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
            stdDeviation={50}
            result="effect1_foregroundBlur_101_132"
          />
        </filter>
        <filter
          id="filter1_f_101_132"
          x={33}
          y={0}
          width={484}
          height={353}
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
            stdDeviation={50}
            result="effect1_foregroundBlur_101_132"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CircleSvg;
