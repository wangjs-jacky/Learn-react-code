/* 文章：
《终极compose函数封装方案！》
https://juejin.cn/post/6989815456416661534
*/

/* Bail - 保险丝 */

const a = (arg) => console.log(1, arg);
const b = (arg) => "123";
const c = (arg) => console.log(3, arg);

/*  
  当 fn() 返回值不为 null 时，停止循环
*/

const compose = (...fns) => {
  let err = null;
  return (...args) => {
    for (let i = 0; i < fns.length; i++) {
      err = fns[i](...args);
      if (err) {
        err = null;
        return;
      }
    }
  };
};

compose(a, b, c)("Hello");

class SyncBailHook {
  constructor(name) {
    this.tasks = [];
    this.name = name;
  }
  tap(task) {
    this.tasks.push(task);
  }
  call() {
    let i = 0,
      ret;
    do {
      ret = this.tasks[i++](...arguments);
    } while (!ret);
  }
}

let queue = new SyncBailHook("name");

queue.tap(a);
queue.tap(b);
queue.tap(c);

queue.call("Hello-2");

export default () => {
  return <></>;
};
