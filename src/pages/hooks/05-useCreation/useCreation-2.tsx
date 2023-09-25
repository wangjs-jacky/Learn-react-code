import React from "react";
import { useRef } from "react";
import { depsAreSame } from "./useCreation";

export function useCreation<T>(callback: () => T, deps: any[]) {
  // 缓存 函数返回值;
  const objRef = useRef<T | undefined>();
  // 是否首次加载
  const firstMountRef = React.useRef(true);
  // 初始化 deps
  const depsRef = useRef(deps);

  /* 首次加载 */
  if (firstMountRef.current) {
    // 初始化结束后
    firstMountRef.current = false;
    // 由于 useRef(()=> callback()) 不支持函数初始化赋值。
    objRef.current = callback();
  }

  /* 更新阶段 */
  if (!firstMountRef.current && !depsAreSame(depsRef.current, deps)) {
    // 更新 deps 依赖
    depsRef.current = deps;
    objRef.current = callback();
  }

  return objRef.current;
}
