function demonstrateIterations() {
    const array = [10, 20, 30, 40, 50]; 
    const object = { a: 'apple', b: 'banana', c: 'cherry' };  

    
    console.log('=== For Loop ===');
    for (let i = 0; i < array.length; i++) {
        console.log(`Index ${i}: ${array[i]}`);
    }

    
    console.log('\n=== For...of Loop ===');
    for (const value of array) {
        console.log(`Value: ${value}`);
    }

    
    console.log('\n=== For...in Loop (Object) ===');
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(`Key: ${key}, Value: ${object[key]}`);
        }
    }

    
    console.log('\n=== For...in Loop (Array) ===');
    for (const index in array) {
        console.log(`Index ${index}: ${array[index]}`);
    }

    
    console.log('\n=== While Loop ===');
    let i = 0;
    while (i < array.length) {
        console.log(`Index ${i}: ${array[i]}`);
        i++;
    }

    
    console.log('\n=== Do...While Loop ===');
    i = 0;
    do {
        console.log(`Index ${i}: ${array[i]}`);
        i++;
    } while (i < array.length);
}

demonstrateIterations();
