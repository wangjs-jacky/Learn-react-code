import React, { useCallback, useState } from 'react';
import { useEvent } from './useEvent';

const Demo: React.FC<any> = React.memo((props) => {
  /* 环境变量 */
  const [count, setCount] = useState(0);

  const onClick = useCallback(() => {
    alert(count);
  }, []);

  const onClick2 = useCallback(() => {
    alert(count);
  }, [count]);

  const onClick3 = useEvent(() => {
    alert(count);
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count+1</button>
      <p>{count}</p>
      <button onClick={onClick}>闭包现象</button>
      <button onClick={onClick2}>useCallback 依赖数组</button>
      <button onClick={onClick3}>useEvent</button>
    </div>
  );
});

export default Demo;
