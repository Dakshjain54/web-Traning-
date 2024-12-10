// const h1 = document.getElementById("h1")
// console.log(h1)

// const newContent = "hello world"

// h1.innerText = newContent

// const element = document.getElementsByClassName("heading")
// const newContent2 = "hello India"
// element[1].innerText = newContent2
const elements = document.getElementsByClassName("heading")
console.log(elements)
const newContent = "even"
const newContent2 = "odd"

for(let i = 0; i<elements.length; i++){
    if(i%2==0){
        elements[i].innerText = newContent+i

    }
    else{
        elements[i].innerText = newContent2 + i
    }
}

