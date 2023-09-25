/* 陈旧闭包 */
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  });
}

/* 解决方案1： var → let */
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  });
}

/* 解决方案2： var → let */
for (var i = 0; i < 5; i++) {
  (() => {
    setTimeout(() => {
      console.log(i);
    });
  })(i);
}

export default () => {
  return <></>;
};
