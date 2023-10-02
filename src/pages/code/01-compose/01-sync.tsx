/* 文章：
  《2个高级函数技巧！【mx-design-cli第一个稳定版 发布啦】》
  https://juejin.cn/post/7223389749151760439
*/

const a = (...args: any[]) => {
  console.log(1, args);
  return 'a';
};
const b = (...args: any[]) => {
  console.log(2, args);
  return 'b';
};
const c = (...args: any[]) => {
  console.log(3, args);
  return 'c';
};

/* 
同步串行：
c() → b() → a()

同步瀑布串行：
c() -> b(c-res) -> a(b-res)  => a(b(c()));
*/

/* 立即执行写法 */
const compose_immediate1 = (...funcs: any[]) => {
  /* 翻转数组 */
  funcs.reverse();

  /* 处理初始值 */
  funcs.slice(1).reduce((pre, cur) => {
    pre = cur(pre);
    return pre;
  }, funcs[0]());
};

const compose_immediate2 = (...funcs: any[]) => {
  /* 翻转数组 */
  funcs.reverse();

  /* 处理初始值 */
  const [first, ...otherFuns] = funcs;
  otherFuns.reduce((pre, cur) => {
    pre = cur(pre);
    return pre;
  }, first());
};

/* 使用 箭头函数，延迟代码执行 */
/* 
const c = () => console.log(3);
      ↓
const wrap_c = (...args) => c(...args);
*/
const compose_async = (...funcs: any[]) => {
  return funcs.reduce((pre, cur) => {
    return (...args) => pre(cur(...args));
  });
};

function compose_iterable(...tasks: any[]) {
  return (...args) => {
    function wrapFun(i: number) {
      if (i === tasks.length - 1) return tasks[i](...args);
      return tasks[i](wrapFun(i + 1));
    }
    return wrapFun(0);
  };
}

function compose_iterable_delay(...tasks: any[]) {
  return (...args) => {
    function wrapFun(i: number) {
      if (i === tasks.length - 1) return () => tasks[i](...args);
      return () => tasks[i](wrapFun(i + 1)());
    }
    return wrapFun(0);
  };
}

export default () => {
  return (
    <div>
      <button onClick={() => compose_immediate1(a, b, c)}>立即执行</button>
      <button onClick={() => compose_immediate2(a, b, c)}>立即执行2</button>
      <button onClick={() => compose_async(a, b, c)('test1')}>
        reduce实现
      </button>
      <button onClick={() => compose_iterable(a, b, c)('test1')}>
        递归实现
      </button>
      <button onClick={() => compose_iterable_delay(a, b, c)('test1')()}>
        递归实现-延迟版
      </button>
    </div>
  );
};
