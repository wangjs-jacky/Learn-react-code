import { useEffect, useState } from 'react';

const Child = () => {
  const [value, setValue] = useState<string>();

  console.log('value', value);

  useEffect(() => {
    setTimeout(() => {
      setValue('data loaded from server');
    }, 1000);
  }, []);

  const text = value || 'Loading...';

  return <div>{text}</div>;
};

export default () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button type="button" onClick={() => setVisible(false)}>
        Unmount
      </button>
      {visible && <Child />}
    </div>
  );
};
