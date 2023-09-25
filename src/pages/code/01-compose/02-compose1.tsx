/* 文章：
  《2个高级函数技巧！【mx-design-cli第一个稳定版 发布啦】》
  https://juejin.cn/post/7223389749151760439
*/

/* lazyMan 考题 
   异步函数组合，是否调用下一个函数，完全由中间件自己决定
*/
function fn1(next) {
  console.log(1);
  next();
}

function fn2(next) {
  console.log(2);
  next();
}

function fn3(next) {
  console.log(3);
  next();
}

const middleware = [fn1, fn2, fn3];

/* koa 底层实践
基于 next 执行：fn1 => fn2 => fn3

其中核心难点: next 实现？ next 为下一个待执行函数的延迟执行函数。

延迟函数： fn →  (...args) => fn(args);

即 fn1(next) , 其中 next = () => fn2(next2) ,  此时 next2 的入参又需传入下一执行函数的延迟执行函数，因此必须使用 “递归” 实现。

自定向下写法：
function generateWrapFun(i){
  if( i === middleware.length); return undefined;
  const curFun = middleware[i];
  const next = () => generateWrapFun(i+1);
  return () => curFun(next); // 返回下一个 middleware 的 wrapFun
}


自底向上写法 
function dispath(){
  let preFun  = () => undefined;
  for(let i = middleware.length - 1; i >= 0 ; i--){
    preFun = () => middleware[i](preFun);
  }
}

let middleware  = [a,b,c];

dispatch();

middleware[0]();

缺少中间状态。
*/

/* koa 核心源码： */
function compose_immediate(middleware) {
  /* 核心难点：这块我写不出来
     入参： i - 取出函数索引。
     出参： 执行当前函数
  */
  function dispatch(i: number) {
    if (i === middleware.length) return;
    let curFun = middleware[i];
    const next = () => dispatch(++i);
    return curFun(next);
  }
  dispatch(0);
}

/* 扩展：改造为延迟执行 */
function compose_async(middleware) {
  /* 核心难点：这块我写不出来
     入参： i - 取出函数索引。
     出参： () => middleware[i](next); 其中 next 递归处理
  */
  function delayFun(i: number) {
    if (i === middleware.length) return () => undefined;
    let curFun = middleware[i];
    const next = () => delayFun(i + 1)();
    return () => curFun(next);
  }
  return delayFun(0);
}

compose_async(middleware)();
compose_immediate(middleware);

export default () => {
  return <></>;
};
