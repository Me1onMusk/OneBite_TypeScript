
function swap<T, U>(a: T, b: U) {
    return [b, a];
};

const [a, b] = swap("1", 2);

function returnFirstValue<T>(data: [T,...unknown[]]) {
    return data[0];
};

let num = returnFirstValue([1, 2, 3]);

let str = returnFirstValue([0, "1", "2", "3"]);

function getLength<T extends { length: number }>(data: T) {
    return data.length;
};

let var1 = getLength([1, 2, 3]);

let var2 = getLength("123");

let var3 = getLength({ length: 3 });

// let var4 = getLength(3);