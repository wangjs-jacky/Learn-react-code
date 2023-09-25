import { useEffect, useState } from "react";
import { useRef } from "react";

export function useCreation<T>(callback: () => T, deps: any[]) {
  // 缓存 函数返回值;
  const objRef = useRef<T | undefined>();

  // 标志位
  const [, refresh] = useState({});

  useEffect(() => {
    objRef.current = callback();
    refresh({});
  }, deps);

  return objRef.current;
}
