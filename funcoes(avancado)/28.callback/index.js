function rand(min = 1000, max = 3000) {
    const num = Math.random(max * min) + min;
    return Math.floor(num)
}

function f1() {
    setTimeout(function(){
        console.log('f1')
    }, rand())
}

function f2() {
   setTimeout(function(){
       console.log('f2')
   }, rand()) 
}

function f3() {
    setTimeout(function(){
        console.log('f3')
    }, rand())
}

f1()
f2()
f3()
console.log('olá')