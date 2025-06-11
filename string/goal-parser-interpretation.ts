// 1678. Goal Parser Interpretation
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

 

// Example 1:

// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".
// Example 2:

// Input: command = "G()()()()(al)"
// Output: "Gooooal"
// Example 3:

// Input: command = "(al)G(al)()()G"
// Output: "alGalooG"

function interpret(command: string): string {
    let l = 0, r = 0,
    result = "";

    while (r < command.length) {
        if (command[l] === "G") {
            result += "G"
            l+=1
            r+=1
            continue;
        } 
        
        r+=1

        if (command[l] === "(" && command[r] === ")") {
            result += "o"
            l+=2
            r+=1
            continue;
        }

        l+=4;
        r+=3;
        result+="al"
    }

    return result;
};