/* 文章：
  《2个高级函数技巧！【mx-design-cli第一个稳定版 发布啦】》
  https://juejin.cn/post/7223389749151760439
*/

const a = () => console.log(1);
const b = () => console.log(2);
const c = () => console.log(3);

/* 
同步串行：
c() → b() → a()

同步瀑布串行：
c() -> b(c-res) -> a(b-res)  => a(b(c()));
*/

/* 立即执行写法 */
const compose_immediate1 = (...funcs) => {
  /* 翻转数组 */
  funcs.reverse();

  /* 处理初始值 */
  funcs.slice(1).reduce((pre, cur) => {
    pre = cur(pre);
    return pre;
  }, funcs[0]());
};

const compose_immediate2 = (...funcs) => {
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
const compose_async = (...funcs) => {
  return funcs.reduce((pre, cur) => {
    const wrapFun = (...args) => cur(args);
    return (...args) => pre(wrapFun(...args));
  });
};

compose_immediate1(a, b, c);
compose_immediate2(a, b, c);
compose_async(a, b, c)();

export default () => {
  return <></>;
};
