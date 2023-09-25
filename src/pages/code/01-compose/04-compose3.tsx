/* 
改进： 
1. 支持 namespace 对 ctx 状态进行隔离
2. 支持 before, after 函数
*/

/* lazyMan 考题 */
async function fn1(next, ctx) {
  /* 每个函数都支持修改 ctx 全局变量 */
  ctx['fn1'] = 'fn1';
  console.log(1);

  await next();

  return 'fn1-Res';
}

async function fn2(next, ctx) {
  ctx['fn2'] = 'fn2';
  console.log(2);
  await next();
  return 'fn2-Res';
}

async function fn3(next, ctx) {
  ctx['fn3'] = 'fn3';
  await next();
  return 'fn3-Res';
}

const middleware = [
  {
    name: 'fn1-space',
    fn: fn1,
    before: (a) => console.log(a),
    after: (b) => console.log(b),
  },
  { name: 'fn2-space', fn: fn2 },
  { name: 'fn3-space', fn: fn3 },
];

const compose = (middleware, defaultCtx) => {
  var middlewareData: Record<string, any> = defaultCtx || {};
  async function dispatch(index: number) {
    if (index === middleware.length) return undefined;
    const {
      name: namespace,
      fn: curMiddlewareFun,
      before,
      after,
    } = middleware[index];
    const next = () => dispatch(index + 1);

    before?.(middlewareData);
    const data = await curMiddlewareFun(next, middlewareData);

    middlewareData = {
      ...middlewareData,
      [namespace]: {
        ...middlewareData[namespace],
        data,
      },
    };

    after?.(middlewareData);
  }

  dispatch(0);
};

compose(middleware, {
  a: '1',
  b: '2',
});

export default () => {
  return <></>;
};
