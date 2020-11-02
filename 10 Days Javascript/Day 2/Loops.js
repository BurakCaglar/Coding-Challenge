

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */


function vowelsAndConsonants(s) {
    
    var consonants = [];
    
    let array = s.split("");
    
    for (let char of array){
        if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
            console.log(char);
        }
        else{
            consonants.push(char);
        }
    }
    
    consonants.forEach( element => console.log(element));
}
