import { useRef } from "react";

// 通过 Object.is 比较依赖数组的值是否相等
export function depsAreSame(
  oldDeps: DependencyList,
  deps: DependencyList,
): boolean {
  if (oldDeps === deps) return true;
  for (let i = 0; i < oldDeps.length; i++) {
    if (!Object.is(oldDeps[i], deps[i])) return false;
  }
  return true;
}

export function useCreation<T>(factory: () => T, deps: DependencyList) {
  const { current } = useRef({
    deps,
    obj: undefined as undefined | T,
    initialized: false,
  });
  // 初始化或依赖变更时，重新初始化
  if (current.initialized === false || !depsAreSame(current.deps, deps)) {
    current.deps = deps; // 更新依赖
    current.obj = factory(); // 执行创建所需对象的函数
    current.initialized = true; // 初始化标识为 true
  }
  return current.obj as T;
}
