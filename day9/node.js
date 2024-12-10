// let n = prompt("Enter the number")
// let reverse = 0
// while (n>0) {
//     const lastDigit = n %10
//     reverse = reverse*10 + lastDigit
//     n = parseInt(n/10) 
//     console.log("-----check n ----", n)
// }
// console.log(reverse)

const data = [
    
        {
           "image": {
                "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
                "mobile": "./assets/images/image-waffle-mobile.jpg",
                "tablet": "./assets/images/image-waffle-tablet.jpg",
                "desktop": "./assets/images/image-waffle-desktop.jpg"
           },
           "name": "Waffle with Berries",
           "category": "Waffle",
           "price": 6.50
        },
        {
            "image": {
                "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
                "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
                "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
                "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
            },
            "name": "Vanilla Bean Crème Brûlée",
            "category": "Crème Brûlée",
            "price": 7.00
         },
         {
            "image": {
                "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
                "mobile": "./assets/images/image-macaron-mobile.jpg",
                "tablet": "./assets/images/image-macaron-tablet.jpg",
                "desktop": "./assets/images/image-macaron-desktop.jpg"
            },
            "name": "Macaron Mix of Five",
            "category": "Macaron",
            "price": 8.00
         },
         {
            "image": {
                "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
                "mobile": "./assets/images/image-tiramisu-mobile.jpg",
                "tablet": "./assets/images/image-tiramisu-tablet.jpg",
                "desktop": "./assets/images/image-tiramisu-desktop.jpg"
            },
            "name": "Classic Tiramisu",
            "category": "Tiramisu",
            "price": 5.50
         },
         {
            "image": {
                "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
                "mobile": "./assets/images/image-baklava-mobile.jpg",
                "tablet": "./assets/images/image-baklava-tablet.jpg",
                "desktop": "./assets/images/image-baklava-desktop.jpg"
            },
            "name": "Pistachio Baklava",
            "category": "Baklava",
            "price": 4.00
         },
         {
            "image": {
                "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
                "mobile": "./assets/images/image-meringue-mobile.jpg",
                "tablet": "./assets/images/image-meringue-tablet.jpg",
                "desktop": "./assets/images/image-meringue-desktop.jpg"
            },
            "name": "Lemon Meringue Pie",
            "category": "Pie",
            "price": 5.00
         },
         {
            "image": {
                "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
                "mobile": "./assets/images/image-cake-mobile.jpg",
                "tablet": "./assets/images/image-cake-tablet.jpg",
                "desktop": "./assets/images/image-cake-desktop.jpg"
            },
            "name": "Red Velvet Cake",
            "category": "Cake",
            "price": 4.50
         },
         {
            "image": {
                "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
                "mobile": "./assets/images/image-brownie-mobile.jpg",
                "tablet": "./assets/images/image-brownie-tablet.jpg",
                "desktop": "./assets/images/image-brownie-desktop.jpg"
            },
            "name": "Salted Caramel Brownie",
            "category": "Brownie",
            "price": 4.50
         },
         {
            "image": {
                "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
                "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
                "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
                "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
            },
            "name": "Vanilla Panna Cotta",
            "category": "Panna Cotta",
            "price": 6.50
         }
    
]
const container = document.getElementById("container")
for(let i = 0; i < 1; i++){
    const myData = data[i]
    // const myImg = myImg.image
    const myName = myData.name
    const myCategory = myData.category
    const myPrice = myData.price
    
    console.log(myName)
    console.log(myCategory)
    console.log(myPrice)
    let myHTML1 =`<div class = "card">
               <img src="https://th.bing.com/th/id/OIP.wJEIpq88MItD_Cw1rPH2iAHaFE?rs=1&pid=ImgDetMain" alt="">
               <h2> ${myCategory} </h2>
               <h1> ${myName} </h1>
               <h3> ${myPrice} </h3>
               </div>`
    container.innerHTML += myHTML1
}
const container2 = document.getElementById("container")
for(let i = 1; i <2 ; i++){
    const myData = data[i]
    // const myImg = myImg.image
    const myName = myData.name
    const myCategory = myData.category
    const myPrice = myData.price
    
    console.log(myName)
    console.log(myCategory)
    console.log(myPrice)
    let myHTML1 =`<div class = "card">
               <img src="https://www.tavolartegusto.it/wp/wp-content/uploads/2022/09/creme-brulee.jpg" alt="">               <h2> ${myCategory} </h2>
               <h1> ${myName} </h1>
               <h3> ${myPrice} </h3>
               </div>`
    container.innerHTML += myHTML1
}
const container3 = document.getElementById("container")
for(let i = 2; i < 3; i++){
    const myData = data[i]
    // const myImg = myImg.image
    const myName = myData.name
    const myCategory = myData.category
    const myPrice = myData.price
    
    console.log(myName)
    console.log(myCategory)
    console.log(myPrice)
    let myHTML1 =`<div class = "card">
               <img src="https://img.freepik.com/premium-photo/macarons-background_495832-570.jpg?w=2000" alt="">
               <h2> ${myCategory} </h2>
               <h1> ${myName} </h1>
               <h3> ${myPrice} </h3>
               </div>`
    container.innerHTML += myHTML1
}
const container4 = document.getElementById("container")
for(let i = 3; i < 4; i++){
    const myData = data[i]
    // const myImg = myImg.image
    const myName = myData.name
    const myCategory = myData.category
    const myPrice = myData.price
    
    console.log(myName)
    console.log(myCategory)
    console.log(myPrice)
    let myHTML1 =`<div class = "card">
               <img src="https://th.bing.com/th/id/OIP.Wwsh9zGsDNC-36LltL2h4QHaEK?rs=1&pid=ImgDetMain" alt="">
               <h2> ${myCategory} </h2>
               <h1> ${myName} </h1>
               <h3> ${myPrice} </h3>
               </div>`
    container.innerHTML += myHTML1
}
const container5 = document.getElementById("container")
for(let i = 4; i < 5; i++){
    const myData = data[i]
    // const myImg = myImg.image
    const myName = myData.name
    const myCategory = myData.category
    const myPrice = myData.price
    
    console.log(myName)
    console.log(myCategory)
    console.log(myPrice)
    let myHTML1 =`<div class = "card">
               <img src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/5b3a4f1ef35536dd44ed1a64ed55f2f2/Derivates/78efec556a9f9d444cae9fac03247ba34195c621.jpg" alt="">
               <h2> ${myCategory} </h2>
               <h1> ${myName} </h1>
               <h3> ${myPrice} </h3>
               </div>`
    container.innerHTML += myHTML1
}

