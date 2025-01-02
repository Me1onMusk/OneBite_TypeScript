
const a = 1;

const Cars = [
    {name:"sonata", brand: "Hyundai"}, 
    {name:"niro", brand: "Kia"}, 
    {name:"avante", brand: "Hyundai"}
]

function Print({name, brand}) {
    console.log(`name: ${name}, brand: ${brand}`);
};

Cars.forEach(
    car => Print(car)
);