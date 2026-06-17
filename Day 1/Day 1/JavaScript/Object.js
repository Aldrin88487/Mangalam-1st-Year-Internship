let person = {
    name: "John",
    age: 30,
    city: "New York",
    address: {
        street: "123 Main St",
        zip: "10001"
    }
};
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.address.street);
console.log(person.address.zip);
person.name = "Jane";
console.log(person.name);
person.country = "USA";
console.log(person.country);
delete person.age;
console.log(person.age);
console.log(person);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("age"));