import { useRef } from 'react';
import { useFirstMount } from '../04-lifeCycle/demo';

export const useRefPro = <T,>(defaultValue: T | (() => T)) => {
  const objRef = useRef();

  useFirstMount(() => {
    objRef.current =
      typeof defaultValue === 'function' ? defaultValue?.() : defaultValue;
  });

  return objRef;
};

export default () => {
  return <></>;
};
