import React, { useEffect, useState } from "react";
import { HotKeys } from "react-hotkeys";

const Onebox = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      setData(result.data);
    };
    fetchData();
  }, [token]);

  const keyMap = {
    DELETE: "d",
    REPLY: "r"
  };

  const handlers = {
    DELETE: () => console.log("Delete action"),
    REPLY: () => console.log("Reply action")
  };

  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      {/* Render your onebox data here */}
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </HotKeys>
  );
};

export default Onebox;
