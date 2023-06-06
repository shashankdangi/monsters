import React from "react";
import "./CardBox.css";

const CardBox = ({ item }) => {
  return (
    <>
      <div className='card'>
        <img
          src={`https://robohash.org/${item.id}?set=set2&size=180x180`}
          alt={item.name}
        />
        <div className='info'>
          <h3>{item.name}</h3>
          <p>{item.email}</p>
        </div>
      </div>
    </>
  );
};

export default CardBox;
