console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = 'Luana';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Thiago';
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}
// Iteration 3: Loops
let driverUpper = '';
for (let i = 0; i < hacker1.length; i += 1){
    driverUpper += hacker1[i].toUpperCase();
    driverUpper += (' ');
}
console.log(driverUpper);
let navigator = '';
for (let i = hacker2.length - 1 ; i >= 0 ; i -= 1) {
    navigator += hacker2[i];
}
console.log(navigator);
if (hacker1 > hacker2){
    console.log(`The driver's name goes first.`);
} else if (hacker2 > hacker1) { 
    console.log(`Yo, the navigator goes first definitely`);
} else {
    console.log(`What?! You both have the same name?`);
}
// Bonus 1
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ligula laoreet, tristique nunc vitae, scelerisque nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam felis felis, congue sed vulputate nec, iaculis id tortor. Nam sit amet arcu eget libero ultricies vestibulum. Quisque in vulputate risus. Vestibulum arcu augue, ullamcorper ut hendrerit nec, luctus euismod tortor. Fusce sit amet dignissim metus, ac fermentum nisi. In fringilla lorem sed lobortis sollicitudin. Donec iaculis neque at lacus aliquam faucibus. Donec commodo egestas luctus. Fusce interdum, ex eu rhoncus placerat, massa neque rutrum lorem, ornare congue orci dui vitae nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nec sollicitudin sem. Proin eu consequat elit. Phasellus et massa sit amet tellus pellentesque rhoncus at eu ligula. \nAenean tristique maximus ante, eget aliquet libero consectetur at. Pellentesque eu ex pharetra, lobortis diam ut, elementum urna. Duis faucibus fermentum ligula id blandit. Duis sollicitudin placerat augue, vitae pellentesque erat consequat non. Aliquam venenatis massa id pulvinar ornare. Mauris hendrerit libero in tellus malesuada fermentum. Donec consequat pretium iaculis. Cras elementum ligula ut elit ullamcorper viverra. Fusce dictum mauris eros, vel imperdiet erat faucibus vel. Phasellus a tincidunt purus. Nulla facilisi. Integer non urna sit amet quam rhoncus egestas. Aenean elementum eros a enim iaculis molestie. \nNullam at tincidunt nisi, imperdiet vestibulum nisi. In facilisis libero sed quam egestas, id volutpat tortor eleifend. Vivamus ipsum purus, imperdiet ac commodo ac, fringilla vel ex. Vestibulum quis ex sed ex iaculis efficitur eu eu tellus. Ut vitae nisl eros. Donec sit amet pharetra erat, quis ornare nulla. Etiam blandit leo vitae odio ornare ultrices."
console.log(loremIpsum.split(' ').length);
function countEt (string, word){
    return console.log(string.split(word).length -1);
}
countEt(loremIpsum, 'et');
// Bonus 2
let phraseToCheck = `No 'x' in Nixon`;
function isPalindrome(str){
    let normalized = str.toLowerCase().match(/[a-z]/gi).reverse();
    return normalized.join('') === normalized.reverse().join('');
}
if(isPalindrome(phraseToCheck)){
    console.log('Yes !!');
} else{
    console.log('No :(');
}