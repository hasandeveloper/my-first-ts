// Intersection Types
function moveAnimal(animal) {
    switch (animal.type) {
        case 'Bird':
            console.log(animal.flyingSpeed);
            break;
        case 'horse':
            console.log(animal.runningSpeed);
            break;
    }
}
console.log(moveAnimal({ type: 'horse', runningSpeed: 55 }));
