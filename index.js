// # Recursion

// #### Write a function which can reverse string
// * Write a JavaScript function that reverse a string.
// Sample Data and output:
// Example reverse("hello world")
// Expected Output: dlrow olleh


const string = "the morning is upon us";

const reverse = string => {
    let newString = "";
    if (string.length === 0) {
       return "";
    };
    return string[string.length - 1] + reverse(string.slice(0, -1));
};

const reversedString = reverse(string); 
console.log(reversedString);