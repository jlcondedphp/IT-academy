let array = [];

function f(){
    for(let i=0; i<10; i++){        
        console.log(i);       
    }
}

for(let i=0; i<10; i++){   
    console.log('Iteracion numero: ' + i + '\n');  
    array.push(f()); 
    console.log('\n');    
}