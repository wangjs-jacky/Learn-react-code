import { useEffect, useRef } from "react";

type Subscription<T> = (val: T) => void;

export class EventEmitter<T> {
  // 采用Set存储订阅回调
  private subscriptions = new Set<Subscription<T>>();

  // 遍历回调函数
  emit = (val: T) => {
    for (const subscription of this.subscriptions) {
      subscription(val);
    }
  };

  /* 自定义 Hooks 可以定义在 Class 结构上 */
  useSubscription = (callback: Subscription<T>) => {
    const callbackRef = useRef<Subscription<T>>();
    callbackRef.current = callback;
    useEffect(() => {
      // 订阅
      function subscription(val: T) {
        if (callbackRef.current) {
          callbackRef.current(val);
        }
      }
      /* 类似：触发 on 事件 */
      this.subscriptions.add(subscription);
      return () => {
        /* 类似：触发 emit 事件 */
        this.subscriptions.delete(subscription);
      };
    }, []);
  };
}

/* 单例模式写法 */
export default function useEventEmitter<T = void>() {
  const ref = useRef<EventEmitter<T>>();
  if (!ref.current) {
    ref.current = new EventEmitter();
  }
  return ref.current;
}
