import { useMergedState } from "rc-util";
import { useState } from "react";

const FC = ({ value, defaultValue, onChange }) => {
  const [val, setVal] = useMergedState("jacky", {
    value,
    defaultValue,
    onChange,
  });
  return (
    <>
      <input
        value={val}
        onChange={(e) => {
          console.log("e", e.target.value);
          setVal(e.target.value);
        }}
      />
      <span className="txt">{val}</span>
    </>
  );
};

export default () => {
  const [value, setValue] = useState(undefined);
  const onChange = (e) => {
    setValue(e);
  };
  return <FC value={value} onChange={onchange} />;
};
