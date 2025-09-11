import React from 'react';
import Thumbnail from './component/Thumbnail';
import LikeButton from './component/LikeButton';

type VideoType = {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
};

type VideoProps = {
  video: VideoType;
};

const Video: React.FC<VideoProps> = ({ video }) => {
  if (!video) return null;

  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url} target="_blank" rel="noopener noreferrer">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
};

export default Video;
