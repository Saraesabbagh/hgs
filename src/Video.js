import React from "react";
import YouTube from "react-youtube";

const VideoComponent = () => {
  const videoId = "3OWWv8_17sE"; // Replace this with the video ID from the YouTube URL
  const startSeconds = 1;
  const opts = {
    height: "500px",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1, // Auto-play the video
      mute: 1, // Mute the video
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default VideoComponent;
