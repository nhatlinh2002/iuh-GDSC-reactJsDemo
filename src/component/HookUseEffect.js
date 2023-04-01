import React, { useEffect, useState } from "react";

/* 
  Hook useEffect : 
  ** dac diem chung : callback se luon duoc goi khi compoent mounted
  1. useEffect(callback):
  - callback se duoc goi khi:
    + component re-render
    + component them element vao DOM
  2. useEffect(callback,[]) :
  - callback chi goi 1 lan sau khi component mounted
  3. useEffect(callback,[deps]):
  - callback se duoc goi khi dependencies thay doi
  
  **Cleanup function luon duoc goi truoc khi component unmounted
  **Cleanup function luon duoc goi truoc khi callback duoc goi(tru lan mounted)
*/

export default function HookUseEffect() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  }
  return (
    <div>
      <button onClick={handleShow}>Show</button>
      {show && <UpdateDom />}
    </div>
  );
};


/* Theo dõi các thay đổi của phần tử DOM  */
const UpdateDom = () => {
  const [textInput, setTextInput] = useState("");
  const [textOuput, setTextOutput] = useState("");

  const handleChange = (event) => {
    /*  */
  } 

  useEffect(() => {
    /* ... */
    console.log("Action...");
  });
  console.log("render");
  return (
    <div>
      <h4>Text : {textOuput}</h4>
      <input 
        type="text" 
        value={textInput}
        onChange={handleChange}
      />
    </div>
  )
};

/* Bài toán xử lý timer function tự động tăng dần */
const TimerFunction = () => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    const countId = setInterval(() => {
      setCount((preState)=> preState+1);
      console.log("counting...");
    }, 1000);

    return () => clearInterval(countId);
  },[]);
  console.log("re-render...");
  return (
    <div>
      <h4>Count : {count}</h4>
    </div>
  )
}