import React from 'react';

const Button = ({ func, text }) => {
  return (
    <button type="button" onClick={func}>
      {text}
    </button>
  );
};

export default Button;
