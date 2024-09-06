const users = [
    { name: 'Alice', age: 25, hobbies: ['reading', 'swimming'] },
    { name: 'Bob', age: 30, hobbies: ['cycling', 'hiking'] },
    { name: 'Charlie', age: 35, hobbies: ['painting', 'dancing'] }
];

users.forEach(user => {
    const { name, age } = user;
    console.log(`Name: ${name}, Age: ${age}`);
});

const allHobbies = [...users[0].hobbies, ...users[1].hobbies, ...users[2].hobbies];
console.log('All Hobbies:', allHobbies);
