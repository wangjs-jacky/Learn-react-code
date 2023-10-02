/* 文章：
《终极compose函数封装方案！》
https://juejin.cn/post/6989815456416661534
*/

/* WaterFall 瀑布模式 */

const a = (initArg) => {
  console.log('initArg', initArg);
  return 'a';
};
const b = (arg) => {
  console.log('arg', arg);
  return 'b';
};
const c = (arg) => {
  console.log('arg', arg);
};

/*  
  当 fn() 返回值不为 null 时，停止循环
*/

const compose = (...fns) => {
  return (...args) => {
    const [first, ...otherFns] = fns;
    otherFns.reduce((ret, cur) => cur(ret), first(...args));
  };
};

compose(a, b, c)('Hello');

class SyncWaterFallHook {
  constructor(name) {
    this.tasks = [];
    this.name = name;
  }
  tap(task) {
    this.tasks.push(task);
  }
  call() {
    const [first, ...otherFns] = this.tasks;
    otherFns.reduce((ret, cur) => cur(ret), first(...arguments));
  }
}

let queue = new SyncWaterFallHook('name');

queue.tap(a);
queue.tap(b);
queue.tap(c);

queue.call('Hello-2');

export default () => {
  return <></>;
};
