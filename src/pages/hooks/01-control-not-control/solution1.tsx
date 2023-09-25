import WrapperWithTitle from "@/components/WrapperWithTitle";
import React, { useLayoutEffect, useRef } from "react";
import { ChangeEvent, useEffect, useState } from "react";

const useEffectUpdate: typeof React.useEffect = (callback, deps) => {
  const isFirstMountRef = useRef(true);

  useEffect(() => {
    if (!isFirstMountRef.current) {
      return callback();
    }
  }, deps);

  useEffect(() => {
    isFirstMountRef.current = false;

    return () => {
      isFirstMountRef.current = true;
    };
  }, []);
};

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

  /**
   * 初始化：维护内部 innerValue 状态，input 采用完全受控模式
   */
  const [innerValue, setInnerValue] = useState(() => {
    if (typeof value !== "undefined") {
      return value;
    } else {
      // 当 value 为 undefined 时，返回 defaultValue 值
      return defaultValue;
    }
  });

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    /* 非受控状态维护：当 onChange 发生改变时，需更新内部状态 */
    if (typeof value === "undefined") {
      setInnerValue(inputValue);
    }
    onChange && onChange(e);
  };

  /* 受控状态维护：当 props.value 改变时，需更新内部状态 */
  useEffectUpdate(() => {
    setInnerValue(value);
  }, [value]);

  /* 保证最后的状态始终受控 */
  function fixControlledValue<T>(value: T): string {
    if (typeof value === "undefined" || value === null) {
      return "";
    }
    return String(value);
  }

  /* 改造思路：完全采用受控模式 */
  return (
    <input
      value={fixControlledValue(innerValue)}
      onChange={_onChange}
      {...rest}
    />
  );
});

const Demo = () => {
  const [state, setState] = useState("2");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setState(value);
  };

  return (
    <>
      <WrapperWithTitle
        title="非受控模式：只传入 defaultValue"
        component={
          <Input
            onChange={(e) => {
              console.log("非受控内部状态", e.target.value);
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
