import React from "react";

const ExampleComponent = () => {
  const someFunction = () => {
    // インデントを1つ追加したい場合
    const value = 10;

    return (
      <div>
        <p>{value}</p>
      </div>
    );
  };

  return (
    <div>
      <button onClick={someFunction}>Click Me</button>
    </div>
  );
};

export default ExampleComponent;
