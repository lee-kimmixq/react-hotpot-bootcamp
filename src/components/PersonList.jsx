import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PersonList({ currentBillId }) {
  const [personList, setPersonList] = useState([]);

  useEffect(() => {
    axios.get(`/bill/${currentBillId}/people`)
      .then((res) => {
        const newPersonList = res.data.people.map(({ id, name, amount }) => (
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
        setPersonList(newPersonList);
      });
  }, []);

  return (
    <div>
      <h3>Amount Owed Person List</h3>
      <div><ul>{personList}</ul></div>
    </div>
  );
}
