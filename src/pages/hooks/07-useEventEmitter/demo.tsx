import { FC, useRef } from 'react';
import useEventEmitter, { EventEmitter } from './useEventEmitter';

const MessageBox: FC<{
  focus: EventEmitter<void>;
}> = function (props) {
  const { focus } = props;
  return (
    <button onClick={() => /* emit 触发事件 */ focus.emit()}> emit </button>
  );
};

const InputBox: FC<{
  focus: EventEmitter<void>;
}> = function (props) {
  const inputRef = useRef<any>();
  const { focus } = props;

  /* on 事件 */
  focus.useSubscription(() => {
    inputRef.current.focus();
  });
  return <input ref={inputRef} />;
};

export default function () {
  /* 保证单例 */
  const focus = useEventEmitter();
  return (
    <div>
      <MessageBox focus={focus} />
      <InputBox focus={focus} />
    </div>
  );
}
