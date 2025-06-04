//n=4
//****
//****
//****
//****
const pattern1 = function (n) {
    for (let i = 0; i < n; i++) {
        let row = " "
        for (let j = 0; j < n; j++) {
            row = row + "*"
        }
        console.log(row)
    }
}
console.log(pattern1(4))
//*
//**
//***
//****
const pattern2=function(n){
    for (let i = 0; i < n; i++) {
        let row = " "
        for (let j =0;j<i+1;j++) {
            row = row + "*"
             console.log(i,j)
        }
        console.log(row)
    }
}
console.log(pattern2(4))
//for (let j =0;j<i+1;j++) or for (let j =0;j<=i;j++) : loop will run same no of times
//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5
let n = 5
for (let i = 0; i < n; i++){
    let row = " "
    for (let j = 0; j <= i; j++){
        row=row+" "+(j+1)
    } 
    console.log(row)
}
//1
//2 2
//3 3 3
//4 4 4 4
//5 5 5 5 5
let m = 5
for (let i = 0; i < m; i++){
    let row = " "
    for (let j = 0; j <= i; j++){
        row=row+" "+(i+1)
    } 
    console.log(row)
}
//1 2 3 4 5
//1 2 3 4
//1 2 3 
//1 2 
//1
let x = 5
for (let i = x; i > 0; i--){
    let row = " "
    for (let j = 0; j < i; j++){
        row=row+" "+(j+1)
    }
    console.log(row)
}
//sol2
let x1 = 5
for (let i = 0; i < x1; i++) {
    let row = " "
    for (let j = 0; j < (x1 - i); j++) {
        row = row + " " + (j + 1)
    }
    console.log(row)
}
//*****
//****
//***
//**
//*
let ab = 5
for (let i = 0; i < ab;i++ ) {
    let row = " "
    for (let j = 0; j < (ab- i);j++) {
        row = row + " " +"*"
    }
    console.log(row)
}
//    *
//   **
//  ***
// ****
//***** 

let a = 5
for (let i = 0; i < a;i++ ) {
    let row = " "
    for (let j = 0; j < a-(i+1);j++) {
        row = row+" "
    }
    for (let k = 0; k < (i + 1); k++){
        row=row+"*"
    }
    console.log(row)
}
//1
//10
//101
//1010
//10101
//101010
let p = 6
for (let i = 0; i < p; i++) {
    let row = " "
    let toggle = 1;
    for (let j = 0; j <= i; j++) {
        row = row + toggle
        if (toggle == 1) {
            toggle = 0
        } else (toggle = 1)
    }

    console.log(row)
}
//1
//01
//010
//1010
//10101
//010101
let q= 6
 let toggle = 1;
for (let i = 0; i < q; i++) {
    let row = " "
   
    for (let j = 0; j <= i; j++) {
        row = row + toggle
        if (toggle == 1) {
            toggle = 0
        } else (toggle = 1)
    }

    console.log(row)
}