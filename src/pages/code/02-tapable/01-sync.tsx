/* 文章：
《终极compose函数封装方案！》
https://juejin.cn/post/6989815456416661534
*/

/* 同步任务
   1. 无并行概念，一定串行。
   2. 区别：是否支持瀑布流

   存在两个写法：
   1. 函数式写法（一次性执行，没有变量缓存机制，执行完内存就释放）
   2. 类写法，可以异步 push 数组
*/

const a = (arg) => console.log(1, arg);
const b = (arg) => console.log(2, arg);
const c = (arg) => console.log(3, arg);

/* 函数式写法
   执行次序： a() -> b() -> c();
*/
function compose(...fns) {
  return (...args) => fns.forEach((task) => task(...args));
}

compose(a, b, c)("Hello");

/* 类写法 */
class SyncHook {
  /* 初始化 */
  constructor(name) {
    this.tasks = [];
    this.name = name;
  }
  tap(task) {
    this.tasks.push(task);
  }

  /* 支持传入公共参数 */
  call() {
    this.tasks.forEach((task) => task(...arguments));
  }
}

let queue = new SyncHook("name");

/* 使用 tap 存入数组 */
queue.tap(a);
queue.tap(b);
queue.tap(c);

queue.call("hello-2");

export default () => {
  return <></>;
};
