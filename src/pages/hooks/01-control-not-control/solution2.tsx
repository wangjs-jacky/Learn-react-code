import WrapperWithTitle from "@/components/WrapperWithTitle";
import { useMergedState } from "rc-util";
import React from "react";
import { ChangeEvent, useState } from "react";

/* 同时兼容： defaultValue + value + onChange 属性 */
const Input = React.memo((props: any) => {
  const {
    /* controlled attribute*/
    value,
    /* uncontrolled attributes */
    defaultValue,
    onChange,
    ...rest
  } = props;

  /* 使用自定义钩子 useMergeState */
  const [innerValue, setInnerValue] = useMergedState("defaultValue", {
    value,
    onChange,
    defaultValue,
  });

  /* 更新内部变量 */
  const _onChange = (e) => {
    setInnerValue(e.target.value);
  };

  return <input value={innerValue} onChange={_onChange} />;
});

const Demo = () => {
  const [state, setState] = useState("2");

  const onChange = (v: string) => {
    setState(v);
  };

  return (
    <>
      <WrapperWithTitle
        title="非受控模式：只传入 defaultValue"
        component={
          <Input
            onChange={(e) => {
              console.log("非受控内部状态", e);
            }}
            defaultValue={"hello world"}
          />
        }
      />
      <WrapperWithTitle
        title="受控模式：只传入 value"
        component={<Input onChange={onChange} value={state} />}
      />
      <WrapperWithTitle
        title="受控模式：同时传入 value 和 defaultValue"
        component={
          <Input
            value={state}
            onChange={onChange}
            defaultValue={"hello world"}
          />
        }
      />
    </>
  );
};

export default Demo;
