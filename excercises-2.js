// ---------------------
// Define a function max() that takes two numbers as 
// arguments and returns the largest of them. Use the 
// if-then-else construct available in JavaScript.
// ---------------------

function max(a, b) {
    if (a > b) { 
        return a;
    } else if (b > a) {
        return b;
    } else {
        return false;
    }
}

console.assert(max(2,3) === 3)
console.assert(max(23,24) === 24)
console.assert(max(-23, 12) === 12)

// ---------------------
// Define a function maxOfThree() that takes three 
// numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c) {
    if ((a >= b) && (a >= c)) { 
        return a;
    } else if ((b >= a) && (b >= c)) {
        return b;
    } else {
        return c;
    }
}

console.assert(maxOfThree(2,56,3) === 56)
console.assert(maxOfThree(12,3,4) === 12)
console.assert(maxOfThree(-12,4,-5) === 4)

// ---------------------
// Write a function isVowel() that takes a character (i.e. a 
// string of length 1) and returns true if it is a 
// vowel, false otherwise.
// ---------------------

function isVowel(char) {
  
    if (char = 'a', 'e', 'i', 'o', 'u') {
        return true;
    } else {
    return false;
    }
}


console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);
console.assert(isVowel("2") === false)

// ---------------------
// Write a function rovarspraket() that will translate 
// a text into "Rovarspraket". That is, double every 
// consonant and place an occurrence of "o" in between. 
// For example, translate("this is fun") should return 
// the string "tothohisos isos fofunon".
// ---------------------

/* i didn't write the code below, 
but edited one i found online so it might make sense to me.
i sort of understand it, but not quite. i wanted to
leave it here for reference during class. */

function rovarspraket(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let y = "";
    for (i = 0; i < str.length; i++) {
       let current = str.charAt(i); 
      if (vowels.indexOf(current) != -1) {
          y = (y + (current));
      } else {
          y = (y + (current + "o" + current));
      }
    }
    return y;
  }

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")


// ---------------------
// Define a function reverse() that computes the reversal 
// of a string. For example, reverse("jag testar") should 
// return the string "ratset gaj".
// ---------------------

function reverse(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")