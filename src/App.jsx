import React, { useState } from 'react';

import BillMain from './containers/BillMain.jsx';
import ItemMain from './containers/ItemMain.jsx';

export default function App() {
  const [currentBill, setCurrentBill] = useState();

  return (
    <div className="container">
      {!currentBill && <BillMain setCurrentBill={setCurrentBill} />}
      {currentBill && <ItemMain setCurrentBill={setCurrentBill} />}
    </div>
  );
}
