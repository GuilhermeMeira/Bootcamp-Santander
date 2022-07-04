array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const dois = {
    value: 2,

}

const tres = {
    value: 3,
}

function mapComThis(array, thisarg){
    return array.map(function (item) {
        return item * this.value; 
    }, thisarg);
}


console.log(mapComThis(array, dois))