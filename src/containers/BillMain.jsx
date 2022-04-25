import React from 'react';
import BillForm from '../components/BillForm.jsx';
import BillList from '../components/BillList.jsx';

export default function BillMain({ setCurrentBill }) {
  return (
    <div>
      <BillForm setCurrentBill={setCurrentBill} />
      <BillList setCurrentBill={setCurrentBill} />
    </div>
  );
}
