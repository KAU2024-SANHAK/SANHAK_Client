const SvgIcDairtFeeling = (props)=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="92" viewBox="0 0 96 92" fill={props.color}>
        <g filter="url(#filter0_b_464_1077)">
            <path d="M12.683 15.39C18.0543 5.87034 28.178 0.0253832 39.1079 0.133559L56.0908 0.301642C66.7023 0.406666 76.4687 6.10994 81.7747 15.3002L91.0073 31.2915C96.3133 40.4817 96.3693 51.7913 91.1545 61.0336L82.8086 75.8253C77.4373 85.345 67.3136 91.1899 56.3837 91.0818L39.4008 90.9137C28.7893 90.8086 19.0229 85.1054 13.7169 75.9151L4.48429 59.9238C-0.821697 50.7336 -0.877665 39.424 4.3371 30.1817L12.683 15.39Z" fill="white" fill-opacity="0.5"/>
            <text  x = '27' y = '53' fontSize="20" fill="black">{props.text}</text>
        </g>
        <defs>
            <filter id="filter0_b_464_1077" x="-29.5349" y="-29.8677" width="154.561" height="150.951" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="15"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_464_1077"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_464_1077" result="shape"/>
            </filter>
        </defs>
    </svg>
);
export default SvgIcDairtFeeling;
