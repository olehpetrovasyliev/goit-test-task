import React from 'react';

const Filter = () => {
  // const dispatch = useDispatch();
  return (
    <select name="filter" defaultValue="all">
      <option value="all">All</option>
      <option value="follow">Follow</option>

      <option value="followings">Followings</option>
    </select>
  );
};

export default Filter;
