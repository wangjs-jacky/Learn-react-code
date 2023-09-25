/* 文章：
《终极compose函数封装方案！》
https://juejin.cn/post/6989815456416661534
*/

/* 异步分为并行模式实现*/

const a = function (name) {
  return new Promise<void>(function (resolve, reject) {
    setTimeout(function () {
      console.log("a");
      resolve();
    }, 1000);
  });
};

const b = function (name) {
  return new Promise<void>(function (resolve, reject) {
    setTimeout(function () {
      console.log("b");
      resolve();
    }, 1000);
  });
};

const c = function (name) {
  return new Promise<void>(function (resolve, reject) {
    setTimeout(function () {
      console.log("c");
      resolve();
    }, 1000);
  });
};

console.time("time1");

/* 串行 */
const compose = (...fns) => {
  const promises = fns.map((task) => task());
  return Promise.all(promises);
};

compose(a, b, c).then(() => {
  console.timeEnd("time1");
});

class AsyncParallelHook {
  constructor(name) {
    this.tasks = [];
    this.name = name;
  }
  tapPromise(task) {
    this.tasks.push(task);
  }

  promise() {
    let promises = this.tasks.map((task) => task());
    // Promise.all所有的Promsie执行完成会调用回调
    return Promise.all(promises);
  }
}

let queue = new AsyncParallelHook("name");

queue.tapPromise(a);
queue.tapPromise(b);
queue.tapPromise(c);

console.time("time2");

queue.promise("Hello-2").then(() => console.timeEnd("time2"));

export default () => {
  return <></>;
};
