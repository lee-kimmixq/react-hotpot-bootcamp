import React, { useState } from 'react';

import BillMain from './containers/BillMain.jsx';
import DetailsMain from './containers/DetailsMain.jsx';

export default function App() {
  const [currentBillId, setCurrentBillId] = useState();

  return (
    <div className="container">
      {!currentBillId && <BillMain setCurrentBillId={setCurrentBillId} />}
      {currentBillId
      && <DetailsMain currentBillId={currentBillId} setCurrentBillId={setCurrentBillId} />}
    </div>
  );
}
