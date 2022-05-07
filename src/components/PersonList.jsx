import React from 'react';

export default function PersonList({ personList }) {
  const personListJsx = personList.map(({ id, name, amount }) => (
    <li key={id}>
      {name}
      {' '}
      -
      {' '}
      <b>
        $
        {amount}
      </b>
    </li>
  ));

  return (
    <div>
      <h3>Amount Owed Person List</h3>
      <div><ul>{personListJsx}</ul></div>
    </div>
  );
}
