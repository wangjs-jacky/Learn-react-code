function outerTest() {
  var num = 0;
  function innetTest() {
    ++num;
    console.log(num);
  }
  return innetTest;
}

const fn1 = outerTest();
const fn2 = outerTest();

fn1();
fn1();
fn1();
fn2();
fn2();
fn2();

export default () => {
  return <></>;
};
