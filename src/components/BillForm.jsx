import React, { useState } from 'react';
import axios from 'axios';

export default function BillForm({ setCurrentBill }) {
  const [name, setName] = useState('');
  const [total, setTotal] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTotalChange = (e) => {
    if (e.target.value.match(/^[0-9]*\.?[0-9]{0,2}$/)) {
      setTotal(Number(e.target.value));
    }
  };

  const createNewBill = () => {
    axios.post('/bill', { name, total })
      .then((res) => {
        setName('');
        setTotal('');
        setCurrentBill(res.data.newBill.id);
      });
  };

  return (
    <form>
      <div className="row g-2">
        <div className="col">
          <div className="form-floating">
            <input
              className="form-control"
              type="text"
              onChange={handleNameChange}
              placeholder="Name"
              value={name}
              id="name"
              name="name"
            />
            <label htmlFor="name">Name</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input
              className="form-control"
              type="text"
              onChange={handleTotalChange}
              placeholder="Total"
              value={total}
              id="total"
              name="total"
            />
            <label htmlFor="total">Total</label>
          </div>
        </div>
        <div className="col align-self-center">
          <button className="btn btn-primary" type="button" onClick={createNewBill}>Create New Bill</button>
        </div>
      </div>
    </form>
  );
}
