// iterative Fibonacci
function itFib(n) {
  let retval = [1, 1];
  if (n < 2) {
    return retval.slice(0, n);
  }
  let p1 = 0;
  let p2 = 1;
  for (let i = 2; i <= n - 1; i++) {
    retval.push(retval[p1++] + retval[p2++]);
  }
  return retval;
}
function recFib(n) {
  if (n < 1) return [];
  if (n == 1) return [1];
  if (n == 2) return [1, 1];
  let subA = recFib(n - 1);
  subA.push(subA[subA.length - 2] + subA[subA.length - 1]);
  return subA;
}
