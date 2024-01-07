// Intersection Types

// type Admin = {
//     name: string,
//     privileges: [string]
// }

// type Employee = {
//     name: string,
//     startDate: Date;
// }

// type ElevatedEmployee = Admin & Employee

// const e1: ElevatedEmployee = {
//     name: "hasan",
//     privileges: ["admin"],
//     startDate: new Date()
// }

// console.log(e1)

// Type guards
 
// type Admin = {
//     name: string;
//     privileges: [string];
// }

// type Employee = {
//     name: string;
//     startDate: Date;
// }

// type unKnownEmployee = Admin | Employee

// function printEmployeeInformation(emp: unKnownEmployee){
//     console.log('Name: ' + emp.name)
//     if('privileges' in emp){
//         console.log('Privileges: ' + emp.privileges)
//     }

//     if('startDate' in emp){
//         console.log('startDate: ' + emp.startDate)
//     }
// }
// printEmployeeInformation({name: "Manu", privileges: ["admin"]})


// Descriminated union
interface Bird {
    type: 'Bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal){
    switch(animal.type){
        case 'Bird':
            console.log(animal.flyingSpeed);
            break;
        case 'horse':
            console.log(animal.runningSpeed);
            break;
    }
}

console.log(moveAnimal({type: 'horse', runningSpeed: 55}))