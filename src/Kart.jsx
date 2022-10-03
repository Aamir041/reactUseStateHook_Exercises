import { useState } from "react";
export function Kart(props) {
  const [kartItems, setKart] = useState({});

  const addItems = (item) => {
    setKart((obj) =>
      obj[item] ? { ...obj, [item]: obj[item] + 1 } : { ...obj, [item]: 1 }
    );
  };

  return (
    <div>
      <h1>Ex7: Kart</h1>
      <div className="Question kart">
        <div className="item">
          <h3>Select items for your kart</h3>
          <ul className="itemList">
            <li className="items">
              <button onClick={() => addItems("Shirt")}>Add a Shirt</button>
            </li>
            <li className="items">
              <button onClick={() => addItems("Pant")}>Add a Pant</button>
            </li>
            <li className="items">
              <button onClick={() => addItems("Kurta")}>Add a Kurta</button>
            </li>
            <li className="items">
              <button onClick={() => addItems("Sherwani")}>
                Add a Sherwani
              </button>
            </li>
            <li className="items">
              <button onClick={() => addItems("Socks")}>Add a Socks</button>
            </li>
          </ul>
        </div>
        <div className="takenItems">
          <h3>Your Items</h3>
          {Object.keys(kartItems).map((key) => (
            <h4>
              {key}: {kartItems[key]}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
}
