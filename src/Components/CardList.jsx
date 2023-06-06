// CardList.jsx
import React, { useState, useEffect } from "react";
import CardBox from "./CardBox";
import "./CardList.css";

const CardList = ({ input }) => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(input)
  );

  return (
    <div className='cards'>
      {filteredMonsters.map((item) => (
        <div key={item.id}>
          <CardBox item={item} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
