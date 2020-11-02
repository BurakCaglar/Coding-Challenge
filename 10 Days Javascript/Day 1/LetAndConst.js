function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r = readLine();
    // Print the area of the circle:
    let areaOfCircle = (Math.PI * Math.pow(r,2));
    console.log(areaOfCircle);
    // Print the perimeter of the circle:
    let perimeterOfCircle = (2 * Math.PI * r);
    console.log(perimeterOfCircle);
}