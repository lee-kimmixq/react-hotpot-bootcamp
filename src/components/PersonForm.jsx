import React, { useState } from 'react';
import axios from 'axios';

export default function PersonForm({ currentBillId, setPersonList }) {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const addPersonToBill = () => {
    axios.post('/people', { name, currentBillId })
      .then((res) => {
        setName('');
        setPersonList(res.data.people);
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
        <div className="col align-self-center">
          <button className="btn btn-primary" type="button" onClick={addPersonToBill}>Add Person</button>
        </div>
      </div>
    </form>
  );
}
