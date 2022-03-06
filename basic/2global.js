//GLOBAL OBJ
console.log(global);

setTimeout(() => {
    console.log('in the timeout');
    //clear the interval below
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('in the interval')
},1000);

console.log(__dirname);
console.log(__filename);