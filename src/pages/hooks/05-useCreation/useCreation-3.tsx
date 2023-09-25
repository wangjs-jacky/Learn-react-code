import { useLayoutEffect, useRef } from 'react';
import { useFirstMount } from '../04-lifeCycle/demo';
import { depsAreSame } from './useCreation';

const useFisrtUpdate = (callback: any) => {
  const isFirstMount = useRef(true);
  if (isFirstMount.current) {
    isFirstMount.current = false;
  } else {
    callback();
  }
};

const useUpdateLayoutEffect = (callback: any) => {
  const isFirstMount = useRef(true);

  useLayoutEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
    } else {
      callback();
    }
  });
};

export function useCreation<T>(callback: () => T, deps: any[]) {
  // 缓存 函数返回值;
  const objRef = useRef<T | undefined>();

  // 初始化 deps
  const depsRef = useRef(deps);

  /* 首次加载 */
  useFirstMount(() => {
    objRef.current = callback();
  });

  /* 更新阶段 */
  useFisrtUpdate(() => {
    if (!depsAreSame(depsRef.current, deps)) {
      // 更新 deps 依赖
      depsRef.current = deps;
      objRef.current = callback();
    }
  });

  return objRef.current;
}
