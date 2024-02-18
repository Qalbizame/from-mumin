let Person={
    id:1,
    name: "Mohamed",
    address: "12aad",
    isStudent: true
}
// Badalida Key kamid ah Object ga Value giisa
Person.name = "Maria"
// Soo daabicida xadiga objectga
console.log(Person.name.length)
// Soo akhrinta Dhamaan Object
console.log(Person);

// sida loo sameeyo Many Objects
let Customers=[
    {
        id:1,
        name: "Hasna",
        address: "Hargeisa",
        isStudent: false
    },
    {
        id:2,
        name: "Aisha",
        address: "Burco",
        isStudent: true
    },
    {
        id:3,
        name: "Saliima",
        address: "Mogadisho",
        isStudent: false
    }
];

// Nooca Type ee Customers 
console.log(typeof Customers);
// Soo daabac xogta ku jirta Customers
console.log(Customers)