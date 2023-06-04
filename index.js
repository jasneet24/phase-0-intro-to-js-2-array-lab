// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield"] 
     

 function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
        cats.unshift(name)
    }

function destructivelyRemoveLastCat(name){
    cats.pop(name)
}


function destructivelyRemoveFirstCat (name){
cats.shift(name)
}


function appendCat(name) { 
let newCats = cats.slice()
newCats.push(name)
return newCats
}
function prependCat(name) { 
let newCats = cats.slice()
newCats.unshift(name)
return newCats
}
function removeLastCat(name) { 
let newCats = cats.slice()
newCats.pop(name)
return newCats
}
function removeFirstCat(name) { 
    let newCats = cats.slice()
    newCats.shift(name)
    return newCats
    }