import React, { useState } from "react";

export default function ImageComponent({ src, alt, properties }) {
  const [isLoaded, setLoaded] = useState(false);

  // console.log(isLoaded);
  const loadState = () => {
    setLoaded(true);
  };

  return (
    <>
      {/* <div
        className={`${
          isLoaded ? "!hidden" : "flex"
        } size-40  items-center justify-center`}
      >
        <div className="loading size-10  rounded-full p-1">
          <div className=" rounded-full w-full h-full bg-white"></div>
        </div>
      </div> */}

      {/* <img
        src={src}
        alt={alt}
        onLoad={loadState}
        className={`  ${properties} `}
      /> */}
    </>
  );
}
