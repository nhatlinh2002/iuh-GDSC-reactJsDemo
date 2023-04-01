import React, { useState } from "react";
/* 
  Hook useState :
- Tạo ra các giá trị state trong function component
- Component được re-render lại sau khi setState
- Initial Sate chỉ sử dụng cho lần đầu
- Initial State có thể là một callback, nó chỉ chạy 1 lần đầu tiên và duy nhất
*/
export default function HookUseState() {
  const [mounted, setMounted] = useState(false);
  const handleMounting = () => {
    setMounted(!mounted);
  };
  return (
    <div>
      <h4>Hook useState :</h4>
      <h4>const [state, setState] = useState(InitialState)</h4>
      <br />
      <button onClick={handleMounting}>Mounting</button>
      {mounted && <SpreadOperator />}
    </div>
  );
}
/* Tạo một State -> thực hiện thay đổi giá trị với event onClick */
const Example = () => {
  const [state, setSate] = useState(1);
  const handleChange = () => {
    setSate(2);
    console.log("Action...");
  };
  console.log("render...");
  return (
    <div>
      <h4>State : {state}</h4>
      <button onClick={handleChange}>Change</button>
    </div>
  );
};

/* Tăng dần giá trị State sau mỗi lần click, bắt đầu từ 1 */
const CountDemo = () => {
  const [count, setCount] = useState(1);
  const handleIncrease = () => {
    setCount((preSate) => preSate + 1);
    console.log("Action...");
  };
  console.log("re-render");
  return (
    <div>
      <h2>Counter : {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
};

/* Nạp thêm 1 trường dữ liệu cho State thay vì thay thế hoàn toàn */
const SpreadOperator = () => {
  const [state, setState] = useState({ name: "Nhat Linh", age: "12" });

  const handleClick = (e) => {
    setState((preState) => ({...preState, scholl:"IUH"}))
    console.log("Action...");
  };
  console.log("re-render...");
  return (
    <div>
      <h4>{JSON.stringify(state)}</h4>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};
