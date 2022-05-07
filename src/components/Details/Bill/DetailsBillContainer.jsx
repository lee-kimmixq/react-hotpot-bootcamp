import React from 'react';

import PersonList from '../components/PersonList.jsx';
import ItemList from '../components/ItemList.jsx';

export default function DetailsBillContainer({ items, setItems, personList }) {
  return (
    <div className="container">
      <ItemList items={items} setItems={setItems} personList={personList} />
      <PersonList personList={personList} />
    </div>
  );
}
