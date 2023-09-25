/* 文章：
《终极compose函数封装方案！》
https://juejin.cn/post/6989815456416661534
*/

/* Loop - 循环执行任务*/

const a = (arg) => {
  console.log("arg", arg);
  return undefined;
};

function generateB() {
  let count = 0;
  return (arg) => {
    if (count !== 3) {
      count++;
      console.log("b", arg);
      return "b";
    } else {
      return undefined;
    }
  };
}

const c = (arg) => {
  console.log("c", arg);
  return undefined;
};

/*  
  当 fn() 返回值不为 undefined 时，不爆错，但是需要继续循环
*/

const compose = (...fns) => {
  return (...args) => {
    fns.forEach((task) => {
      let ret = true;
      do {
        ret = task(...args);
      } while (ret === true || !(ret === undefined));
    });
  };
};

compose(a, generateB(), c)("Hello");

class SyncLoopHook {
  constructor(name) {
    this.tasks = [];
    this.name = name;
  }
  tap(task) {
    this.tasks.push(task);
  }
  call(...args) {
    this.tasks.forEach((task) => {
      let ret = true;
      do {
        ret = task(...args);
      } while (ret === true || !(ret === undefined));
    });
  }
}

let queue = new SyncLoopHook("name");

queue.tap(a);
queue.tap(generateB());
queue.tap(c);

queue.call("Hello-2");

export default () => {
  return <></>;
};
