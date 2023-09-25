import { useCallback, useRef } from "react";

export const useEvent = (callback: any) => {
  const callbackFn = useRef<any>();
  callbackFn.current = callback;

  return useCallback((...args: any) => {
    callbackFn.current?.(...args);
  }, []);
};
