import React from 'react';

type ThumbnailProps = {
  video: {
    title: string;
    url: string;
    thumbnailUrl: string;
  };
};

const Thumbnail: React.FC<ThumbnailProps> = ({ video }) => {
  return (
    <img
      src={video.thumbnailUrl}
      alt={video.title}
      style={{ width: '200px', height: '120px', objectFit: 'cover', borderRadius: '8px' }}
    />
  );
};

export default Thumbnail;
