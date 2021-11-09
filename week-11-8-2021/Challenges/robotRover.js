const rotation = [
    [0, 1], 
    [-1, 0]
];

function multiply(A, v){
    
    if(A[0].length != v.length){
        console.log("can't matrix multiply");
        return null;
    }

    let vec = [];
    for(let i = 0; i < A.length; i++){
        let entry = 0;
        for(let j = 0; j < A[0].length; j++){
            entry += v[j] * A[i][j];
        }
        vec.push(entry);
    }

    return vec;
}

function add(v1, v2){
    let vec = [];
    for(let i = 0; i < v1.length; i++){
        vec.push(v1[i] + v2[i]);
    }
    return vec;
}

//arr.forEach((value, index) => {arr[index] *= 5});

function trackRobot(){

    let inputVector = [];
    for(let i = 0; i < arguments.length; i++){
        inputVector.push(arguments[i]);
    }
    console.log("Tracking on given input vector (" + inputVector + ") :");

    let pos = [0,0];
    let dir = [0,1];
    for(let i = 0; i < arguments.length; i++){
        let arg = arguments[i];

        //console.log(arg);

        let displacement = dir.map(
            x => x *= arg
        );
        
        pos = add(pos, displacement);
        
        dir = multiply(rotation, dir);
        
    }
    return pos;
}

function testRobot(){

    console.log(trackRobot(1, 5, 2, 34));

    console.log(trackRobot(20, 30, 10, 40) );

    console.log(trackRobot(-10, 20, 10));

    console.log(trackRobot());
}

module.exports = {testRobot};