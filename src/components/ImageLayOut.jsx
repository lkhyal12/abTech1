import { X } from "lucide-react";
import React from "react";

const ImageLayOut = ({ setLayoutImg, layoutImg }) => {
  console.log({ layoutImg });

  if (!layoutImg) return null;
  return (
    <div className="fixed inset-0 bg-black/90 z-999">
      <div className="pt-10 fixed top-10% right-10">
        <X
          color="white"
          className="cursor-pointer"
          size={30}
          onClick={() => setLayoutImg(null)}
        />
      </div>
      <div
        className={`w-full h-full max-sm:p-4 flex items-center justify-center `}
      >
        <img
          src={layoutImg}
          alt="layout image"
          className="w-full sm:w-9/10 md:w-4/5 lg:2/3"
        />
      </div>
    </div>
  );
};

export default ImageLayOut;
