import React from 'react';

import PersonForm from '../components/PersonForm.jsx';
import ItemForm from '../components/ItemForm.jsx';

export default function DetailsFormContainer({
  currentBillId, items, setItems, setPersonList,
}) {
  return (
    <div className="container">
      <ItemForm items={items} setItems={setItems} />
      <PersonForm currentBillId={currentBillId} setPersonList={setPersonList} />
    </div>
  );
}
