import { useReducer } from "react";

function HookUseReducer() {
  // create initState
  const initState = 0;

  // create Actions
  const UP_ACTION = "up";
  const DOWN_ACTION = "down";

  // create Reducer
  const reducer = (state, action) => {
    switch (action) {
      case UP_ACTION: {
        return state + 1;
      }
      case DOWN_ACTION: {
        return state - 1;
      }
      default:
        throw new Error("Error");
    }
  };
  // useReducer
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <h1>useReducer</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(DOWN_ACTION)}>down</button>
      <button onClick={() => dispatch(UP_ACTION)}>up</button>
    </div>
  );
}

export default HookUseReducer;