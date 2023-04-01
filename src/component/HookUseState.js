import React, { useState } from "react";
/* 
  Hook useState :
- Dữ liệu thay đổi - giao diện thay đổi
- Component được re-render lại sau khi setState
- Initial Sate chỉ sử dụng cho lần đầu
- Initial State có thể là một callback, nó chỉ chạy 1 lần đầu tiên và duy nhất
*/
export default function HookUseState() {
  const [mounted, setMounted] = useState(false);
  const handleMounting = () => {
    setMounted(!mounted);
  }
  return (
    <div>
      <h4>Hook useState :</h4>
      <h4>const [state, setState] = useState(InitialState)</h4>
      <br />
      <button onClick={handleMounting}>Mounting</button>
      {mounted && <Example />}
    </div>
  );
}
/* Tạo một State -> thực hiện thay đổi giá trị với event onClick */
const Example = () => {
  /*  */
  const handleChange = () => {
    /* ... */
    console.log("Action...");
  };
  console.log("render...");
  return (
    <div>
      <h4>State : {}</h4>
      <button onClick={handleChange}>Change</button>
    </div>
  );
};

/* Tăng dần giá trị State sau mỗi lần click, bắt đầu từ 1 */
const CountDemo = () => {
  
  const handleIncrease = () => {
    /* ... */
    console.log("Action...");
  };
  console.log("re-render");
  return (
    <div>
      <h2>Counter : {}</h2>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
};

/* Nạp thêm 1 trường dữ liệu cho State thay vì thay thế hoàn toàn */
const SpreadOperator = () => {
  const [state, setState] = useState({name: "Nhat Linh", age:"12"});

  const handleClick = (e) => {
    /* ... */
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
