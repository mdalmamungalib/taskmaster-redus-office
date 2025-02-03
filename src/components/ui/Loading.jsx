import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <DotLottieReact
        src="https://lottie.host/f9d51bb5-c3c9-4ba1-bfb3-2a4ba15ed7a6/q0cfvFTVJO.lottie"
        loop
        autoplay
        className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:max-w-48 xl:max-h-48" // Prevents oversizing
      />
    </div>
  );
};

export default Loading;
