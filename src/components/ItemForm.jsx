import React, { useState } from 'react';

export default function ItemForm({ items, setItems }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    if (e.target.value.match(/^[0-9]*\.?[0-9]{0,2}$/)) {
      setPrice(Number(e.target.value));
    }
  };

  const addItem = () => {
    const newItem = {
      name,
      price,
      people: [],
    };
    const currentItems = [...items, newItem];
    setName('');
    setPrice('');
    setItems(currentItems);
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
              onChange={handlePriceChange}
              placeholder="price"
              value={price}
              id="price"
              name="price"
            />
            <label htmlFor="price">Price</label>
          </div>
        </div>
        <div className="col align-self-center">
          <button className="btn btn-primary" type="button" onClick={addItem}>Add Item</button>
        </div>
      </div>
    </form>
  );
}
