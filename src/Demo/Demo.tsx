import React, { useState } from "react";

interface Props {
  text: string;
}

interface UserData {
  id: number;
  name: string;
}

const Demo: React.FC<Props> = (props) => {
  const [count, setCount] = useState<string | null>(null);
  const [user, setUser] = useState<UserData>({ id: 1, name: "yuta" });
  const [inputData, setInputData] = useState("");

  const handleInputVaue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  return (
    <>
      <h1>{props.text}</h1>
      <h1>{count}</h1>
      <button>count Up</button>
      <h1>{user.name}</h1>

      <input type="text" value={inputData} onChange={handleInputVaue} />
      <h2>{inputData}</h2>
    </>
  );
};

export default Demo;
