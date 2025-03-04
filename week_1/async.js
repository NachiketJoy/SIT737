function async() {
    setTimeout(() => {
        console.log('Async function called');
    }, 2000);
}

function add(v1, v2){
    const sumValue = v1+ v2;
    return sumValue;
}

console.log('the sum is: ', add(12,10))
async();
console.log('this is going to come out before the previous one');