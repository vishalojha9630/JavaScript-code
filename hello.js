

// 1. --> Length of String:
// function len(st){
//     return st.length
// }
// console.log("The Length of String is : ", len("My Name is Vishal"))



// 2. --> Slicing :
// function slc(s){
//     console.log("Slicing is: ", s.slice(0,5))
// }
// slc("My Name is Vishal")



// 3. --> Replace spaces to "#":
// function replaceSpace(strn){
//     // return strn.split(" ").join("#")
//     // return strn.replaceAll(" ", "#")
//     // return strn.replace(/ /g, "#")
// }
// console.log(replaceSpace("Hello This is Vishal"))



// 4. --> Word Count:
// function wordCount(str){
//     return str.split(" ").length
// }
// console.log(`Word count is: ${wordCount("My name is Vishal & their Company name is Piecodes")}`)



// 5. --> Change name:
// function changeName(name){
//     console.log(`My Name is ${name}, and their Company name is Piecode`)
// }
// changeName("Sateesh ")



// 6. --> check value Index:-
// console.log(arr.indexOf("their"))



// 7. --> Check value exist in array:-
// console.log(arr.includes("hy"))



// 8. --> M1: Using Filter method:-

// arr = ["My", "Name", "is", "Vishal", "and", "their", "Company", "is", "Piecode"]
// word = arr.filter(word => word == "and" || word == "Vishal" || word == "Name")
// console.log(word)


// M2: Using loops:-

// arr = ["My", "Name", "is", "Vishal", "and", "their", "Company", "is", "Piecode"];
// arr1 = [];
// for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] == 'Vishal' || arr[i] == 'Name' || arr[i] == "and") {
        //     arr1.push(arr[i])
        //   }
        // }
        // console.log(arr1);
        

// M3: Using for-in loop:-

// arr = ["My", "Name", "is", "Vishal", "and", "their", "Company", "is", "Piecode"];
// arr1 = [ ];
// for (i in arr){
//     if(arr[i] == "Name" || arr[i] == "and" || arr[i] == "Vishal") {
//         arr1.push(arr[i])
//     }
// }
// console.log(arr1)


// M4: Using for-of:-

// arr = ["My", "Name", "is", "Vishal", "and", "their", "Company", "is", "Piecode"];
// arr1 = [ ];
// for (i of arr){
//     if(i == "Name" || i == "and" || i == "Vishal") {
    //         arr1.push(i)
    //     }
    // }
    // console.log(arr1)

//    Reverse a string:
//    let v = prompt('Enter String');
//    s = v.split(' ').reverse().join(' ')
//    console.log(s)
//    
    
    // calculate factorial:-
    function calcFact( num )
    {
    fact = 1
    for(let  i = 1; i <= num; i++ )
    {
    fact = fact * i;
    }

    return fact
    }
    
    console.log(calcFact(5))
