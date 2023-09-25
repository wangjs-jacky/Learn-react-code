/* 文章：
《终极compose函数封装方案！》
https://juejin.cn/post/6989815456416661534
*/

/* 异步串行-支持打断 */
const a = function (preRes) {
  return new Promise<void>(function (resolve, reject) {
    setTimeout(function () {
      console.log("a", preRes);
      resolve("a-返回值");
    }, 100);
  });
};

const b = function (preRes) {
  return new Promise<void>(function (resolve, reject) {
    setTimeout(function () {
      console.log("b", preRes);
      resolve("b-返回值");
    }, 100);
  });
};

const c = function (preRes) {
  return new Promise<void>(function (resolve, reject) {
    setTimeout(function () {
      console.log("c", preRes);
      resolve("c-返回值");
    }, 100);
  });
};

/* 串行: 简单模式
a("initArg").then((res)=> b(res)).then((res)=>c(res))
  .then((res)=>console.log("串执行结束",res))
  .catch(()=> console.log("串行执行报错"))
*/
const compose = (...fns) => {
  return (...args) => {
    const [first, ...otherFns] = fns;
    return new Promise<void>((resolve, reject) => {
      otherFns
        .reduce(
          (pre, cur) => {
            return pre.then((res) => {
              return cur(res);
            });
          },
          first(...args),
        )
        .then((res) => {
          resolve(res);
        })
        .catch(() => reject());
    });
  };
};

console.time("time1");
compose(
  a,
  b,
  c,
)("初始参数").then(
  (res) => {
    console.log("compose", res);
    console.timeEnd("time1");
  },
  () => {
    console.log("串行执行失败");
  },
);

/* 使用 async 和 await 实现 */
const compose2 = (...fns) => {
  return (arg) => {
    return new Promise<void>((resolve, reject) => {
      async function main() {
        let res = arg;
        for (let i = 0; i < fns.length; i++) {
          try {
            /* 保证每次执行成功 */
            res = await fns[i](res);
          } catch (error) {
            /* 直接弹出 */
            reject();
            /* 不再执行后续流程 */
            return;
          }
        }
        return res;
      }
      main().then((res) => resolve(res));
    });
  };
};

setTimeout(() => {
  console.time("time2");
  compose2(
    a,
    b,
    c,
  )("初始值").then(
    (res) => {
      console.log("compose", res);

      console.timeEnd("time2");
    },
    () => {
      console.log("串行执行失败");
    },
  );
}, 400);

/* class AsyncParallelHook {
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

queue.promise("Hello-2").then(() => console.timeEnd("time2")); */

export default () => {
  return <></>;
};
