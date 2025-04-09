// STRING

// let str1 = 'Hello World';
// let str2 = "Hello Javascript";
// let str3 = `hello String`; // Backticks, multiline string

// console.log(str1);
// console.log(str2);
// console.log(str3);

// console.log(str1 + " " + str2 + " "+ str3); 

// console.log(`${str1} ${str2} ${str3}`); // String Interpolation


let str = "Hello World";

// string Length- Returns the length of a String object.
console.log(str.length);

console.log(str[0]);
console.log(str[6]);
console.log(str[-1]);


// String Methods

// 1. Slice() - Returns a section of a string.
let str1 = "Javascript";
console.log(str1.slice(0,4));
console.log(str1.slice(-10,-6));

// 2. substring() - Returns the substring at the specified location within a String object.
console.log(str1.substring(0,4));
console.log(str1.substring(-10,-6));

// 3. Substr() - The declaration was marked as deprecated here.
console.log(str1.substr(4,6));


let str2 = "Hi everyone, Hi to Javascript";

//4.  Replace() - Replaces text in a string, using a regular expression or search string.
console.log(str2.replace("Hi","Welcome"));

//5.  ReplaceAll() - Replace all instances of a substring in a string, using a regular expression or search string.
console.log(str2.replaceAll("Hi", "welcome"));


let str4 = "       React        ";
//6.  Trim() - Removes the leading and trailing white space and line terminator characters from a string.
console.log(str4.trim());

//7.  TrimStart() - Removes the leading white space and line terminator characters from a string.
console.log(str4.trimStart());

//8.  TrimEnd() - Removes the trailing white space and line terminator characters from a string.
console.log(str4.trimEnd());


let str5 = "Web Development";
// 9. ToUpperCase() - Converts all the alphabetic characters in a string to uppercase.
console.log(str5.toUpperCase());

// 10. ToLowerCase() - Converts all the alphabetic characters in a string to lowercase.
console.log(str5.toLowerCase());

// 11. charCodeAt() - Returns the Unicode value of the character at the specified location.
let str6  = "MONGODB";
console.log(str6.charCodeAt(0));

// 12. charAt() - Returns the character at the specified index.
console.log(str6.charAt(0));

// 13. Split() - Split a string into substrings using the specified separator and return them as an array.
let str7 = "Welcome";
console.log(str7.split());

console.log(str7.split(""));

console.log(str7.split("l"));

let data = "nitin";
// let val = data.split("");
// let reverseVal = val.reverse();
// let result = reverseVal.join("");
// console.log(result);

let result = data.split("").reverse().join("");

if(result == result) {
    console.log("palindrome");
}
else {
    console.log("Not Palindrome");
}


