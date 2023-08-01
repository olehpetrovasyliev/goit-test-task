import React from 'react';
import { Option, Select } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ func }) => {
  return (
    <Select name="filter" defaultValue="all" onChange={func}>
      <Option value="all">All</Option>
      <Option value="follow">Follow</Option>

      <Option value="followings">Followings</Option>
    </Select>
  );
};

export default Filter;

Filter.propTypes = {
  func: PropTypes.func,
};