const container6 = document.getElementById("container")
for(let i = 5; i < 6; i++){
    const myData = data[i]
    // const myImg = myImg.image
    const myName = myData.name
    const myCategory = myData.category
    const myPrice = myData.price
    
    console.log(myName)
    console.log(myCategory)
    console.log(myPrice)
    let myHTML1 =`<div class = "card">
               <img src="https://www.biggerbolderbaking.com/wp-content/uploads/2023/07/Raspberry-Curd-Meringue-Pie-thumbnail-1024x683.jpg" alt="">
               <h2> ${myCategory} </h2>
               <h1> ${myName} </h1>
               <h3> ${myPrice} </h3>
               </div>`
    container.innerHTML += myHTML1
}
const container7 = document.getElementById("container")
for(let i = 6; i < 7; i++){
    const myData = data[i]
    // const myImg = myImg.image
    const myName = myData.name
    const myCategory = myData.category
    const myPrice = myData.price
    
    console.log(myName)
    console.log(myCategory)
    console.log(myPrice)
    let myHTML1 =`<div class = "card">
               <img src="https://static01.nyt.com/images/2014/05/14/dining/14REDVELVET/14REDVELVET-superJumbo-v4.jpg" alt="">
               <h2> ${myCategory} </h2>
               <h1> ${myName} </h1>
               <h3> ${myPrice} </h3>
               </div>`
    container.innerHTML += myHTML1
}
const container8 = document.getElementById("container")
for(let i = 7; i < 8; i++){
    const myData = data[i]
    // const myImg = myImg.image
    const myName = myData.name
    const myCategory = myData.category
    const myPrice = myData.price
    
    console.log(myName)
    console.log(myCategory)
    console.log(myPrice)
    let myHTML1 =`<div class = "card">
               <img src="https://th.bing.com/th/id/OIP.uJvzZtRQK9rC3xVu5omrnwHaE8?rs=1&pid=ImgDetMain" alt="">
               <h2> ${myCategory} </h2>
               <h1> ${myName} </h1>
               <h3> ${myPrice} </h3>
               </div>`
    container.innerHTML += myHTML1
}
const container9 = document.getElementById("container")
for(let i = 8; i < 9; i++){
    const myData = data[i]
    // const myImg = myImg.image
    const myName = myData.name
    const myCategory = myData.category
    const myPrice = myData.price
    
    console.log(myName)
    console.log(myCategory)
    console.log(myPrice)
    let myHTML1 =`<div class = "card">
               <img src="https://th.bing.com/th/id/OIP.qO1O6CdKgE3dv7yZH0kNJAHaE7?rs=1&pid=ImgDetMain" alt="">
               <h2> ${myCategory} </h2>
               <h1> ${myName} </h1>
               <h3> ${myPrice} </h3>
               </div>`
    container.innerHTML += myHTML1
}
//Select element
//make variable with value
//assign value to element


// ----function----
// name function
// arraw function
// IFFI function

//name function
// function sumFun(a,b){
//     const sum = a+b
//     // console.log(add)
//     return sum
// }
// function mysumFun(a,b,c){
//     const sum = a+b+c
//     // console.log(add)
//     return sum
// }

// const me = sumFun(5,8)
// console.log(me)
// const me1 = mysumFun(5,8,6)
// console.log(me1)
// sumFun(6, 7)
// sumFun(3, 4)
// sumFun(66, 23)
// sumFun(100, 52)

//arraw function
// const arrFun = (a,b,c) =>{
//     const process = " " + a + " " + b + " " + c
//     return process
// }

// (function (){
    
// })

// const arrFunData = arrFun(67, "name", "hello")
// console.log(arrFunData)

