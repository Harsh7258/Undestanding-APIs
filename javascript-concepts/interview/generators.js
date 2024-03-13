// iterators and generators are powerful tools that allow you to control how you loop through data and manage its flow

// Iterators
// for (const val of [1,2,3,4,5]) {
//     console.log(val)
// }

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;
  
    const rangeIterator = {
      next() {
        let result;
        if (nextIndex < end) {
          result = { value: nextIndex, done: false };
          nextIndex += step;
          iterationCount++;
          return result;
        }
        return { value: iterationCount, done: true };
      },
    };
    return rangeIterator;
  }

  const iteratorLog = makeRangeIterator(1, 10, 2);

  let result = iteratorLog.next();
  while (!result.done) {
    console.log('iteration: ',result.value);
    result = iteratorLog.next();
  }

// Generators
function* simpleGenerator() {
    yield 1
    yield 2
    yield 3
}

const obj = simpleGenerator();
console.log(obj.next());
console.log(obj);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());

function* range(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }
  
  const numbers = range(1, 5);
  
  for (const number of numbers) {
    console.log('generators: ',number); // Output: 1, 2, 3, 4, 5
  }
  