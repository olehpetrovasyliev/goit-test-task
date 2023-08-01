import React from 'react';

const Filter = ({ func }) => {
  return (
    <select name="filter" defaultValue="all" onChange={func}>
      <option value="all">All</option>
      <option value="follow">Follow</option>

      <option value="followings">Followings</option>
    </select>
  );
};

export default Filter;
