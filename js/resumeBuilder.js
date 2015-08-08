/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("Sofia Roumeliotou<br>");
//
// var awesomeThoughts = "I am sofia and i love koulis and i am awesome";
// console.log(awesomeThoughts);
// var fun = awesomeThoughts.replace("awesome", "fun");
// $("#main").append(fun+"<br>");
var name = "Sofia Roumeliotou";
var role = "web Developer";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
