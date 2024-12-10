// const h1 = document.getElementById("heading")
// function sumfun(a,b){
//     const sum = a+b
//     console.log("----sum----", sum)
//     h1.innerText += sum
//     return sum
// }


// function removeContent() {
//     h1.innerText = " "
// }


// console.log("------------------------------------")
// const n1 = 5
// const n2 = 6 
// console.log(n1)
// // n1 = 6

// console.log(n2)

// console.log("------------------------------------")


// // console.log("Hello world")
// // while (true)
// // console.log("New world")    

// // setInterval
// // satTimeout

// const myPromise = new Promise((resolve,reject) => {
//     setTimeout(() =>{
//         resolve("Internel Problem")
//     }, 3000)
// })

// console.log(myPromise)

// // myPromise
// //   .then((value) => {
// //     console.log(value)
// //   })
// //   .catch((error) =>{
// //     console.log(error)

// // })
// console.log("Promise start:", 49)  
// const PromiseFun = async () => {
//     console.log("-----Line number-----", 51)
//     const value = await myPromise
//     console.log(value,": 53")
// }
// PromiseFun()
// console.log("Promise end:", 56)

// console.log("----------start from here----------")
// function sum(a,b){
//     console.log(a+b)
// }

// console.log("sum1")
// sum(4,8)

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    return data
}
async function main() {
    
    let data = await getData()
    console.log(data)
    console.log("promise")
}