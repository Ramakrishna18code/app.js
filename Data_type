function identifyDataType(input) {
    if (typeof input === 'string') {
        console.log(`Data Type: String, Value: "${input}"`);
    } else if (typeof input === 'number') {
        console.log(`Data Type: Number, Value: ${input}`);
    } else if (typeof input === 'boolean') {
        console.log(`Data Type: Boolean, Value: ${input}`);
    } else if (Array.isArray(input)) {
        console.log(`Data Type: Array, Values: [${input.join(', ')}]`);
    } else if (typeof input === 'object' && input !== null) {
        console.log(`Data Type: Object, Value: ${JSON.stringify(input)}`);
    } else if (input === null) {
        console.log('Data Type: Null, Value: null');
    } else if (typeof input === 'undefined') {
        console.log('Data Type: Undefined');
    } else {
        console.log('Data Type: Unknown');
    }
}
identifyDataType("Hello"); 
identifyDataType(123);      
identifyDataType(true);     
identifyDataType([1, 2, 3]); 
identifyDataType({ a: 1 });  
identifyDataType(null);      
identifyDataType(undefined); 
