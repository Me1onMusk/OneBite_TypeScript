
/* map 메서드 */ 
const array = [1, 2, 3, 4, 5];
const newArray = array.map((it) => it * 2);

function map<T, U>(arr: T[], callback: (item: T) => U) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    };

    return result;
};

map(array, (it) => it * 2); 
map(['a', 'b', 'c'], (it) => parseInt(it));

/* forEach 메서드 */
const array2 = [1, 2, 3, 4, 5];
array2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
    for(let i=0; i < arr.length; i++) {
        callback(arr[i]);
    };
};

forEach(array2, (it) => {
    console.log(it.toFixed())
});

forEach(['1','2','3'], (it) => {
    it
});