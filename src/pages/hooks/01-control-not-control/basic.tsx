import WrapperWithTitle from '@/components/WrapperWithTitle';
import { useCallback, useRef, useState } from 'react';

/* 受控组件示例用法 */
const ControlInput: React.FC = () => {
  /* 注：此时 value 不能为 undefined */
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    console.log('e.target.value', e.target.value);
    setValue(e.target.value);
  }, []);

  return <input value={value} onChange={onChange} />;
};

/* 非受控组件使用 */
const UnControlInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onChange = useCallback((e) => {
    console.log('e.target.value', e.target.value);
  }, []);

  const getInstanceValue = () => {
    if (inputRef.current) {
      alert(inputRef.current.value);
    }
  };

  return (
    <div>
      <input ref={inputRef} onChange={onChange} defaultValue={'hello world'} />
      <button onClick={() => getInstanceValue()}>获取input中的值</button>
    </div>
  );
};

const AllInput: React.FC<any> = (props) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    console.log('e.target.value', e.target.value);
  }, []);

  return (
    <input value={value} onChange={onChange} defaultValue={'hello world'} />
  );
};

export default () => {
  return (
    <div>
      <WrapperWithTitle title="受控组件" component={<ControlInput />} />
      <WrapperWithTitle title="非受控组件" component={<UnControlInput />} />
      <WrapperWithTitle title="受控+非受控" component={<AllInput />} />
    </div>
  );
};
