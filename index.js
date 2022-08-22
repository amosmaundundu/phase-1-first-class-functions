/*function monday(){
    console.log('Go for a five-mile run');
    console.log('Pump iron');
}
function tuesday(){
    console.log('Go for a five-mile run');
    console.log('Swim 40 laps');
}
function wednesday(){
    console.log('Go for a five-mile run');
    console.log('Go for a five-mile run');
}
function thursday(){
    console.log('Go for a five-mile run');
    console.log('Pump iron');
}
function friday(){
    console.log('Go for a five-mile run');
    console.log('Swim 40 laps');
}
function runFiveMiles(){
    console.log('Go for a five-mile run');
}
function swimFortyLaps(){
    console.log('Swim 40 laps');
}
function monday(){
    runFiveMiles();
    liftWeights();
}
function excersiceRoutine(postRunActivity){
    runFiveMiles();
    postRunActivity();
}
function monday(){
    excersiceRoutine(liftWeights);
}
function excersiceRoutine(postRunActivity){
runFiveMiles();
postRunActivity();
}
excersiceRoutine(function(){
    console.log('Stretch, Work that core' )
})
excersiceRoutine(()=>console.log('Stretch, Work that core'));
// return functions
function morningRoutine(excersice){
    let breakfast;
    if (excersice===liftWeights){
        breakfast='protein bar';
    }else if (excersice===swimFortyLaps){
        breakfast='kales smoothie';
    
    }else{
        breakfast= "granola";
    }
    excersiceRoutine(excersice)
    return function(){
        console.log(`Nom nom nom, this ${breakfast} is delicious!`)
    }
} */

const chai =  chai;
const spy = chai-spy;
function receivesAFunction(){
    return 'spy';
        
    }
function callback(){
    return `expect ${spy} to have been called`;
}
function receivesAFunction(spy){
    spy();
}
function returnsANamedFunction(){
    const fn=() =>{return 'fn';
    }
 return fn;
}
 let returnsAnAnonymousFunction=()=>{
  return returnsAnAnonymousFunction;
}

    
   

   




