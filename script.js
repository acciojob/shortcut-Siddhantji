
//To implement the shortcut function according to the given instructions, you can simply extract the initial letters of both input strings and return them. Here's the implementation:

//javascript
//Copy code
function shortcut(s1, s2) {
  // Extract the initial letters of both strings
  const initial1 = s1.charAt(0);
  const initial2 = s2.charAt(0);
if (initial1 ==="" || initial2 === "") {
	return "";
}
  // Return the concatenation of initial letters
  return initial1 + initial2;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
