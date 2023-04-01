import React, {useState } from "react";

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
  }
  return (
    <div>
      <h4>Hook useContext() </h4>
      <button onClick={handleMounting}>Mounting</button>
      {mounted && <ComponentA />}
    </div>
  );
}

const ComponentA = () => {
  const [color, setColor] = useState("blue");
  const toggleColor = () => {
    setColor(color === "blue" ? "red" : "blue");
  };
  return (
    <div>
      <ComponentB color={color} />
      <button onClick={toggleColor}>Change color</button>
    </div>
  );
};

const ComponentB = ({color}) => {
  return (
    <div>
      <ComponentC color = {color}/>
    </div>
  );
};

const ComponentC = ({color}) => {
  console.log(color);
  return (
    <div>
      <p className={color}>Component C</p>
    </div>
  );
};
