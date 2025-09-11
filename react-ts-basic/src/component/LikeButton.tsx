import React, { useState } from 'react';

type LikeButtonProps = {
  video: {
    id: string;
    title: string;
  };
};

const LikeButton: React.FC<LikeButtonProps> = ({ video }) => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      style={{
        padding: '6px 12px',
        marginTop: '8px',
        backgroundColor: liked ? 'red' : '#ccc',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      {liked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;
