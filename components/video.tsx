import React from "react";

const Video = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 justify-center align-middle items-center mt-10 gap-5 mx-7">
      <video id="introVideo" width="600" controls>
        <source src="/intro.mp4" type="video/mp4" />
      </video>
      <video id="animation-uk" width={600} controls>
        <source src="/animation.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
