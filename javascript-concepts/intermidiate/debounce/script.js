const input = document.getElementById("write");
const defaultVal = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

const updateDebounceText = debounceFn(() => {
    incrementCount(debounceText)
}) 
// Live search where you only want to trigger a search API call after the user stops typing for a brief period.
// Resizing a window and only updating the layout after the user finishes resizing.

const updateThrottleText = throttleFn(() => {
    incrementCount(throttleText)
}, 250)

input.addEventListener("input", (e) => {
    defaultVal.textContent = e.target.value;
    updateDebounceText(e.target.value);
    updateThrottleText(e.target.value)
});

function debounceFn(cb, delay = 1000) {
    let timeout;

    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}

function throttleFn(cb, delay = 1000) {
    let shouldWait = false;
    let waitingArgs;
    const timeoutFunc = () => {
        if (waitingArgs == null){
            shouldWait = false
        } else {
            cb(...waitingArgs)
            waitingArgs = null
            setTimeout(timeoutFunc, delay)
        }
    }

    return (...args) => {
        if(shouldWait) return

        cb(...args)
        shouldWait = true

        setTimeout(timeoutFunc, delay)
    }
}

document.addEventListener("mousemove", e => {
    incrementCount(defaultVal);
    updateDebounceText(debounceText);
    updateThrottleText(throttleText)
})

function incrementCount(element) {
    element.textContent = (parseInt(element.innerText) || 0) + 1;
}