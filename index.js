const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat) {
    cats.push('Ralph')
};

function destructivelyPrependCat(cat) {
    cats.unshift("Bob")
};

function destructivelyRemoveLastCat(cat) {
    cats.pop()
};

function destructivelyRemoveFirstCat(cat) {
    cats.shift()
};

function appendCat(cat) {
// return [...cats, "Broom"] //
    let newCats = cats.slice()
    newCats.push("Broom")
    return newCats
};

 function prependCat(cat) {
    let newCats = cats.slice()
    newCats.unshift("Arnold")
    return newCats
 };

 function removeLastCat(cat) {
    let newCats = cats.slice()
    newCats.pop()
    return newCats
 };

 function removeFirstCat(cat) {
    let newCats = cats.slice()
    newCats.shift()
    return newCats
 };