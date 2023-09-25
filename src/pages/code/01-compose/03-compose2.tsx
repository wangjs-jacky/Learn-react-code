/* 
改进： 支持处理公共状态
*/

/* lazyMan 考题 */
function fn1(next, ctx) {
  /* 每个函数都支持修改 ctx 全局变量 */
  ctx["fn1"] = "fn1";
  console.log(1, ctx);

  next();
}

function fn2(next, ctx) {
  ctx["fn2"] = "fn2";
  console.log(2, ctx);
  next();
}

function fn3(next, ctx) {
  ctx["fn3"] = "fn3";
  console.log(3, ctx);
  next();
}

const middleware = [fn1, fn2, fn3];

const compose = (middleware, ctx = {}) => {
  function dispatch(index: number) {
    if (index === middleware.length) return undefined;
    const curMiddleware = middleware[index];
    const next = () => dispatch(index + 1);
    return curMiddleware(next, ctx);
  }

  dispatch(0);
};

compose([fn1, fn2, fn3], {
  a: "1",
  b: "2",
});

export default () => {
  return <></>;
};
