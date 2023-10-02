/* 文章：
《终极compose函数封装方案！》
https://juejin.cn/post/6989815456416661534
*/

/* 异步串行-支持打断 */
const a = function (preRes) {
  return new Promise<void>(function (resolve, reject) {
    setTimeout(function () {
      console.log('a', preRes);
      resolve('a-返回值');
    }, 100);
  });
};

const b = function (preRes) {
  return new Promise<void>(function (resolve, reject) {
    setTimeout(function () {
      console.log('b', preRes);
      resolve('b-返回值');
    }, 100);
  });
};

const c = function (preRes) {
  return new Promise<void>(function (resolve, reject) {
    setTimeout(function () {
      console.log('c', preRes);
      resolve('c-返回值');
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
    </div>
  );
};
