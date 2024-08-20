const SvgIcCreateButton = ({ rotate }) => (
  <svg 
    width="106" 
    height="104" 
    viewBox="0 0 106 104" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_b_1873_1219)">
      <path 
        d="M96.4121 36.2705C101.971 45.682 101.971 57.3719 96.4121 66.7833L87.7751 81.407C82.3784 90.5442 72.556 96.1506 61.9441 96.1506L43.4789 96.1506C32.8669 96.1506 23.0445 90.5443 17.6478 81.407L9.0108 66.7834C3.45218 57.3719 3.45217 45.682 9.01079 36.2706L17.6478 21.6469C23.0445 12.5097 32.8669 6.9033 43.4789 6.9033L61.944 6.9033C72.556 6.9033 82.3784 12.5096 87.7751 21.6469L96.4121 36.2705Z" 
        fill="white" 
        fillOpacity="0.7"
      />
    </g>
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M55.2047 33.6141C55.2047 32.2334 54.0854 31.1141 52.7047 31.1141C51.324 31.1141 50.2047 32.2334 50.2047 33.6141V48.5871H35.2321C33.8513 48.5871 32.7321 49.7064 32.7321 51.0871C32.7321 52.4678 33.8513 53.5871 35.2321 53.5871H50.2047V68.56C50.2047 69.9407 51.324 71.06 52.7047 71.06C54.0854 71.06 55.2047 69.9407 55.2047 68.56V53.5871H70.1779C71.5586 53.5871 72.6779 52.4678 72.6779 51.0871C72.6779 49.7064 71.5586 48.5871 70.1779 48.5871H55.2047V33.6141Z" 
      fill="black"
      transform={`rotate(${rotate} 53 52)`}
    />
    <defs>
      <filter 
        id="filter0_b_1873_1219" 
        x="-25.1582" 
        y="-23.0967" 
        width="155.739" 
        height="149.247" 
        filterUnits="userSpaceOnUse" 
        colorInterpolationFilters="sRGB"
      >
        <feFlood 
          floodOpacity="0" 
          result="BackgroundImageFix"
        />
        <feGaussianBlur 
          in="BackgroundImageFix" 
          stdDeviation="15"
        />
        <feComposite 
          in2="SourceAlpha" 
          operator="in" 
          result="effect1_backgroundBlur_1873_1219"
        />
        <feBlend 
          mode="normal" 
          in="SourceGraphic" 
          in2="effect1_backgroundBlur_1873_1219" 
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgIcCreateButton;
