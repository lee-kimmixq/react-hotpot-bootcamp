import React from 'react';

export default function ItemList({ items, setItems, personList }) {
  const personOptionList = personList.map(({ name }) => <option value={name}>{name}</option>);

  const addPersonToItem = (idxToChange, person) => {
    if (items[idxToChange].people.includes(person)) return;
    const newItem = { ...items[idxToChange], people: [...items[idxToChange].people, person] };
    const newItemsList = items.map((item, idx) => {
      if (idx === idxToChange) return newItem;
      return item;
    });
    setItems(newItemsList);
  };

  const formatPrice = (price) => price.toFixed(2);

  const itemsList = items.map(({ name, price, people }, index) => {
    let currentPerson = personList[0].name;

    return (
      <div>
        <h5>
          {name}
          {' '}
          -
          {' '}
          $
          {price}
        </h5>

        <form>
          <select name="person" onChange={(e) => { currentPerson = e.target.value; }}>
            {personOptionList}
          </select>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => { console.log(currentPerson);
              addPersonToItem(index, currentPerson); }}
          >
            Add Person
          </button>
        </form>

        <ul>
          {people.map((el) => (
            <li key={el}>
              {el}
              {' '}
              (+$
              {formatPrice(price / people.length)}
              )
            </li>
          ))}
        </ul>

        <hr />
      </div>
    ); });

  return (
    <div>
      <h3>Item List</h3>
      <div>{itemsList}</div>
    </div>
  );
}
