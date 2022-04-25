import React, { useState } from 'react';

import BillMain from './containers/BillMain.jsx';
import ItemMain from './containers/ItemMain.jsx';

export default function App() {
  const [currentBillId, setCurrentBillId] = useState();

  return (
    <div className="container">
      {!currentBillId && <BillMain setCurrentBillId={setCurrentBillId} />}
      {currentBillId
      && <ItemMain currentBillId={currentBillId} setCurrentBillId={setCurrentBillId} />}
    </div>
  );
}
