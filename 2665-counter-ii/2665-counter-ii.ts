type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
let count: number = init;
    return {
        increment: ()=> ++count,
        decrement: ()=> --count,
        reset: ()=>{
            count = init;
            return count;
        },
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */