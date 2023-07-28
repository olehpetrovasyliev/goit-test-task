import FollowingButton from 'components/FollowingButton/FollowingButton';
import React from 'react';

const Card = ({ user }) => {
  return (
    <li
    //   key={user.id}
    >
      <div>
        {/* <picture srcset></picture> */}
        <img src="../../img/card_picture_1x.png" alt="decoration" />
      </div>
      <span>{/* <img src={user.avatar} alt="avatar" /> */}</span>
      <div>
        <ul>
          {/* <li>{user.tweets} tweets</li>
          <li>{user.followers} followers</li> */}
        </ul>
        <FollowingButton />
      </div>
    </li>
  );
};

export default Card;
