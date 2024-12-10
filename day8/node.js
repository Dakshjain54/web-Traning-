// // var arr = [5 ,6 ,2 ,4 ,8 ,85 ,3 ,6 ,4 ,6]
// // splice(start,count,add)
// // select: arr[index]
// // const n4 = arr[3]
// // console.log("4th value : ", n4)

// // //update element : at 7th position
// // arr.splice(7, 1, 999)
// // console.log("-----Uplode array-----:", arr)

// // //Delete element : 5th position
// // arr.splice(5, 1)
// // console.log("-----array after delete-----:", arr)

// // //Add element : 4th position
// // arr.splice(3,0,365)
// // console.log("-----array added-----:", arr)

// // Remove Specific Element (k) from an Array. eg :input : [1,4,5,6,73,2,4] , k = 5  || output : [1,4,6,73,2,4]

// var arr = [1,4,5,6,73,2,4]
// let k = 5, br
// for(let i=0; i<arr.length; i++){
//     if(arr[i]==k){
//         br = arr.splice(i, 1)
//     }
// }
// console.log(arr)

// // Plus One : Add one in each element. eg :input : [ 1,3,45,6,2,2]  ||  output : [ 2,4,46,7,3,3]
// var arr2 = [ 1,3,45,6,2,2] 
// for(let i=0; i<arr2.length; i++){
//     arr2[i]= arr2[i]+1
// }
// console.log(arr2)

// // Missing Number : Find Missing number in an array range : [1 to n ]  only one number is missing. eg : input : [1,2,3,4,5,7,8,9] || output : 6
// var arr3 = [1, 2, 3, 4, 5, 7, 8, 9]
// var mis
// for (let i = 0; i < arr3.length - 1; i++) {
//     if (arr3[i + 1] != arr3[i] + 1) {
//         mis = arr3[i] + 1
//         console.log(mis)
//     }
// }

// //  Print Largest Element & Smallest Element in an Array.  eg : input : [3,5,1,5,7,5,2,9,3]  || output : largest : 9 & smallest : 1
// var arr4 = [3,5,1,5,7,5,2,9,3]
// let mix = min = arr4[0]
// for(let i=0; i<arr4.length; i++){
//     if (arr4[i]>mix){
//         mix = arr4[i]
//     }
//     if(arr4[i]<min){
//         min = arr4[i]
//     }
// }
// console.log("largest : ",mix)
// console.log("smalest : ",min)

// // New one
let student_id_card = {
    // kry : value,
    name:"Daksh",
    rollnumber: 247020,
    address: "xyz-----abc",
    branch: "c",
    dob: "22-5=2006" ,
}
// // select: Two mothod: dot and square bracket

const myAddress = student_id_card.address
const myBranch = student_id_card["branch"]
const myName = student_id_card.name
const myRollnumber =student_id_card.rollnumber
const myDob = student_id_card.dob
console.log("Name:" ,myName)
console.log("Roll number:" ,myRollnumber)
console.log("Address:" ,myAddress)
console.log("Branch:", myBranch)
console.log("DOB:", myDob)


// // Add new key : id
student_id_card.id = 34
student_id_card.result = "pass"
console.log(student_id_card)

// // update rollno
student_id_card.rollnumber = 654789
console.log(student_id_card)

// // delete dob
delete student_id_card.dob
console.log(student_id_card)