const person =[
    {
        id:1,
        name: "Moumin",
        address: "456Street"
    }
]

const getPerson = ()=>{
    return [...person,person]
}

let getData = getPerson();
console.log(getData);