import React, { PropTypes } from 'react';

const Repo = ({ item }) => (
    <li>
        <a href={item.html_url}>{item.name}</a> {item.private ? 'private' : ''}
    </li>
);

Repo.propTypes = {
  item: PropTypes.object
};

export default Repo;
