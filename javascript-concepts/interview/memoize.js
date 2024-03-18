const initApp = async () => {
    const memoizedFib = memoize(fib)
    console.log(memoizedFib(40));
    console.log(memoizedFib(40));
    console.log(memoizedFib(40));
}
document.addEventListener('DOMContentLoaded', initApp);

const multiplyBy20 = (num) => {
    return num * 20
};

const fib = (pos) => {
    if (pos < 2) return pos;
    return fib (pos - 1) + fib(pos - 2);
}

const memoize = (fn) => {
    const cache = {};

    return (...args) => {
        if (JSON.stringify(args) in cache) {
            // if you want to verify result comes from cache
            console.log(cache); 
            return cache[JSON.stringify(args)];
        }
        const result = fn(...args);
        cache[JSON.stringify(args)] = result;
        return result;
    }
}

const memoizedMultiply = () => {
    const cache = {};

    return (num) => {
        if(num in cache){
            console.log(cache)
            return cache[num];
        }

        const result = num * 20;
        cache[num] = result;
        return result
    }
}