import { useState } from "react";

export default function Counter() {
  const [number, setnumber] = useState(0);

  console.log(useState);

  function handleAdd() {
    setnumber((number) => number + 1);
  }

  function handleSub() {
    setnumber((number) => number - 1);
  }

  function handlereset() {
    if (number === 0) return <p>At level zero</p>;
    setnumber(0);
  }

  return (
    <div>
      {number < 1
        ? `At level zero`
        : number === 6
        ? ` Its my birthday`
        : `${number}`}
      <button className="adds" onClick={handleAdd}>
        Add
      </button>
      <button className="subs" onClick={handleSub}>
        Subtract
      </button>
      <button className="subs" onClick={handlereset}>
        Reset
      </button>
    </div>
  );
}
