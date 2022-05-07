import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PersonList from '../components/PersonList.jsx';
import PersonForm from '../components/PersonForm.jsx';
import ItemForm from '../components/ItemForm.jsx';
import ItemList from '../components/ItemList.jsx';

export default function DetailsMain({ currentBillId, setCurrentBillId }) {
  const [currentBill, setCurrentBill] = useState({});
  const [items, setItems] = useState([]);
  const [personList, setPersonList] = useState([]);

  const { name } = currentBill;

  useEffect(() => {
    axios.get(`/bill/${currentBillId}`)
      .then((res) => {
        setCurrentBill(res.data.bill);
      });
  }, []);

  useEffect(() => {
    axios.get(`/bill/${currentBillId}/people`)
      .then((res) => {
        setPersonList(res.data.people);
      });
  }, personList);

  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          setCurrentBillId();
        }}
      >
        Back
      </button>
      <h1>{name}</h1>
      <ItemForm items={items} setItems={setItems} />
      <PersonForm currentBillId={currentBillId} setPersonList={setPersonList} />
      <ItemList items={items} setItems={setItems} personList={personList} />
      <PersonList personList={personList} />
    </div>
  );
}
