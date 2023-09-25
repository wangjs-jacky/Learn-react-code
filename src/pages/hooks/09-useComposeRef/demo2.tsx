import React, { useRef } from 'react';

import { useComposeRef } from './useComposeRef';

const Demo: React.FC<any> = React.memo((props) => {
  const formRef1 = useRef<any>();
  const formRef2 = useRef<any>();

  const mergedRef = useComposeRef(formRef1, (node) => {
    console.log('node', node);
    formRef2.current = node;
  });

  return (
    <div>
      <div ref={mergedRef}>Hello World</div>
      <button
        type="button"
        onClick={() => {
          console.log('formRef1', formRef1.current);
          console.log('formRef2', formRef2.current);
        }}
      >
        获取 ref 对象
      </button>
    </div>
  );
});

export default Demo;
