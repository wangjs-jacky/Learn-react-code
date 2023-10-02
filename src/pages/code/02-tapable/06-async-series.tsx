/* 文章：
《终极compose函数封装方案！》
https://juejin.cn/post/6989815456416661534
*/

/* 异步串行-支持打断 */
const a = function (name) {
  return new Promise<void>(function (resolve, reject) {
    setTimeout(function () {
      console.log('a');
      resolve();
    }, 100);
  });
};

const generateB = (type: string) => (name) => {
  return new Promise<void>(function (resolve, reject) {
    setTimeout(function () {
      console.log('b');
      /* reject(); */
      if (type === 'success') {
        resolve();
      } else if (type === 'fail') {
        reject();
      }
    }, 100);
  });
};

const b_success = generateB('success');
const b_fail = generateB('fail');

const c = function (name) {
  return new Promise<void>(function (resolve, reject) {
    setTimeout(function () {
      console.log('c');
      resolve();
    }, 100);
  });
};

/* 串行: 简单模式
a().then(()=> b()).then(()=>c())
  .then(()=>console.log("串执行结束"))
  .catch(()=> console.log("串行执行报错"))
*/
const compose = (...fns) => {
  return (...args) => {
    const [first, ...otherFns] = fns;
    return new Promise<void>((resolve, reject) => {
      otherFns
        .reduce(
          (pre, cur) => {
            return pre.then(() => {
              return cur(...args);
            });
          },
          first(...args),
        )
        .then(() => resolve())
        .catch(() => reject());
    });
  };
};

/* 使用 async 和 await 实现 */
const compose2 = (...fns) => {
  return (...args) => {
    return new Promise<void>((resolve, reject) => {
      async function main() {
        for (let i = 0; i < fns.length; i++) {
          try {
            /* 保证每次执行成功 */
            await fns[i](args);
          } catch (error) {
            /* 直接弹出 */
            reject();
            /* 不再执行后续流程 */
            return;
          }
        }
      }
      main().then(() => resolve());
    });
  };
};

class AsyncSeriesHook {
  constructor(name) {
    this.tasks = [];
    this.name = name;
  }
  tapPromise(task) {
    this.tasks.push(task);
  }

  promise() {
    return new Promise<void>((resolve, reject) => {
      const main = async () => {
        for (let i = 0; i < this.tasks.length; i++) {
          try {
            /* 保证每次执行成功 */
            await this.tasks[i]();
          } catch (error) {
            /* 直接弹出 */
            reject();
            /* 不再执行后续流程 */
            return;
          }
        }
      };
      main().then(() => resolve());
    });
  }
}

export default () => {
  return (
    <div>
      <button
        onClick={() => {
          console.time('time1');
          compose(
            a,
            b_success,
            c,
          )('name').then(
            () => {
              console.timeEnd('time1');
            },
            () => {
              console.log('串行执行失败');
            },
          );
        }}
      >
        {'使用 Promise 串实现'}
      </button>
      <button
        onClick={() => {
          console.time('time2');
          compose2(
            a,
            b_fail,
            c,
          )('name').then(
            () => {
              console.timeEnd('time2');
            },
            () => {
              console.log('串行执行失败');
            },
          );
        }}
      >
        {'使用 for 循环 + async 和 await 实现'}
      </button>
      <button
        onClick={() => {
          let queue = new AsyncSeriesHook('name');
          queue.tapPromise(a);
          queue.tapPromise(b_success);
          queue.tapPromise(c);
          console.time('time3');
          queue.promise().then(
            () => console.timeEnd('time3'),
            () => {
              console.log('串行执行失败');
            },
          );
        }}
      >
        {'类版本'}
      </button>
    </div>
  );
};
