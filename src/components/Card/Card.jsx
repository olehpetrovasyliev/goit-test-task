import React from 'react';

const Card = ({ user }) => {
  return (
    <li>
      <div>
        {/* <picture srcset></picture> */}
        <img src="./../../../assets/card_picture_1x.png" alt="decoration" />
      </div>
      <span>{/* <img src={user.avatar} alt="avatar" /> */}</span>
      <div>
        <ul>
          <li>{user.tweets} tweets</li>
          <li>{user.followers} followers</li>
        </ul>
        <button></button>
      </div>
    </li>
  );
};

export default Card;
