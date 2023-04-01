import React, { createContext, useContext, useState } from "react";

/* 
    useContext() : Don gian hoa viec truyen du lieu 
    1. createContext()
    2. Provider

*/

/* 
    Component A > Component B > Component C 
*/
/* Truyền dữ liệu từ A sang C không cần qua props */
export default function HookUseContext() {
  const [mounted, setMounted] = useState(false);
  const handleMounting = () => {
    setMounted(!mounted);
  };
  return (
    <div>
      <h4>Hook useContext() </h4>
      <button onClick={handleMounting}>Mounting</button>
      {mounted && <ComponentA />}
    </div>
  );
}

const ColorContex = createContext();
const ComponentA = () => {
  const [color, setColor] = useState("blue");
  const toggleColor = () => {
    setColor(color === "blue" ? "red" : "blue");
  };
  return (
    <ColorContex.Provider value={color}>
      <div>
        <ComponentB color={color} />
        <button onClick={toggleColor}>Change color</button>
      </div>
    </ColorContex.Provider>
  );
};

const ComponentB = () => {
  return (
    <div>
      <ComponentC  />
    </div>
  );
};

const ComponentC = () => {
  const color = useContext(ColorContex);
  console.log(color);
  return (
    <div>
      <p className={color}>Component C</p>
    </div>
  );
};
