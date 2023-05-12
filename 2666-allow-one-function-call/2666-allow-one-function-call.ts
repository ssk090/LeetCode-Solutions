function once<T extends (...args: any[]) => any>(fn: T):
  ((...args: Parameters<T>) => ReturnType<T> | undefined) {
  let result: ReturnType<T> | undefined; // will store the result of the first call

  return function (...args: Parameters<T>) {
    if (result === undefined) {
      result = fn(...args);
      return result;
    } else {
      return undefined;
    }
  };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */