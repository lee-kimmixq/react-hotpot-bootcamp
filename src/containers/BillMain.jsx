import React from 'react';
import BillForm from '../components/BillForm.jsx';
import BillList from '../components/BillList.jsx';

export default function BillMain({ setCurrentBillId }) {
  return (
    <div>
      <BillForm setCurrentBillId={setCurrentBillId} />
      <BillList setCurrentBillId={setCurrentBillId} />
    </div>
  );
}
