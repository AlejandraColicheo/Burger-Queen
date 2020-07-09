import React, { useState } from "react";
import "./stylesMenu.css";
import Data from "./Data";

export default function Menu() {
  const [DataType, setDataType] = useState("desayunos");
  const [selectedItems, setSelectedItems] = useState([]);
  const handleItemClick = item => {
  //console.log("handleItemClick", handleItemClick);

    setSelectedItems([...selectedItems, item]);
  };

  return (
    <div className="Container">
      <div className="Apps-Data">
        {Object.keys(Data).map(item => (
          <button className="newMenu-Data__type" onClick={() => setDataType(item)}>
            {item}
          </button>
        ))}
        <br />
        <br />
        {Data[DataType].map(item => (
          <div className="newMenu-Data__item" onClick={() => handleItemClick(item)}>
            {item.name} <span>${item.price}</span> <img alt="" src ={item.img} />
          </div>
        ))}
      </div>
      <div className="container">
					<div className="row">
						<div className="col-sm">
							<p> <i class="fas fa-concierge-bell"></i>Pedidos</p>
						</div>

					</div>
				</div>





    </div>
  );
}


// <img src ={item.img} />