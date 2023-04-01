import { useEffect, useState } from "react";

const InputValidation = () => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input.length < 5 || /\d/.test(input)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [input]);

  return (
    <div>
      <form>
        <label>More than 5 non numerical characters </label>
        <br />
        <input
          type="text"
          onChange={inputHandler}
          style={{width:400}}
        />
      </form>
      <p>
        <span
          style={
            isValid ? { color:"green" }: { color: "red" }
          }
        >
          {isValid ? "Valid input" : "Input not valid"}
        </span>
      </p>
    </div>
  );
};

export default InputValidation;
