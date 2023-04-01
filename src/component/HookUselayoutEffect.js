import React from "react";
import { useState, useLayoutEffect } from "react";

/*
    useLayoutEffect :
    1. Cập nhật lại state
    2. Cập nhật lại DOM (mutated : đột biến)
    3. Gọi lại clearUp nếu deps thay đổi (sync)
    4. Gọi useLayoutEffect callback (sync)
    5. re-Render lại UI
*/

function HookUselayoutEffect() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    if (count > 5) setCount(0);
  }, [count]);
  const handleCount = () => {
    setCount((pre) => pre + 1);
  };
  return (
    <div>
      {count}
      <br />
      <button onClick={handleCount}>Run</button>
    </div>
  );
}
export default HookUselayoutEffect;
