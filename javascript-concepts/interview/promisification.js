// Promisification 
function promisify(fn) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (error, result) => {
                 console.log('reject:', reject);
                 console.log('resolve:', resolve);

                if(error) return reject(error);
                return resolve(result);
            })
        })
    }
}
// without promise
function loadScript(src, cb) {
    const script = document.createElement("script");
    console.log('script:', script);

    script.src = src;
    console.log('scr:', src);

    script.onload = () => cb(null, script);
    script.onerror = (err) => cb(err);

    document.appendChild(script);
} 

const loadScriptNew = promisify(loadScript);
console.log(loadScriptNew);

loadScript("rTest.js").then(() => console.log('done')).catch((err) => console.log(err))

function* simpleGenerator() {
    yield 1
    yield 2
    yield 3
}

const obj = simpleGenerator();
console.log(obj.next());
// console.log(obj);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
