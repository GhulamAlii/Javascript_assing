//Chpt 58-67 DOM


// 1st Question 
var main_content = document.getElementById("main-content");
console.log(mainContent);

// 2 Question 
var elements = document.getElementById("main-content").childNodes;
console.log(elements);

// 3 Question 
var n = document.getElementsByClassName("render");
for(var i = 0;i< n.length ;i++){
    document.write(ren[i].innerHTML + "<br>");
}

// 4 Question 
document.getElementById("first-name").value = "Ghulam";
// 5 Question 
document.getElementById("last-name").value = "Ali";
document.getElementById("email").value = "sairgust@gmail.com";
