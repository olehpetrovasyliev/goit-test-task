import React from 'react';

const FollowingButton = ({ func, text }) => {
  return (
    <button type="button" onClick={func}>
      {text}
    </button>
  );
};

export default FollowingButton;
