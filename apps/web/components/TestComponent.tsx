import React, { useState } from 'react';

interface TestComponentProps {
  title: string;
}

export const TestComponent: React.FC<TestComponentProps> = ({ title }) => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
