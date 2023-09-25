import { useState } from 'react';
import { useCreation } from './useCreation';
import { useCreation as useCreation2 } from './useCreation-2';
import { useCreation as useCreation3 } from './useCreation-3';
import { useCreation as useCreation4 } from './useCreation-4';

class Foo {
  constructor() {
    this.data = Math.random();
  }
  data: number;
}

export default function () {
  const [count, setCount] = useState(0);

  const foo = useCreation(() => new Foo(), [count]);
  const foo2 = useCreation2(() => new Foo(), [count]);
  const foo3 = useCreation3(() => new Foo(), [count]);
  const foo4 = useCreation4(() => new Foo(), [count]);

  const [, setFlag] = useState({});
  return (
    <div>
      <p> useCreation1: {foo.data}</p>
      <p> useCreation2: {foo2?.data}</p>
      <p> useCreation3: {foo3?.data}</p>
      <p> useCreation4: {foo4?.data}</p>
      <button
        type="button"
        onClick={() => {
          setFlag({});
        }}
      >
        Rerender
      </button>
      <button onClick={() => setCount(count + 1)}>deps 变化</button>
    </div>
  );
}
