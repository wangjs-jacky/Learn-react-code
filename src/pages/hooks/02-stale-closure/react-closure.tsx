import { useEffect, useState } from 'react';

export default function Counter() {
  // 闭包变量
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(count);
      setCount(count + 1); // 错误的写法，依赖于过时的闭包
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>{count}</div>;
}
