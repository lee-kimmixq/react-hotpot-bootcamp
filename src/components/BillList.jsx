import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function BillList({ setCurrentBill }) {
  const [billList, setBillList] = useState([]);

  useEffect(() => {
    axios.get('/bills')
      .then((res) => {
        const newBillList = res.data.bills.map(({ id, name, total }) => (
          <li key={id}>
            {name}
            {' '}
            {total}
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => { setCurrentBill(id); }}
            >
              Select
            </button>
          </li>
        ));
        setBillList(newBillList);
      });
  }, []);

  return <div><ul>{billList}</ul></div>;
}
