function reverseString(s) {
    var reversed = " ";
    try {
        reversed = s.split("").reverse().join("");

    } catch(err) {
        console.log(err.message);
        console.log(s);

    } finally {
        console.log(reversed);
    }
}


function main() {
    const s = eval(readLine());
    
    reverseString(s);
}