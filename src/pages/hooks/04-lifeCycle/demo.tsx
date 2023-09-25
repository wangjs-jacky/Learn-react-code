import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const useMount = (callback: () => void) => {
  useEffect(() => {
    // mount 阶段
    callback?.();
  }, []);
};

export const useLayoutMount = (callback: () => void) => {
  useLayoutEffect(() => {
    // mount 阶段
    callback?.();
  }, []);
};

const useUnmount = (callback: () => void) => {
  // 初始化执行
  const funRef = useRef(callback);

  // 每次函数执行
  funRef.current = callback;

  // 这里涉及闭包
  useEffect(
    () => () => {
      funRef.current?.();
    },
    [],
  );
};

const useLayoutUnmount = (callback: () => void) => {
  // 初始化执行
  const funRef = useRef(callback);

  // 每次函数执行
  funRef.current = callback;

  // 这里涉及闭包
  useLayoutEffect(
    () => () => {
      funRef.current?.();
    },
    [],
  );
};

export const useFirstMount = (callback: () => void) => {
  const isFirstMount = useRef(true);
  if (isFirstMount.current) {
    callback();
    isFirstMount.current = false;
  }
};

function TestComp() {
  useFirstMount(() => {
    console.log('useFirstMount-首次加载');
  });
  useMount(() => {
    console.log('useMount-首次加载');
  });
  useLayoutMount(() => {
    console.log('useLayoutMount-首次加载');
  });
  useUnmount(() => {
    console.log('useUnMount-组件卸载');
  });
  useLayoutUnmount(() => {
    console.log('useLayoutUnmount-组件卸载');
  });
  return 'Hello world';
}

const Demo: React.FC<any> = React.memo((props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setOpen(true)}>
        {'加载组件'}
      </button>
      <button type="button" onClick={() => setOpen(false)}>
        {'卸载组件'}
      </button>
      <div>{open && <TestComp />}</div>
    </div>
  );
});

export default Demo;
