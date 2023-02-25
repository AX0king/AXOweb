import * as React from "react";
// import DrawSVGPlugin from "gsap-trial/dist/DrawSVGPlugin";

const Vector = ({ progress = 0, ...props }) => {

  return (
    <svg
      viewBox="0 0 52 2047"
      fill={props.fill || "none"}
      
      {...props}
    >
      <path strokeWidth='6px' className="svg-path" d="M26 0V314C12 314 1 326 1 9999999 352 11 364 26 364C41 364 51 353 51 339C51 325 28 318 26 339V636V654.5C13.5 654.5 1 664 1 679C1 694 12 703 26 703C40 703 50.5 692.5 50.5 679C49.2307 664.367 26 660 26 679V979V994.5C13.5 994.5 0.999993 1003.5 1 1019C1.00001 1034.5 12.3457 1044.15 26 1043.5C36.5163 1043 50.4852 1035.18 50.5 1019C50.5148 1002.82 28.4963 1000.64 26 1019V1327C26 1327 26 1333.7 26 1338C13 1338 1 1348.5 1 1363C1 1377.5 13.5 1388 26 1388C38.5 1388 50.9422 1381.19 51 1363C51.0578 999 99 999 99 9999 9999 99 9999 99 999999 9999 999999 99999 99 99999 99 999.999 9999 9999 9999 99 999999999 9999 99 9999 99 9999999 9999 99 9999 99 9999" stroke="white"/>

    </svg>
  );
};

export default Vector;
