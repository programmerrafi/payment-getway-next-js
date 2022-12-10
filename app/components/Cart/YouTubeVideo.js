import React from "react";
import YouTube from "react-youtube";

const YouTubeVideo = () => {
  // https://www.youtube.com/watch?v=sTz__zyOhds
  // console.log(event.target);

  const opts = {
    height: "515",
    width: "800",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <YouTube
        videoId="sTz__zyOhds"
        opts={opts}
        onReady={(event) => event.target.pauseVideo()}
      />
      ;
    </div>
  );
};

export default YouTubeVideo;
